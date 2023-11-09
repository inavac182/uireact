'use client';
import React, { useCallback, useState } from 'react';

import styled from 'styled-components';

import { UiMenu } from '@uireact/menu';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';
import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

import { UiDatepickerProps } from './types';
import { PickerMonth } from './private/picker-month';
import { getMonthTitle } from './utils';

const titleSpacing: UiSpacingProps['padding'] = { all: 'three' };

const MonthWrapper = styled.div`
  border-left: 1px solid var(--primary-token_50);
  flex-grow: 1;
`;

export const UiDatepicker: React.FC<UiDatepickerProps> = ({
  date,
  dayTitlesFormat = 'simple',
  monthTitlesFormat = 'complete',
  highlightToday,
  onSelectDate,
  onClose,
  testId,
  showNextMonth,
}: UiDatepickerProps) => {
  const [focusDate, setFocusDate] = useState<Date>(date);
  const [nextFocusDate, setNextFocusDate] = useState<Date>(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const onCloseMenu = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const onSelectPrevMonth = useCallback(() => {
    const currentMonth = focusDate.getMonth();
    const currentYear = focusDate.getFullYear();
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;

    setNextFocusDate(focusDate);
    setFocusDate(new Date(prevYear, prevMonth, 1));
  }, [setFocusDate, focusDate]);

  const onSelectNextMonth = useCallback(() => {
    const nextFocusMonth = nextFocusDate.getMonth();
    const nextFocusYear = nextFocusDate.getFullYear();
    const nextFollowingYear = nextFocusMonth === 11 ? nextFocusYear + 1 : nextFocusYear;
    const nextFollowingMonth = nextFocusMonth === 11 ? 0 : nextFocusMonth + 1;

    setFocusDate(nextFocusDate);
    setNextFocusDate(new Date(nextFollowingYear, nextFollowingMonth, 1));
  }, [setFocusDate, focusDate]);

  const onSelectInternalDate = useCallback(
    (date: Date) => {
      setSelectedDate(date);
      onSelectDate(date);
    },
    [setSelectedDate]
  );

  return (
    <UiMenu visible closeMenuCB={onCloseMenu} testId={testId}>
      <UiSpacing padding={titleSpacing}>
        <UiFlexGrid alignItems="center" justifyContent="center">
          <UiFlexGridItem>
            <UiButton styling="icon" onClick={onSelectPrevMonth} testId="datepicker-previous-month-button">
              <UiIcon icon="AngleClearLeft" />
            </UiButton>
          </UiFlexGridItem>
          <UiFlexGridItem grow={1}>
            <UiText centered>
              {getMonthTitle(focusDate.getMonth(), monthTitlesFormat)} {focusDate.getFullYear()}
            </UiText>
          </UiFlexGridItem>
          {showNextMonth && (
            <UiFlexGridItem grow={1}>
              <UiText centered>
                {getMonthTitle(nextFocusDate.getMonth(), monthTitlesFormat)} {nextFocusDate.getFullYear()}
              </UiText>
            </UiFlexGridItem>
          )}
          <UiFlexGridItem>
            <UiButton styling="icon" onClick={onSelectNextMonth} testId="datepicker-next-month-button">
              <UiIcon icon="AngleClearRight" />
            </UiButton>
          </UiFlexGridItem>
        </UiFlexGrid>
      </UiSpacing>
      <UiFlexGrid>
        <PickerMonth
          date={focusDate}
          dayTitlesFormat={dayTitlesFormat}
          highlightToday={highlightToday}
          onSelectDate={onSelectInternalDate}
          selectedDate={selectedDate}
        />
        {showNextMonth && (
          <MonthWrapper>
            <PickerMonth
              date={nextFocusDate}
              dayTitlesFormat={dayTitlesFormat}
              highlightToday={highlightToday}
              onSelectDate={onSelectInternalDate}
              selectedDate={selectedDate}
            />
          </MonthWrapper>
        )}
      </UiFlexGrid>
    </UiMenu>
  );
};

UiDatepicker.displayName = 'UiDatepicker';
