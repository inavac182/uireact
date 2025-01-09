import React from 'react';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { UiValidator } from '@uireact/validator';

import { uiRender } from '../../../__tests__/utils';
import { UiEzForm, UiEzFormDecoratorsPositions } from '../src';
import { UiText } from '@uireact/text';

const validator = new UiValidator();

const schema = {
  firstName: validator.field('text').ezMetadata({ label: 'First Name' }).present(),
  age: validator.field('numeric').ezMetadata({ label: 'Your age' }),
  birthday: validator.field('date').ezMetadata({ label: 'Birthday' }),
  phone: validator.field('phone').ezMetadata({ label: 'Your Phone' }).optional(),
  email: validator
    .field('email')
    .ezMetadata({ label: 'Your email', icon: 'Mail' }).present()
    .when('phone', validator.is().present())
    .run(validator.is().optional())
    .else(validator.is().present("The email is required if you don't provide your phone number.")),
  terms: validator.field('boolean').ezMetadata({ label: 'Terms and conditions' }),
  type: validator.field('choice').ezMetadata({ label: 'Account type' }).oneOf(['user', 'admin', 'editor']),
  description: validator.field('text').ezMetadata({ label: 'Description', paragraph: true }),
  password: validator.field('text').ezMetadata({ label: 'Password', protected: true }),
  code: validator.field('numeric').ezMetadata({ label: 'Code', code: true }).length(5,5)
}

describe('<UiEzForm />', () => {
  const globalSubmit = jest.fn().mockImplementation((e) => {
    e.preventDefault();
  });

  beforeEach(() => {
    window.addEventListener('submit', globalSubmit);
  });

  afterEach(() => {
    globalSubmit.mockClear();
  });

  it('Should render correctly', () => {
    uiRender(<UiEzForm schema={schema} useBrowserValidation submitLabel='Submit' />);

    expect(screen.getByRole('textbox', { name: 'First Name' })).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'Birthday' })).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'Your email' })).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'Your Phone' })).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'Description' })).toBeVisible();
    expect(screen.getByRole('combobox', { name: 'Account type' })).toBeVisible();
    expect(screen.getByLabelText('Password')).toBeVisible();
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');
  });

  it('Should initialize form with given data', () => {
    uiRender(<UiEzForm schema={schema} initialData={{ firstName: 'Some initial value' }} submitLabel='Submit' />);

    expect(screen.getByRole('textbox', { name: 'First Name' })).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'First Name' })).toHaveValue('Some initial value');
  });

  it('Should trigger on submit correctly when no errors are found', () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      firstName: validator.field('text').ezMetadata({ label: 'First Name' })
    }

    uiRender(<UiEzForm schema={schema} submitLabel='Submit' onSubmit={onSubmit} />);

    const input = screen.getByRole('textbox', { name: 'First Name' });

    fireEvent.change(input, { target: { value: 'Some value' } });

    expect(input).toHaveValue('Some value');

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][1]).toStrictEqual({ firstName: 'Some value' });
  });

  it('Should render errors on submit when there are errors are found and clean them once are addressed', () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      firstName: validator.field('text').ezMetadata({ label: 'First Name' }).present(),
      description: validator.field('text').ezMetadata({ label: 'Description', paragraph: true }).present("Description is required")
    }

    uiRender(<UiEzForm schema={schema} submitLabel='Submit' onSubmit={onSubmit} />);

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(screen.getByText('This is required')).toBeVisible();
    expect(screen.getByText('Description is required')).toBeVisible();

    const input = screen.getByRole('textbox', { name: 'First Name' });
    const textArea = screen.getByRole('textbox', { name: 'Description' });

    fireEvent.change(input, { target: { value: 'Some value' } });
    fireEvent.change(textArea, { target: { value: 'Some description' } });fireEvent.change(textArea, { target: { value: 'Some description' } });

    expect(input).toHaveValue('Some value');
    expect(textArea).toHaveValue('Some description');

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.queryByText('This is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Description is required')).not.toBeInTheDocument();

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('Should render errors on submit when there conditional errors', () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      phone: validator.field('text').ezMetadata({ label: 'Your phone' }).optional(),
      email: validator
        .field('text')
        .ezMetadata({ label: 'Your email' })
        .when('phone', validator.is().present())
        .run(validator.is().optional())
        .else(validator.is().present("The email is required if phone is not provided"))
    }

    uiRender(<UiEzForm schema={schema} submitLabel='Submit' onSubmit={onSubmit} />);

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(0);

    expect(screen.getByText('The email is required if phone is not provided')).toBeVisible();

    const input = screen.getByRole('textbox', { name: 'Your phone' });

    fireEvent.change(input, { target: { value: '1111111' } });

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.queryByText('The email is required if phone is not provided')).not.toBeInTheDocument();

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('Should save correctly datepicker date', async () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      birthday: validator.field('date').ezMetadata({ label: 'Birthday' }).present()
    }

    const initialData = {
      birthday: '2028/03/09'
    }

    uiRender(<UiEzForm schema={schema} onSubmit={onSubmit} initialData={initialData} submitLabel='Submit' />);

    expect(screen.getByRole('textbox', { name: 'Birthday' })).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'Birthday' })).toHaveValue('2028-03-09');

    fireEvent.focus(screen.getByRole('textbox', { name: 'Birthday' }));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: '1' }));

    expect(screen.getByRole('menu')).toBeVisible();

    const datepicker = screen.getByRole('menu');
    fireEvent.keyDown(datepicker, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Birthday' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('Should save correctly switch toogle', async () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      terms: validator.field('boolean').ezMetadata({ label: 'Terms and conditions' }).present("You have to accept our terms")
    }

    const initialData = {
      terms: false
    }

    uiRender(<UiEzForm schema={schema} onSubmit={onSubmit} initialData={initialData} submitLabel='Submit' />);

    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();
    
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).not.toHaveBeenCalled();
    expect(screen.getByText('You have to accept our terms')).toBeVisible();

    fireEvent.click(screen.getByText('Terms and conditions'));

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('Should save correctly select change', async () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      type: validator.field('choice').ezMetadata({ label: 'Account type' }).oneOf(['user', 'admin', 'editor'], "You have to select an account type")
    }

    const initialData = {
      type: 'admin'
    }

    uiRender(<UiEzForm schema={schema} onSubmit={onSubmit} initialData={initialData} submitLabel='Submit' />);

    const select = screen.getByRole('combobox', { name: 'Account type' });

    expect(select).toBeVisible();
    expect(select).toHaveValue('admin');
    
    fireEvent.change(select, { target: { value: '' } });

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).not.toHaveBeenCalled();

    expect(screen.getByText('You have to select an account type')).toBeVisible();

    fireEvent.change(select, { target: { value: 'user' } });

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('Should save correctly digits change', async () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      code: validator
        .field('numeric')
        .ezMetadata({ label: 'Your code', code: true })
        .present("The code is required")
        .length(2,2, 'The code has to be 2 digits long')
    }

    const initialData = {
      code: ''
    }

    uiRender(<UiEzForm schema={schema} onSubmit={onSubmit} initialData={initialData} submitLabel='Submit' />);

    const firstInput = screen.getAllByRole('textbox')[0];
    const secondInput = screen.getAllByRole('textbox')[1];

    expect(firstInput).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).not.toHaveBeenCalled();

    expect(screen.getByText('The code is required')).toBeVisible();

    fireEvent.change(firstInput, { target: { value: '1' } });

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByText('The code has to be 2 digits long')).toBeVisible();


    fireEvent.change(secondInput, { target: { value: '2' } });

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('Should prevent submit when using browser validation and digits change', async () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      code: validator
        .field('numeric')
        .ezMetadata({ label: 'Your code', code: true })
        .present("The code is required")
        .length(2,2, 'The code has to be 2 digits long')
    }

    const initialData = {
      code: ''
    }

    uiRender(<UiEzForm schema={schema} onSubmit={onSubmit} initialData={initialData} submitLabel='Submit' useBrowserValidation />);

    const firstInput = screen.getAllByRole('textbox')[0];

    expect(firstInput).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.queryByText('The code is required')).not.toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();

    
  });

  it('Should fallback to numeric input if no length is provided', async () => {
    const consoleError = console.error;
    console.error = jest.fn();

    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      code: validator
        .field('numeric')
        .ezMetadata({ label: 'Your code', code: true })
        .present("The code is required")
    }

    const initialData = {
      code: ''
    }

    uiRender(<UiEzForm schema={schema} onSubmit={onSubmit} initialData={initialData} submitLabel='Submit' />);

    const input = screen.getByRole('spinbutton', { name: 'Your code' });

    expect(input).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalled();

    expect(screen.getByText('The code is required')).toBeVisible();

    fireEvent.change(input, { target: { value: '1' } });

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    console.error = consoleError;
  });

  it('Should NOT render when choice field does NOT have options', async () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      type: validator.field('choice').ezMetadata({ label: 'Account type' })
    }

    const initialData = {
      type: 'admin'
    }

    uiRender(<UiEzForm schema={schema} onSubmit={onSubmit} initialData={initialData} submitLabel='Submit' />);
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
  });

  it('Should render errors on datepicker input', async () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      birthday: validator.field('date').ezMetadata({ label: 'Birthday' }).present()
    }

    uiRender(<UiEzForm schema={schema} onSubmit={onSubmit} submitLabel='Submit' />);

    expect(screen.getByRole('textbox', { name: 'Birthday' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(0);

    expect(screen.getByText('This is required')).toBeVisible();
  });

  it('useBrowserValidation prevents onSubmit from being called if browser validation fails.', async () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      birthday: validator.field('date').ezMetadata({ label: 'Birthday' }).present(),
      description: validator.field('text').ezMetadata({ paragraph: true }).present()
    }

    uiRender(<UiEzForm schema={schema} onSubmit={onSubmit} submitLabel='Submit' useBrowserValidation />);

    expect(screen.getByRole('textbox', { name: 'Birthday' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(0);

    expect(screen.queryByText('This is required')).not.toBeInTheDocument();
  });

  it('Renders empty when type is not supported', () => {
    const schema = {
      //@ts-ignore
      firstName: validator.field('somethingWrong')
    }

    uiRender(<UiEzForm schema={schema} submitLabel='Submit' />);

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('Should trigger default submit method when no onSubmit callback is passed and validation passes', () => {
    const schema = {
      firstName: validator.field('text').ezMetadata({ label: 'First Name' })
    }

    uiRender(<UiEzForm schema={schema} submitLabel='Submit' />);

    const input = screen.getByRole('textbox', { name: 'First Name' });

    fireEvent.change(input, { target: { value: 'Some value' } });

    expect(input).toHaveValue('Some value');

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(globalSubmit).toHaveBeenCalledTimes(1);
  });

  it('Should render cancel button correctly and trigger cancel CB when used', () => {
    const onCancel = jest.fn();
    uiRender(<UiEzForm schema={schema} cancelLabel='Reset' onCancel={onCancel} submitLabel='Submit' />);

    expect(screen.getByRole('textbox', { name: 'First Name' })).toBeVisible();
    
    expect(screen.getByRole('button', { name: 'Reset' })).toBeVisible();
  
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));

    expect(onCancel).toHaveBeenCalled();
  });

  it('Should render correctly when buttons are stacked', () => {
    const onCancel = jest.fn();
    const onSubmit = jest.fn();
    uiRender(<UiEzForm schema={{ name: validator.field("text") }} cancelLabel='Reset' onCancel={onCancel} onSubmit={onSubmit} submitLabel='Submit' buttonsAlignment='stacked' />);

    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeVisible();
  
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));

    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('Should render correctly the decorators', () => {
    const decorators: UiEzFormDecoratorsPositions = {
      aboveActions: <UiText>Above actions decorator</UiText>,
      belowActions: <UiText>Below actions decorator</UiText>
    };

    uiRender(<UiEzForm schema={{ name: validator.field("text") }} cancelLabel='Reset' submitLabel='Submit' decorators={decorators} />);

    expect(screen.getByText('Above actions decorator')).toBeVisible();
    expect(screen.getByText('Below actions decorator')).toBeVisible();
  });

  it('Should render correctly hidden inputs', () => {
    const schema = {
      token: validator.field('text').ezMetadata({ hidden: true })
    }
    const onSubmit = jest.fn();

    uiRender(<UiEzForm schema={schema} initialData={{ token: 'some-hidden-value' }} submitLabel='Submit' onSubmit={onSubmit} />);

    expect(screen.getByTestId("ezforms-hidden-input")).not.toBeVisible();
    expect(screen.getByTestId("ezforms-hidden-input")).toBeInTheDocument();
    expect(screen.getByTestId("ezforms-hidden-input")).toHaveValue('some-hidden-value');

    fireEvent.click(screen.getByRole('button'));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][1]).toStrictEqual({ token: 'some-hidden-value' });
  });
});
