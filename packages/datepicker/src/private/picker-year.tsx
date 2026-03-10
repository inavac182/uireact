import React from 'react';

import { DateTitleFormats, UiDatepickerLocalizedLabels } from '../types';
import { getLocalizedMonthLabel, getMonthTitle } from '../utils';

import styles from './picker-year.scss';

type PickeYearProps = {
  onMonthSelect: (month: number) => void;
  today: Date;
  focusDate: Date;
  highlightToday?: boolean;
  selectedDate?: Date;
  disablePastDates?: boolean;
  localizedLabels?: UiDatepickerLocalizedLabels;
  monthTitlesFormat: DateTitleFormats;
};

const monthIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const PickerYear = ({
  focusDate,
  monthTitlesFormat,
  today,
  disablePastDates,
  highlightToday,
  localizedLabels,
  selectedDate,
  onMonthSelect,
}: PickeYearProps) => {
  const month = focusDate.getMonth();
  const focusYear = focusDate.getFullYear();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();

  return (
    <div className={styles.container}>
      {monthIndices.map((index) => {
        const label = localizedLabels
          ? getLocalizedMonthLabel(index, localizedLabels)
          : getMonthTitle(index, monthTitlesFormat);
        const isDisabled =
          disablePastDates && (focusYear < todayYear || (focusYear === todayYear && index < todayMonth));
        return (
          <div key={`datepicker-month-${index}`} className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${month === index ? styles.buttonHighlight : undefined}`}
              onClick={() => onMonthSelect(index)}
              disabled={isDisabled}
            >
              {label}
            </button>
          </div>
        );
      })}
    </div>
  );
};
