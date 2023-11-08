'use client';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { UiMenu } from '@uireact/menu';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';
import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';

import { UiDatepickerProps } from './types';
import { PickerMonth } from './private/picker-month';
import { getMonthTitle } from './utils';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

const titleSpacing: UiSpacingProps['padding'] = { all: 'three' };

export const UiDatepicker: React.FC<UiDatepickerProps> = ({
  date,
  dayTitlesFormat = 'simple',
  monthTitlesFormat = 'complete',
  highlightToday,
  onSelectDate,
  onClose,
  testId,
}: UiDatepickerProps) => {
  const [focusDate, setFocusDate] = useState<Date>(date);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const onCloseMenu = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const onSelectPrevMonth = useCallback(() => {
    const currentMonth = focusDate.getMonth();
    const currentYear = focusDate.getFullYear();
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;

    setFocusDate(new Date(prevYear, prevMonth, 1));
  }, [setFocusDate, focusDate]);

  const onSelectNextMonth = useCallback(() => {
    const currentMonth = focusDate.getMonth();
    const currentYear = focusDate.getFullYear();
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;

    setFocusDate(new Date(nextYear, nextMonth, 1));
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
          <UiFlexGridItem>
            <UiButton styling="icon" onClick={onSelectNextMonth} testId="datepicker-next-month-button">
              <UiIcon icon="AngleClearRight" />
            </UiButton>
          </UiFlexGridItem>
        </UiFlexGrid>
      </UiSpacing>
      <PickerMonth
        date={focusDate}
        dayTitlesFormat={dayTitlesFormat}
        highlightToday={highlightToday}
        onSelectDate={onSelectInternalDate}
        selectedDate={selectedDate}
      />
    </UiMenu>
  );
};

UiDatepicker.displayName = 'UiDatepicker';
