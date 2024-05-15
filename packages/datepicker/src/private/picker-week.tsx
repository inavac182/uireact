import React, { FormEvent, useCallback } from 'react';

import { UiGrid } from '@uireact/grid';
import { styled } from 'styled-components';

const EmptySlot = styled.div`
  width: 50px;
  height: 50px;
`;

//istanbul ignore next
const DayWrapperButton = styled.button<{ $highlight?: boolean; $selected: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  color: var(--fonts-token_100);
  transition: background-color 0.3s;

  ${(props) => `
    ${props.$highlight && !props.$selected ? 'background-color: var(--primary-token_50);' : ''}
    ${props.$selected ? 'background-color: var(--tertiary-token_100);' : ''}
  `}

  &:hover {
    ${(props) => `
      ${props.$selected ? 'background-color: var(--tertiary-token_200);' : 'background-color: var(--primary-token_10);'}
    `}
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
    }
  }
`;

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
        <EmptySlot key={`empty-picker-day-${index}`} />
      ))}
      {weekDays.map((value) => {
        const currentDateString = `${focusDate.getFullYear()}/${focusDate.getMonth()}/${value}`;
        const todayDateString = `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`;

        const buttonDate = new Date(focusDate.getFullYear(), focusDate.getMonth(), value);
        const isDisabled = disablePastDates && buttonDate <= yesterday;

        return (
          <DayWrapperButton
            type="button"
            key={`picker-day-${month}-${value}`}
            $highlight={highlightToday && currentDateString === todayDateString}
            onClick={onDateSelected}
            value={value}
            $selected={currentDateString === selectedDateString}
            disabled={isDisabled}
          >
            {value}
          </DayWrapperButton>
        );
      })}
    </UiGrid>
  );
};
