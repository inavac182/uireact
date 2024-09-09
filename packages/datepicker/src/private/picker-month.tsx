import React from 'react';

import { getDaysInMonth, getStartingDayOfTheWeek, getDaysByWeek } from '../utils';
import { DateTitleFormats, UiDatepickerLocalizedLabels } from '../types';
import { WeekTitle } from './week-title';
import { PickerWeek } from './picker-week';

import styles from '../ui-datepicker.scss';

type PickerMonthProps = {
  focusDate: Date;
  today: Date;
  dayTitlesFormat: DateTitleFormats;
  highlightToday?: boolean;
  onSelectDate: (selectedDate: Date) => void;
  selectedDate?: Date;
  disablePastDates?: boolean;
  localizedLabels?: UiDatepickerLocalizedLabels;
};

export const PickerMonth: React.FC<PickerMonthProps> = ({
  focusDate,
  today,
  highlightToday,
  dayTitlesFormat,
  onSelectDate,
  disablePastDates,
  selectedDate,
  localizedLabels
}: PickerMonthProps) => {
  // Using plus one in month, so we can get the last day of the previous month by using 0 as day
  const daysInMonth = getDaysInMonth(focusDate.getMonth() + 1, focusDate.getFullYear());

  // Using current month, so we can get the first day of the current month by using 1 as day
  const startingDayOfTheWeek = getStartingDayOfTheWeek(focusDate.getMonth(), focusDate.getFullYear());

  const daysByWeek = getDaysByWeek(daysInMonth, startingDayOfTheWeek);

  return (
    <div className={styles.pickerMonthContainer}>
      <WeekTitle titlesFormat={dayTitlesFormat} localizedLabels={localizedLabels} />
      {daysByWeek.map((value, index) => (
        <PickerWeek
          key={`picker-week-${index}`}
          today={today}
          startingWeekDay={index === 0 ? startingDayOfTheWeek : 0}
          weekDays={value}
          highlightToday={highlightToday}
          focusDate={focusDate}
          onSelectDate={onSelectDate}
          selectedDate={selectedDate}
          disablePastDates={disablePastDates}
        />
      ))}
    </div>
  );
};
