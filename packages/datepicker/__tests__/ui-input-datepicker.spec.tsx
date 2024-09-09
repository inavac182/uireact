import React from 'react';

import { fireEvent, screen, waitFor } from '@testing-library/react';
import { UiIcon } from '@uireact/icons';

import { uiRender } from '../../../__tests__/utils/render';
import { UiDatepickerLocalizedLabels, UiInputDatepicker } from '../src';

const labels: UiDatepickerLocalizedLabels = {
  months: {
    january: "Enero",
    february: "Febrero",
    march: "Marzo",
    april: "Abril",
    may: "Mayo",
    june: "Junio",
    july: "Julio",
    august: "Agosto",
    september: "Septiembre",
    october: "Octubre",
    november: "Noviembre",
    december: "Diciembre"
  },
  weekDays: {
    sunday: "Domingo",
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miercoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sabado"
  }
}

describe('<UiDatepicker />', () => {
  // January 2028
  const date = new Date(2028, 1, 0);

  it('renders fine', async () => {
    uiRender(<UiInputDatepicker date={date} onChange={jest.fn()} name="someDate" />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('textbox')).toHaveValue('2028-01-31');

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    
    expect(screen.getByText('January 2028')).toBeVisible();
  });

  it('renders fine with localized strings', async () => {
    uiRender(<UiInputDatepicker date={date} onChange={jest.fn()} name="someDate" localizedLabels={labels} />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('textbox')).toHaveValue('2028-01-31');

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    
    expect(screen.getByText('Enero 2028')).toBeVisible();
    expect(screen.getByText('Domingo')).toBeVisible();
  });

  it('renders fine with localized strings and next month visible', async () => {
    uiRender(<UiInputDatepicker date={date} onChange={jest.fn()} name="someDate" localizedLabels={labels} showNextMonth />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('textbox')).toHaveValue('2028-01-31');

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    
    expect(screen.getByText('Enero 2028')).toBeVisible();
    expect(screen.getByText('Febrero 2028')).toBeVisible();
    expect(screen.getAllByText('Domingo')[0]).toBeVisible();
    expect(screen.getAllByText('Domingo')[1]).toBeVisible();
  });

  it('renders fine when no date is passed', async () => {
    uiRender(<UiInputDatepicker onChange={jest.fn()} name="someDate" />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('renders fine when using disablePastDates', async () => {
    const someDate = new Date('2029-01-25 ');

    uiRender(<UiInputDatepicker onChange={jest.fn()} date={someDate} name="someDate" disablePastDates />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: '24' })).toBeDisabled();
  });

  it('renders error correctly', () => {
    uiRender(<UiInputDatepicker onChange={jest.fn()} name="someDate" error="Select another date" />);

    expect(screen.getByRole('textbox')).toBeVisible();

    expect(screen.getByText('Select another date')).toBeVisible();
  });

  it('renders fine with default date in input value when useDateAsDefaultInputValue is passed', () => {
    // January 2028
    const date = new Date(2028, 1, 0);

    uiRender(<UiInputDatepicker date={date} onChange={jest.fn()} name="someDate" />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('textbox')).toHaveValue('2028-01-31');
  });

  it('renders fine in large', () => {
    uiRender(<UiInputDatepicker date={date} onChange={jest.fn()} size="large" />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('renders fine when size is unrecognized', () => {
    //@ts-ignore
    uiRender(<UiInputDatepicker date={date} onChange={jest.fn()} size="whatever" />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('renders fine when size is small', () => {
    uiRender(<UiInputDatepicker date={date} onChange={jest.fn()} size="small" />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('renders fine when size is xsmall', () => {
    uiRender(<UiInputDatepicker date={date} onChange={jest.fn()} size="xsmall" />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('renders fine in xlargem and with icon', () => {
    uiRender(
      <UiInputDatepicker
        date={date}
        onChange={jest.fn()}
        size="xlarge"
        icon={<UiIcon icon="CalendarLines" testId="calendar-icon" />}
      />
    );

    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByTestId('calendar-icon')).toBeVisible();
  });

  it('renders fine with label', () => {
    uiRender(<UiInputDatepicker date={date} label="date picker input" onChange={jest.fn()} />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'date picker input' })).toBeVisible();
  });

  it('renders fine with label on top', () => {
    uiRender(<UiInputDatepicker date={date} label="date picker input" labelOnTop onChange={jest.fn()} />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'date picker input' })).toBeVisible();
  });

  it('renders fine with format yyyy/mm/dd', async () => {
    // November 1, 2025

    const date = new Date(2025, 10, 1);
    const onChange = jest.fn();

    uiRender(<UiInputDatepicker date={date} label="date picker input" onChange={onChange} dateFormat="yyyy/mm/dd" />);

    expect(screen.getByRole('textbox', { name: 'date picker input' })).toBeVisible();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: '1' }));

    expect(screen.getByRole('textbox')).toHaveValue('2025/11/01');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('2025/11/01');
  });

  it('renders fine with default format yyyy-mm-dd', async () => {
    // November 1, 2025

    const date = new Date(2025, 10, 1);

    uiRender(<UiInputDatepicker date={date} label="date picker input" onChange={jest.fn()} />);

    expect(screen.getByRole('textbox', { name: 'date picker input' })).toBeVisible();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: '1' }));

    expect(screen.getByRole('textbox')).toHaveValue('2025-11-01');
  });

  it('renders fine with default format mm/dd/yyyy', async () => {
    // November 1, 2025

    const date = new Date(2025, 10, 1);

    uiRender(<UiInputDatepicker date={date} label="date picker input" onChange={jest.fn()} dateFormat="mm/dd/yyyy" />);

    expect(screen.getByRole('textbox', { name: 'date picker input' })).toBeVisible();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: '1' }));

    expect(screen.getByRole('textbox')).toHaveValue('11/01/2025');
  });

  it('renders fine with default format dd/mm/yyyy', async () => {
    // November 1, 2025

    const date = new Date(2025, 10, 1);

    uiRender(<UiInputDatepicker date={date} label="date picker input" onChange={jest.fn()} dateFormat="dd/mm/yyyy" />);

    expect(screen.getByRole('textbox', { name: 'date picker input' })).toBeVisible();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: '1' }));

    expect(screen.getByRole('textbox')).toHaveValue('01/11/2025');
  });

  it('input value does not change on input typing', () => {
    uiRender(<UiInputDatepicker onChange={jest.fn()} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '23' } });

    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('renders fine with category', () => {
    uiRender(<UiInputDatepicker date={date} onChange={jest.fn()} category="positive" />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('Datepicker closes when using esc key', async () => {
    const onChange = jest.fn();

    uiRender(<UiInputDatepicker date={date} onChange={onChange} testId="date-picker-id" />);

    expect(screen.getByRole('textbox')).toBeVisible();

    fireEvent.focus(screen.getByRole('textbox'));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    const datepicker = screen.getByTestId('date-picker-id');
    fireEvent.keyDown(datepicker, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});
