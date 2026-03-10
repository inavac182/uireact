import React from 'react';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiDatepicker } from '../src';

describe('<UiDatepicker />', () => {
  // January 2028
  const date = new Date(2028, 1, 0);

  it('renders fine', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: 'January' })).toBeVisible();
    expect(screen.getByText('Sun')).toBeVisible();
    expect(screen.getByText('Mon')).toBeVisible();
    expect(screen.getByText('Tue')).toBeVisible();
    expect(screen.getByText('Wed')).toBeVisible();
    expect(screen.getByText('Thu')).toBeVisible();
    expect(screen.getByText('Fri')).toBeVisible();
  });

  it('renders fine with close button on menu datepicker', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} closeLabel="Done" isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: 'January' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Done' })).toBeVisible();
  });

  it('renders previous month when previous month is in previous year', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByTestId('datepicker-previous-month-button'));
    expect(screen.getByRole('button', { name: 'December' })).toBeVisible();
    expect(screen.getByRole('button', { name: '2027' })).toBeVisible();
  });

  it('renders previous month when previous month is in current year', async () => {
    // December 2028
    const date = new Date(2028, 12, 0);

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByTestId('datepicker-previous-month-button'));
    expect(screen.getByRole('button', { name: 'November' })).toBeVisible();
  });

  it('renders next month when next month is in next year', async () => {
    // December 2028
    const date = new Date(2028, 12, 0);

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByTestId('datepicker-next-month-button'));
    expect(screen.getByRole('button', { name: 'January' })).toBeVisible();
    expect(screen.getByRole('button', { name: '2029' })).toBeVisible();
  });

  it('renders next month when next month is in current year', async () => {
    // September 2028
    const date = new Date(2028, 8, 1);

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByTestId('datepicker-next-month-button'));
    expect(screen.getByRole('button', { name: 'October' })).toBeVisible();
  });

  it('gets selected date', async () => {
    const onSelectedDate = jest.fn();
    const onClose = jest.fn();
    uiRender(<UiDatepicker date={date} onSelectDate={onSelectedDate} isOpen onClose={onClose} />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: '15' }));

    expect(onSelectedDate).toHaveBeenCalledTimes(1);
    expect(onSelectedDate.mock.calls[0][0]).toStrictEqual(new Date(2028, 0, 15));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('call on close CB when menu is closed', async () => {
    const onSelectedDate = jest.fn();
    const onCloseCb = jest.fn();

    uiRender(
      <UiDatepicker date={date} onSelectDate={onSelectedDate} onClose={onCloseCb} testId="date-picker-id" isOpen />
    );

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    const datepicker = screen.getByTestId('date-picker-id');
    fireEvent.keyDown(datepicker, { key: 'Escape', code: 'Escape' });

    expect(onCloseCb).toHaveBeenCalledTimes(1);
  });

  it('renders fine with 2 months', async () => {
    const date = new Date(2028, 1, 0);
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} showNextMonth isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: 'January' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'February' })).toBeVisible();

    expect(screen.getAllByRole('button', { name: '1' })[0]).toBeVisible();
    expect(screen.getAllByRole('button', { name: '1' })[1]).toBeVisible();
    expect(screen.getAllByRole('button', { name: '1' })).toHaveLength(2);

    expect(screen.getByRole('button', { name: '31' })).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-next-month-button'));
    expect(screen.getByRole('button', { name: 'February' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'March' })).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-previous-month-button'));
    expect(screen.getByRole('button', { name: 'January' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'February' })).toBeVisible();
  });

  it('renders fine with 2 months when initial month is eoy', async () => {
    const date = new Date(2028, 11, 31);
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} showNextMonth isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: 'December' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'January' })).toBeVisible();
    expect(screen.getByRole('button', { name: '2029' })).toBeVisible();

    expect(screen.getAllByRole('button', { name: '1' })).toHaveLength(2);
    expect(screen.getAllByRole('button', { name: '31' })).toHaveLength(2);
  });

  it('Navigates correctly to next month when showing 2 months', async () => {
    const date = new Date(2028, 10, 30);
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} showNextMonth isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: 'November' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'December' })).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-next-month-button'));

    expect(screen.getByRole('button', { name: 'December' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'January' })).toBeVisible();
    expect(screen.getByRole('button', { name: '2029' })).toBeVisible();
  });

  it('Navigates correctly to previous month when showing 2 months', async () => {
    const date = new Date(2028, 11, 31);
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} showNextMonth isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: 'December' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'January' })).toBeVisible();
    expect(screen.getByRole('button', { name: '2029' })).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-previous-month-button'));

    expect(screen.getByRole('button', { name: 'November' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'December' })).toBeVisible();
  });

  it('Renders on dialog when useDialogOnSmall is passed and breakpoint is small', async () => {
    global.innerWidth = 400;

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen useDialogOnSmall showNextMonth />);

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeVisible();
    });
  });

  it('Renders on menu when useDialogOnSmall is passed but breakpoint is not small', async () => {
    global.innerWidth = 800;

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen useDialogOnSmall showNextMonth />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
  });

  it('Datepicker is closed in isOpen is not present', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  describe('flat', () => {
    it('renders fine and execute select date callback', async () => {
      const onSelectedDate = jest.fn();
      uiRender(<UiDatepicker date={date} onSelectDate={onSelectedDate} flatPicker />);

      expect(screen.getByRole('button', { name: 'January' })).toBeVisible();
      expect(screen.getByText('Sun')).toBeVisible();
      expect(screen.getByText('Mon')).toBeVisible();
      expect(screen.getByText('Tue')).toBeVisible();
      expect(screen.getByText('Wed')).toBeVisible();
      expect(screen.getByText('Thu')).toBeVisible();
      expect(screen.getByText('Fri')).toBeVisible();

      fireEvent.click(screen.getByRole('button', { name: '15' }));

      expect(onSelectedDate).toHaveBeenCalledTimes(1);
      expect(onSelectedDate.mock.calls[0][0]).toStrictEqual(new Date(2028, 0, 15));
    });
  });
});
