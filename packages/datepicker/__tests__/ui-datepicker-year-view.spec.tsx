import React from 'react';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiDatepicker } from '../src';

// Mocked today: June 15, 2026 — used for disablePastDates assertions
// With date = Jan 2028: startYear = 2028 - 5 = 2023, endYear = 2034
// Years 2023–2025 < 2026 → disabled; 2026+ → not disabled
// isPrevYearPageDisabled: startYear (2023) <= todayYear (2026) → true initially
const MOCKED_TODAY = new Date(2026, 5, 15);

describe('<UiDatepicker /> - year picker view', () => {
  // January 2028
  const date = new Date(2028, 1, 0);

  it('opens year view and shows year range in heading', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: '2028' }));

    // startYear = 2028 - 5 = 2023, endYear = 2023 + 11 = 2034
    expect(screen.getByText('2023 - 2034')).toBeVisible();
  });

  it('selects a year and switches to month view', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: '2028' }));
    fireEvent.click(screen.getByRole('button', { name: '2030' }));

    // Month view: heading shows '2030', month grid is visible
    expect(screen.getByRole('button', { name: '2030' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'March' })).toBeVisible();
  });

  it('opens year view from month view via the year label', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    // Go to month view first
    fireEvent.click(screen.getByRole('button', { name: 'January' }));
    expect(screen.getByRole('button', { name: 'July' })).toBeVisible();

    // Click year label from month view → year view
    fireEvent.click(screen.getByRole('button', { name: '2028' }));

    expect(screen.getByText('2023 - 2034')).toBeVisible();
  });

  it('navigates to next year range', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: '2028' }));
    expect(screen.getByText('2023 - 2034')).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-next-month-button'));

    expect(screen.getByText('2035 - 2046')).toBeVisible();
  });

  it('navigates to previous year range', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: '2028' }));
    fireEvent.click(screen.getByTestId('datepicker-next-month-button'));
    expect(screen.getByText('2035 - 2046')).toBeVisible();

    fireEvent.click(screen.getByTestId('datepicker-previous-month-button'));

    expect(screen.getByText('2023 - 2034')).toBeVisible();
  });

  it('resets year range offset when re-opening year view', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    // Open year view, navigate forward
    fireEvent.click(screen.getByRole('button', { name: '2028' }));
    fireEvent.click(screen.getByTestId('datepicker-next-month-button'));
    expect(screen.getByText('2035 - 2046')).toBeVisible();

    // Select a year → month view with focusDate = 2040
    fireEvent.click(screen.getByRole('button', { name: '2040' }));

    // Re-open year view from month view via year label
    fireEvent.click(screen.getByRole('button', { name: '2040' }));

    // yearOffset resets to 0; startYear = 2040 - 5 = 2035 → range 2035 - 2046
    expect(screen.getByText('2035 - 2046')).toBeVisible();
  });

  it('hides the dual-month heading column in year view', async () => {
    global.innerWidth = 800;

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen showNextMonth />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    // In days view the heading second column has a 'February' button
    expect(screen.getByRole('button', { name: 'February' })).toBeVisible();

    // First '2028' in DOM order is the first-column year button
    fireEvent.click(screen.getAllByRole('button', { name: '2028' })[0]);

    // In year view the second heading column is hidden
    expect(screen.queryByRole('button', { name: 'February' })).not.toBeInTheDocument();
  });

  describe('with disablePastDates', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(MOCKED_TODAY);
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('disables past years and enables current and future years', () => {
      uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} flatPicker disablePastDates />);

      fireEvent.click(screen.getByRole('button', { name: '2028' }));

      // startYear = 2023; 2023–2025 < todayYear 2026 → disabled
      expect(screen.getByRole('button', { name: '2023' })).toBeDisabled();
      expect(screen.getByRole('button', { name: '2025' })).toBeDisabled();
      // 2026+ → not disabled
      expect(screen.getByRole('button', { name: '2026' })).not.toBeDisabled();
      expect(screen.getByRole('button', { name: '2028' })).not.toBeDisabled();
    });

    it('disables the prev page button when the year range starts before today', () => {
      uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} flatPicker disablePastDates />);

      fireEvent.click(screen.getByRole('button', { name: '2028' }));

      // startYear = 2023 <= todayYear 2026 → prev disabled
      expect(screen.getByTestId('datepicker-previous-month-button')).toBeDisabled();
    });

    it('enables the prev page button after navigating to a future range', () => {
      uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} flatPicker disablePastDates />);

      fireEvent.click(screen.getByRole('button', { name: '2028' }));
      fireEvent.click(screen.getByTestId('datepicker-next-month-button'));

      // startYear = 2035 > todayYear 2026 → prev enabled
      expect(screen.getByTestId('datepicker-previous-month-button')).not.toBeDisabled();
    });
  });
});
