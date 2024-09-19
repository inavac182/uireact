import React from 'react';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { UiValidator } from '@uireact/validator';

import { uiRender } from '../../../__tests__/utils';
import { UiEzForm } from '../src';

const validator = new UiValidator();

const schema = {
  firstName: validator.field('text').ezMetada({ label: 'First Name' }).isRequired(),
  age: validator.field('numeric').ezMetada({ label: 'Your age' }),
  email: validator.field('email').ezMetada({ label: 'Your email', icon: 'Mail' }),
  birthday: validator.field('date').ezMetada({ label: 'Birthday' }),
  phone: validator.field('phone').ezMetada({ label: 'Your Phone' }),
  terms: validator.field('boolean').ezMetada({ label: 'Terms and conditions' })
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
      firstName: validator.field('text').ezMetada({ label: 'First Name' })
    }

    uiRender(<UiEzForm schema={schema} submitLabel='Submit' onSubmit={onSubmit} />);

    const input = screen.getByRole('textbox', { name: 'First Name' });

    fireEvent.change(input, { target: { value: 'Some value' } });

    expect(input).toHaveValue('Some value');

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][1]).toStrictEqual({ firstName: 'Some value' });
  });

  it('Should render errors on submit when there are errors are found', () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      firstName: validator.field('text').ezMetada({ label: 'First Name' }).isRequired(),
      email: validator.field('email').ezMetada({ label: 'Your email' }).isRequired(),
    }

    uiRender(<UiEzForm schema={schema} submitLabel='Submit' onSubmit={onSubmit} />);

    const input = screen.getByRole('textbox', { name: 'First Name' });

    fireEvent.change(input, { target: { value: 'Some value' } });

    expect(input).toHaveValue('Some value');

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(screen.getByText('This is required')).toBeVisible();
  });

  it('Should save correctly datepicker date', async () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      birthday: validator.field('date').ezMetada({ label: 'Birthday' }).isRequired()
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
      terms: validator.field('boolean').ezMetada({ label: 'Terms and conditions' }).isRequired("You have to accept our terms")
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

  it('Should render errors on datepicker input', async () => {
    const onSubmit = jest.fn().mockImplementation((e) => {
      e.preventDefault();
    });

    const schema = {
      birthday: validator.field('date').ezMetada({ label: 'Birthday' }).isRequired()
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
      birthday: validator.field('date').ezMetada({ label: 'Birthday' }).isRequired()
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
      firstName: validator.field('text').ezMetada({ label: 'First Name' })
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
});
