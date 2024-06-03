'use client';
import React, { useCallback, useState } from 'react';

import { UiMenu } from '@uireact/menu';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';
import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { UiSpacing, UiSpacingProps, useViewport } from '@uireact/foundation';

import { UiDatepickerProps } from './types';
import { PickerMonth } from './private/picker-month';
import { getMonthTitle } from './utils';
import styles from './ui-datepicker.scss';

const titleSpacing: UiSpacingProps['padding'] = { all: 'three' };
const buttonContentSpacing: UiSpacingProps['padding'] = { block: 'four' };
const buttonPadding: UiSpacingProps['padding'] = { top: 'four', bottom: 'four', right: 'five' };
const nextMonthSpacing: UiSpacingProps['padding'] = { block: 'five' };

export const UiDatepicker: React.FC<UiDatepickerProps> = ({
  date,
  dayTitlesFormat = 'simple',
  monthTitlesFormat = 'complete',
  disablePastDates,
  highlightToday,
  onSelectDate,
  onClose,
  closeLabel,
  testId,
  showNextMonth,
  useDialogOnSmall = false,
  isOpen = false,
  selectInitDate = false,
}: UiDatepickerProps) => {
  const { isSmall } = useViewport();
  const today = new Date();
  const [focusDate, setFocusDate] = useState<Date>(date || today);
  const [nextFocusDate, setNextFocusDate] = useState<Date>(
    new Date(focusDate.getFullYear(), focusDate.getMonth() + 1, 1)
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(selectInitDate ? date : undefined);
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
  }, [nextFocusDate]);

  const onSelectInternalDate = useCallback(
    (date: Date) => {
      setSelectedDate(date);
      onSelectDate(date);
    },
    [setSelectedDate, onSelectDate]
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
            <UiText align='center' fontStyle="bold">
              {getMonthTitle(focusDate.getMonth(), monthTitlesFormat)} {focusDate.getFullYear()}
            </UiText>
          </UiFlexGridItem>
          {showNextMonth && !isSmall && (
            <UiFlexGridItem grow={1}>
              <UiText align='center' fontStyle="bold">
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
            today={today}
            focusDate={focusDate}
            dayTitlesFormat={dayTitlesFormat}
            highlightToday={highlightToday}
            onSelectDate={onSelectInternalDate}
            selectedDate={selectedDate}
            disablePastDates={disablePastDates}
          />
        </UiFlexGridItem>
        {showNextMonth && (
          <div className={styles.monthWrapper}>
            {isSmall && (
              <UiSpacing padding={nextMonthSpacing}>
                <UiText align='center' fontStyle="bold">
                  {getMonthTitle(nextFocusDate.getMonth(), monthTitlesFormat)} {nextFocusDate.getFullYear()}
                </UiText>
              </UiSpacing>
            )}
            <PickerMonth
              today={today}
              focusDate={nextFocusDate}
              dayTitlesFormat={dayTitlesFormat}
              highlightToday={highlightToday}
              onSelectDate={onSelectInternalDate}
              selectedDate={selectedDate}
              disablePastDates={disablePastDates}
            />
          </div>
        )}
      </UiFlexGrid>
      {closeLabel && !isDialogShown && (
        <div className={styles.closeButtonWrapperMenu}>
          <UiSpacing padding={buttonPadding}>
            <UiButton type="button" category="tertiary" onClick={onCloseMenu}>
              <UiSpacing padding={buttonContentSpacing}>
                <UiText>{closeLabel}</UiText>
              </UiSpacing>
            </UiButton>
          </UiSpacing>
        </div>
      )}
      {isDialogShown && (
        <div className={styles.closeButtonWrapperDialog}>
          <UiSpacing padding={buttonPadding}>
            <UiButton category="tertiary" fullWidth onClick={onCloseMenu}>
              <UiSpacing padding={buttonContentSpacing}>
                <UiText align='center' size="large">
                  {closeLabel}
                </UiText>
              </UiSpacing>
            </UiButton>
          </UiSpacing>
        </div>
      )}
    </UiMenu>
  );
};

UiDatepicker.displayName = 'UiDatepicker';
