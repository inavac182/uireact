import React, { FormEvent, useCallback } from 'react';

import { UiGrid } from '@uireact/grid';

import styles from '../ui-datepicker.scss';

type PickerWeekProps = {
  focusDate: Date;
  today: Date;
  startingWeekDay: number;
  weekDays: number[];
  highlightToday?: boolean;
  onSelectDate: (selectedDate: Date) => void;
  selectedDate?: Date;
  disablePastDates?: boolean;
};

export const PickerWeek: React.FC<PickerWeekProps> = ({
  startingWeekDay,
  highlightToday,
  weekDays,
  focusDate,
  today,
  onSelectDate,
  selectedDate,
  disablePastDates,
}: PickerWeekProps) => {
  const yesterday = new Date(focusDate.getFullYear(), focusDate.getMonth(), focusDate.getDate() - 1);
  const selectedDateString = selectedDate
    ? `${selectedDate.getFullYear()}/${selectedDate.getMonth()}/${selectedDate.getDate()}`
    : '';
  const month = focusDate.getMonth();
  const onDateSelected = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      const day = e.currentTarget.value;
      if (day) {
        const date = new Date(focusDate.getFullYear(), focusDate.getMonth(), parseInt(day));
        onSelectDate(date);
      }
    },
    [onSelectDate, focusDate]
  );

  return (
    <UiGrid cols={7}>
      {[...Array(startingWeekDay)].map((value, index) => (
        <div className={styles.pickerWeekEmptySlot} key={`empty-picker-day-${index}`} />
      ))}
      {weekDays.map((value) => {
        const currentDateString = `${focusDate.getFullYear()}/${focusDate.getMonth()}/${value}`;
        const todayDateString = `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`;
        const buttonDate = new Date(focusDate.getFullYear(), focusDate.getMonth(), value);
        const isDisabled = disablePastDates && buttonDate <= yesterday;
        const selected = currentDateString === selectedDateString;

        let classes = styles.dayWrapperButton;

        //istanbul ignore next
        if (highlightToday && !selected && currentDateString === todayDateString) {
          classes = `${classes} ${styles.hightlightWrapperButton}`;
        }

        if (selected) {
          classes = `${classes} ${styles.selectedDayWrapperButton}`;
        }

        return (
          <button
            className={classes}
            type="button"
            key={`picker-day-${month}-${value}`}
            onClick={onDateSelected}
            value={value}
            disabled={isDisabled}
          >
            {value}
          </button>
        );
      })}
    </UiGrid>
  );
};
