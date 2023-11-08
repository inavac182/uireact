import React, { FormEvent, useCallback } from 'react';

import { UiGrid } from '@uireact/grid';
import styled from 'styled-components';

const EmptySlot = styled.div`
  width: 50px;
  height: 50px;
`;

//istanbul ignore next
const DayWrapperButton = styled.button<{ $highlight?: boolean }>`
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
  color: var(--texts-token_100);
  transition: background-color 0.5s;

  ${(props) => `
    ${props.$highlight ? 'background-color: var(--primary-token_50);' : ''}
  `}

  &:hover {
    background-color: var(--primary-token_10);
  }
`;

type PickerWeekProps = {
  startingWeekDay: number;
  weekDays: number[];
  highlightToday?: boolean;
  month: number;
  year: number;
  onSelectDate: (selectedDate: Date) => void;
};

export const PickerWeek: React.FC<PickerWeekProps> = ({
  startingWeekDay,
  highlightToday,
  weekDays,
  month,
  year,
  onSelectDate,
}: PickerWeekProps) => {
  const today = new Date();

  const onDateSelected = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      const day = e.currentTarget.value;
      if (day) {
        const date = new Date(year, month, parseInt(day));
        onSelectDate(date);
      }
    },
    [onSelectDate, year, month]
  );

  return (
    <UiGrid cols={7}>
      {[...Array(startingWeekDay)].map((value, index) => (
        <EmptySlot key={`empty-picker-day-${index}`} />
      ))}
      {weekDays.map((value) => {
        const date = `${year}/${month}/${value}`;
        const todayDate = `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`;

        return (
          <DayWrapperButton
            key={`picker-day-${value}`}
            $highlight={highlightToday && date === todayDate}
            onClick={onDateSelected}
            value={value}
          >
            {value}
          </DayWrapperButton>
        );
      })}
    </UiGrid>
  );
};
