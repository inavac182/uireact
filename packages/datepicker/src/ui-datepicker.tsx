'use client';
import React, { useCallback, useState } from 'react';

import styled from 'styled-components';

import { UiMenu } from '@uireact/menu';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';
import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { UiSpacing, UiSpacingProps, useViewport } from '@uireact/foundation';

import { UiDatepickerProps } from './types';
import { PickerMonth } from './private/picker-month';
import { getMonthTitle } from './utils';

const titleSpacing: UiSpacingProps['padding'] = { all: 'three' };
const buttonContentSpacing: UiSpacingProps['padding'] = { block: 'four' };
const buttonPadding: UiSpacingProps['padding'] = { top: 'four', bottom: 'four', right: 'five' };
const nextMonthSpacing: UiSpacingProps['padding'] = { block: 'five' };

const MonthWrapper = styled.div<{ $borderDirection: 'left' | 'top' }>`
  ${(props) => `
    border-${props.$borderDirection}: 1px solid var(--primary-token_50);
  `}
  flex-grow: 1;
`;

const CloseButtonWrapperDialog = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;
`;

const CloseButtonWrapperMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid var(--primary-token_50);
`;

export const UiDatepicker: React.FC<UiDatepickerProps> = ({
  date,
  dayTitlesFormat = 'simple',
  monthTitlesFormat = 'complete',
  highlightToday,
  onSelectDate,
  onClose,
  closeLabel,
  testId,
  showNextMonth,
  useDialogOnSmall = false,
  isOpen = false,
}: UiDatepickerProps) => {
  const { isSmall } = useViewport();
  const [focusDate, setFocusDate] = useState<Date>(date);
  const [nextFocusDate, setNextFocusDate] = useState<Date>(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const isDialogShown = isSmall && useDialogOnSmall;

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
    <UiMenu visible={isOpen} closeMenuCB={onCloseMenu} testId={testId} fullscreenOnSmall={useDialogOnSmall}>
      <UiSpacing padding={titleSpacing}>
        <UiFlexGrid alignItems="center" justifyContent="center">
          <UiFlexGridItem>
            <UiButton styling="icon" onClick={onSelectPrevMonth} testId="datepicker-previous-month-button">
              <UiIcon icon="AngleClearLeft" />
            </UiButton>
          </UiFlexGridItem>
          <UiFlexGridItem grow={1}>
            <UiText centered fontStyle="bold">
              {getMonthTitle(focusDate.getMonth(), monthTitlesFormat)} {focusDate.getFullYear()}
            </UiText>
          </UiFlexGridItem>
          {showNextMonth && !isSmall && (
            <UiFlexGridItem grow={1}>
              <UiText centered fontStyle="bold">
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
      <UiFlexGrid direction={isSmall ? 'column' : 'row'}>
        <UiFlexGridItem grow={1}>
          <PickerMonth
            date={focusDate}
            dayTitlesFormat={dayTitlesFormat}
            highlightToday={highlightToday}
            onSelectDate={onSelectInternalDate}
            selectedDate={selectedDate}
          />
        </UiFlexGridItem>
        {showNextMonth && (
          <MonthWrapper $borderDirection={isSmall ? 'top' : 'left'}>
            {isSmall && (
              <UiSpacing padding={nextMonthSpacing}>
                <UiText centered fontStyle="bold">
                  {getMonthTitle(nextFocusDate.getMonth(), monthTitlesFormat)} {nextFocusDate.getFullYear()}
                </UiText>
              </UiSpacing>
            )}
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
      {closeLabel && !isDialogShown && (
        <CloseButtonWrapperMenu>
          <UiSpacing padding={buttonPadding}>
            <UiButton type="button" category="tertiary" onClick={onCloseMenu}>
              <UiSpacing padding={buttonContentSpacing}>
                <UiText>{closeLabel}</UiText>
              </UiSpacing>
            </UiButton>
          </UiSpacing>
        </CloseButtonWrapperMenu>
      )}
      {isDialogShown && (
        <CloseButtonWrapperDialog>
          <UiSpacing padding={buttonPadding}>
            <UiButton category="tertiary" fullWidth onClick={onCloseMenu}>
              <UiSpacing padding={buttonContentSpacing}>
                <UiText centered size="large">
                  {closeLabel}
                </UiText>
              </UiSpacing>
            </UiButton>
          </UiSpacing>
        </CloseButtonWrapperDialog>
      )}
    </UiMenu>
  );
};

UiDatepicker.displayName = 'UiDatepicker';
