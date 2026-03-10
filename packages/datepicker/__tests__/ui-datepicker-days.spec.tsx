import React from 'react';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiDatepicker } from '../src';

describe('<UiDatepicker /> - days view', () => {
  // January 2028
  const date = new Date(2028, 1, 0);

  it('renders with highlightToday', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} highlightToday isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: 'January' })).toBeVisible();
    expect(screen.getByText('Sun')).toBeVisible();
    expect(screen.getByRole('button', { name: '1' })).toBeVisible();
    expect(screen.getByRole('button', { name: '31' })).toBeVisible();
  });

  it('disables dates before the given date when disablePastDates is set', async () => {
    // January 25, 2028
    const date = new Date('2028-01-25 ');

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} highlightToday isOpen disablePastDates />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    expect(screen.getByText('Sun')).toBeVisible();
    expect(screen.getByRole('button', { name: '25' })).toBeVisible();
    expect(screen.getByRole('button', { name: '25' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: '23' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '24' })).toBeVisible();
    expect(screen.getByRole('button', { name: '24' })).toBeDisabled();
  });

  it('renders with simple monthTitlesFormat', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} monthTitlesFormat="simple" isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    expect(screen.getByRole('button', { name: 'Jan' })).toBeVisible();
  });

  it('renders with complete dayTitlesFormat', async () => {
    uiRender(
      <UiDatepicker date={date} onSelectDate={jest.fn()} dayTitlesFormat="complete" testId="date-picker-id" isOpen />
    );

    await waitFor(() => {
      expect(screen.getByText('Sunday')).toBeVisible();
    });

    expect(screen.getByText('Monday')).toBeVisible();
    expect(screen.getByText('Tuesday')).toBeVisible();
    expect(screen.getByText('Wednesday')).toBeVisible();
    expect(screen.getByText('Thursday')).toBeVisible();
    expect(screen.getByText('Friday')).toBeVisible();

    const datepicker = screen.getByTestId('date-picker-id');
    fireEvent.keyDown(datepicker, { key: 'Escape', code: 'Escape' });
  });
});
