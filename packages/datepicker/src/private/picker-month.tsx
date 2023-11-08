import React from 'react';

import { getDaysInMonth, getStartingDayOfTheWeek, getDaysByWeek } from '../utils';
import { DateTitleFormats } from '../types';
import { WeekTitle } from './week-title';
import { PickerWeek } from './picker-week';

type PickerMonthProps = {
  date: Date;
  dayTitlesFormat: DateTitleFormats;
  highlightToday?: boolean;
  onSelectDate: (selectedDate: Date) => void;
  selectedDate?: Date;
};

export const PickerMonth: React.FC<PickerMonthProps> = ({
  date,
  highlightToday,
  dayTitlesFormat,
  onSelectDate,
  selectedDate,
}: PickerMonthProps) => {
  // Using plus one in month, so we can get the last day of the previous month by using 0 as day
  const daysInMonth = getDaysInMonth(date.getMonth() + 1, date.getFullYear());

  // Using current month, so we can get the first day of the current month by using 1 as day
  const startingDayOfTheWeek = getStartingDayOfTheWeek(date.getMonth(), date.getFullYear());

  const daysByWeek = getDaysByWeek(daysInMonth, startingDayOfTheWeek);

  return (
    <div>
      <WeekTitle titlesFormat={dayTitlesFormat} />
      {daysByWeek.map((value, index) => (
        <PickerWeek
          key={`picker-week-${index}`}
          startingWeekDay={index === 0 ? startingDayOfTheWeek : 0}
          weekDays={value}
          highlightToday={highlightToday}
          year={date.getFullYear()}
          month={date.getMonth()}
          onSelectDate={onSelectDate}
          selectedDate={selectedDate}
        />
      ))}
    </div>
  );
};
