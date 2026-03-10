import React from 'react';

import { DateTitleFormats, UiDatepickerLocalizedLabels } from 'types';

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

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

export const PickerYear = ({
  focusDate,
  monthTitlesFormat,
  today,
  disablePastDates,
  highlightToday,
  localizedLabels,
  selectedDate,
}: PickeYearProps) => {
  const month = focusDate.getMonth();
  return (
    <div className={styles.container}>
      {months.map((m, index) => (
        <div key={`datepicker-month-${index}`} className={styles.buttonContainer}>
          <button className={`${styles.button} ${month === index ? styles.buttonHighlight : undefined}`}>{m}</button>
        </div>
      ))}
    </div>
  );
};
