import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiDatepicker } from '../src';

describe('<UiDatepicker />', () => {
  // January 2028
  const date = new Date(2028, 1, 0);

  it('renders fine', () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    expect(screen.getByText('January 2028')).toBeVisible();
    expect(screen.getByRole('menu')).toBeVisible();

    expect(screen.getByText('Sun')).toBeVisible();
    expect(screen.getByText('Mon')).toBeVisible();
    expect(screen.getByText('Tue')).toBeVisible();
    expect(screen.getByText('Wed')).toBeVisible();
    expect(screen.getByText('Thu')).toBeVisible();
    expect(screen.getByText('Fri')).toBeVisible();
  });

  it('renders fine with highlight', () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} highlightToday isOpen />);

    expect(screen.getByText('January 2028')).toBeVisible();
    expect(screen.getByText('Sun')).toBeVisible();

    expect(screen.getByRole('button', { name: '1' })).toBeVisible();
    expect(screen.getByRole('button', { name: '31' })).toBeVisible();
  });

  it('renders fine with past dates disabled', () => {
    // January 25, 2028
    const date = new Date('2028-01-25 ');

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} highlightToday isOpen disablePastDates />);

    expect(screen.getByText('January 2028')).toBeVisible();
    expect(screen.getByText('Sun')).toBeVisible();

    expect(screen.getByRole('button', { name: '25' })).toBeVisible();
    expect(screen.getByRole('button', { name: '25' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: '23' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '24' })).toBeVisible();
    expect(screen.getByRole('button', { name: '24' })).toBeDisabled();
  });

  it('renders fine with simple month', () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} monthTitlesFormat="simple" isOpen />);

    expect(screen.getByText('Jan 2028')).toBeVisible();
  });

  it('renders fine with complete dates', () => {
    uiRender(
      <UiDatepicker date={date} onSelectDate={jest.fn()} dayTitlesFormat="complete" testId="date-picker-id" isOpen />
    );

    expect(screen.getByText('Sunday')).toBeVisible();
    expect(screen.getByText('Monday')).toBeVisible();
    expect(screen.getByText('Tuesday')).toBeVisible();
    expect(screen.getByText('Wednesday')).toBeVisible();
    expect(screen.getByText('Thursday')).toBeVisible();
    expect(screen.getByText('Friday')).toBeVisible();

    const datepicker = screen.getByTestId('date-picker-id');

    fireEvent.keyDown(datepicker, { key: 'Escape', code: 'Escape' });
  });

  it('renders fine with close button on menu datepicker', () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} closeLabel="Done" isOpen />);

    expect(screen.getByText('January 2028')).toBeVisible();
    expect(screen.getByRole('menu')).toBeVisible();

    expect(screen.getByRole('button', { name: 'Done' })).toBeVisible();
  });

  it('renders previous month when previous month is in previous year', () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    expect(screen.getByText('January 2028')).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-previous-month-button'));
    expect(screen.getByText('December 2027')).toBeVisible();
  });

  it('renders previous month when previous month is in current year', () => {
    // December 2028
    const date = new Date(2028, 12, 0);

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    expect(screen.getByText('December 2028')).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-previous-month-button'));
    expect(screen.getByText('November 2028')).toBeVisible();
  });

  it('renders next month when next month is in next year', () => {
    // December 2028
    const date = new Date(2028, 12, 0);

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    expect(screen.getByText('December 2028')).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-next-month-button'));
    expect(screen.getByText('January 2029')).toBeVisible();
  });

  it('renders next month when next month is in current year', () => {
    // September 2028
    const date = new Date(2028, 8, 1);

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    expect(screen.getByText('September 2028')).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-next-month-button'));

    expect(screen.getByText('October 2028')).toBeVisible();
  });

  it('gets selected date', () => {
    const onSelectedDate = jest.fn();
    uiRender(<UiDatepicker date={date} onSelectDate={onSelectedDate} isOpen />);

    expect(screen.getByText('January 2028')).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: '15' }));

    expect(onSelectedDate).toHaveBeenCalledTimes(1);
    expect(onSelectedDate.mock.calls[0][0]).toStrictEqual(new Date(2028, 0, 15));
  });

  it('call on close CB when menu is closed', () => {
    const onSelectedDate = jest.fn();
    const onCloseCb = jest.fn();

    uiRender(
      <UiDatepicker date={date} onSelectDate={onSelectedDate} onClose={onCloseCb} testId="date-picker-id" isOpen />
    );

    expect(screen.getByText('January 2028')).toBeVisible();

    const datepicker = screen.getByTestId('date-picker-id');
    fireEvent.keyDown(datepicker, { key: 'Escape', code: 'Escape' });

    expect(onCloseCb).toHaveBeenCalledTimes(1);
  });

  it('renders fine with 2 months', () => {
    // January 2028
    const date = new Date(2028, 1, 0);
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} showNextMonth isOpen />);

    expect(screen.getByText('January 2028')).toBeVisible();

    expect(screen.getByText('February 2028')).toBeVisible();

    expect(screen.getAllByRole('button', { name: '1' })[0]).toBeVisible();
    expect(screen.getAllByRole('button', { name: '1' })[1]).toBeVisible();

    expect(screen.getAllByRole('button', { name: '1' })).toHaveLength(2);

    expect(screen.getByRole('button', { name: '31' })).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-next-month-button'));

    expect(screen.getByText('February 2028')).toBeVisible();

    expect(screen.getByText('March 2028')).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-previous-month-button'));

    expect(screen.getByText('January 2028')).toBeVisible();

    expect(screen.getByText('February 2028')).toBeVisible();
  });

  it('renders fine with 2 months when initial month is eoy', () => {
    // January 2028
    const date = new Date(2028, 11, 31);
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} showNextMonth isOpen />);

    expect(screen.getByText('December 2028')).toBeVisible();

    expect(screen.getByText('January 2029')).toBeVisible();

    expect(screen.getAllByRole('button', { name: '1' })[0]).toBeVisible();
    expect(screen.getAllByRole('button', { name: '1' })[1]).toBeVisible();

    expect(screen.getAllByRole('button', { name: '1' })).toHaveLength(2);

    expect(screen.getAllByRole('button', { name: '31' })[0]).toBeVisible();
    expect(screen.getAllByRole('button', { name: '31' })[1]).toBeVisible();

    expect(screen.getAllByRole('button', { name: '31' })).toHaveLength(2);
  });

  it('Navigates correctly to next month when showing 2 months', () => {
    // November 2028
    const date = new Date(2028, 10, 30);
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} showNextMonth isOpen />);

    expect(screen.getByText('November 2028')).toBeVisible();
    expect(screen.getByText('December 2028')).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-next-month-button'));

    expect(screen.getByText('December 2028')).toBeVisible();
    expect(screen.getByText('January 2029')).toBeVisible();
  });

  it('Navigates correctly to previous month when showing 2 months', () => {
    // December 2028
    const date = new Date(2028, 11, 31);
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} showNextMonth isOpen />);

    expect(screen.getByText('December 2028')).toBeVisible();
    expect(screen.getByText('January 2029')).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-previous-month-button'));

    expect(screen.getByText('November 2028')).toBeVisible();
    expect(screen.getByText('December 2028')).toBeVisible();
  });

  it('Renders on dialog when useDialogOnSmall is passed and breakpoint is small', () => {
    global.innerWidth = 400;

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen useDialogOnSmall showNextMonth />);

    expect(screen.getByRole('dialog')).toBeVisible();
  });

  it('Renders on menu when useDialogOnSmall is passed but breakpoint is not small', () => {
    global.innerWidth = 800;

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen useDialogOnSmall showNextMonth />);

    expect(screen.getByRole('menu')).toBeVisible();
  });

  it('Datepicker is closed in isOpen is not present', () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});
