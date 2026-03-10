import React from 'react';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiDatepicker } from '../src';

// Mocked today: June 15, 2026 — used for disablePastDates assertions
const MOCKED_TODAY = new Date(2026, 5, 15);

describe('<UiDatepicker /> - month picker view', () => {
  // January 2028
  const date = new Date(2028, 1, 0);

  it('opens month view when the month label is clicked', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: 'January' }));

    expect(screen.getByRole('button', { name: 'March' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'July' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'December' })).toBeVisible();
  });

  it('shows months using simple format', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen monthTitlesFormat="simple" />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Jan' }));

    expect(screen.getByRole('button', { name: 'Mar' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Jul' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Dec' })).toBeVisible();
  });

  it('shows localized month labels', async () => {
    const localizedLabels = {
      months: {
        january: 'Enero', february: 'Febrero', march: 'Marzo', april: 'Abril',
        may: 'Mayo', june: 'Junio', july: 'Julio', august: 'Agosto',
        september: 'Septiembre', october: 'Octubre', november: 'Noviembre', december: 'Diciembre',
      },
      weekDays: {
        sunday: 'Dom', monday: 'Lun', tuesday: 'Mar', wednesday: 'Mié',
        thursday: 'Jue', friday: 'Vie', saturday: 'Sáb',
      },
    };

    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen localizedLabels={localizedLabels} />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Enero' }));

    expect(screen.getByRole('button', { name: 'Marzo' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Diciembre' })).toBeVisible();
  });

  it('selects a month and returns to days view', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: 'January' }));
    expect(screen.getByRole('button', { name: 'July' })).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'March' }));

    // Month grid is gone; day grid is visible
    expect(screen.queryByRole('button', { name: 'July' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: '1' })).toBeVisible();
  });

  it('toggles back to days view when the month label is clicked again', async () => {
    uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} isOpen />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: 'January' }));
    expect(screen.getByRole('button', { name: 'July' })).toBeVisible();

    // First 'January' in DOM order is the heading button
    fireEvent.click(screen.getAllByRole('button', { name: 'January' })[0]);

    expect(screen.queryByRole('button', { name: 'July' })).not.toBeInTheDocument();
  });

  describe('with disablePastDates', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(MOCKED_TODAY);
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('does not disable months in a future year', () => {
      uiRender(<UiDatepicker date={date} onSelectDate={jest.fn()} flatPicker disablePastDates />);

      fireEvent.click(screen.getByRole('button', { name: 'January' }));

      expect(screen.getByRole('button', { name: 'June' })).not.toBeDisabled();
      expect(screen.getByRole('button', { name: 'December' })).not.toBeDisabled();
    });

    it('disables all months in a past year', () => {
      const pastDate = new Date(2020, 0, 1);
      uiRender(<UiDatepicker date={pastDate} onSelectDate={jest.fn()} flatPicker disablePastDates />);

      fireEvent.click(screen.getByRole('button', { name: 'January' }));

      expect(screen.getByRole('button', { name: 'June' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'December' })).toBeDisabled();
    });

    it('disables past months and enables current and future months in the current year', () => {
      // September 2026 — same year as mocked today (June 15, 2026, todayMonth = 5)
      const currentYearDate = new Date(2026, 8, 1);
      uiRender(<UiDatepicker date={currentYearDate} onSelectDate={jest.fn()} flatPicker disablePastDates />);

      // Heading shows 'September', grid shows all 12 months
      fireEvent.click(screen.getByRole('button', { name: 'September' }));

      // January (0) and May (4) are before June (todayMonth = 5) → disabled
      expect(screen.getByRole('button', { name: 'January' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'May' })).toBeDisabled();
      // June (5) and August (7) are >= todayMonth → not disabled
      expect(screen.getByRole('button', { name: 'June' })).not.toBeDisabled();
      expect(screen.getByRole('button', { name: 'August' })).not.toBeDisabled();
    });
  });
});
