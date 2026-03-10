import React from 'react';

import styles from './picker-years.scss';

export const YEARS_COUNT = 12;
export const YEARS_BEFORE = 5;

type PickerYearsProps = {
  onYearSelect: (year: number) => void;
  today: Date;
  focusDate: Date;
  yearOffset: number;
  disablePastDates?: boolean;
};

export const PickerYears = ({
  focusDate,
  today,
  disablePastDates,
  onYearSelect,
  yearOffset,
}: PickerYearsProps) => {
  const focusYear = focusDate.getFullYear();
  const todayYear = today.getFullYear();
  const startYear = focusYear - YEARS_BEFORE + yearOffset * YEARS_COUNT;
  const years = Array.from({ length: YEARS_COUNT }, (_, i) => startYear + i);

  return (
    <div className={styles.container}>
      {years.map((year) => {
        const isDisabled = disablePastDates && year < todayYear;
        return (
          <div key={`datepicker-year-${year}`} className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${year === focusYear ? styles.buttonHighlight : undefined}`}
              onClick={() => onYearSelect(year)}
              disabled={isDisabled}
            >
              {year}
            </button>
          </div>
        );
      })}
    </div>
  );
};
