'use client';
import React, { useCallback, useMemo, useState } from 'react';

import { UiMenu } from '@uireact/menu';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';
import { UiButton, UiPrimaryButton, UiSecondaryButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { UiSpacing, UiSpacingProps, useViewport } from '@uireact/foundation';

import { UiDatepickerProps } from './types';
import { PickerMonth } from './private/picker-month';
import { getLocalizedMonthLabel, getMonthTitle } from './utils';
import styles from './ui-datepicker.scss';

const titleSpacing: UiSpacingProps['padding'] = { all: 'three' };
const buttonContentSpacing: UiSpacingProps['padding'] = { block: 'two', inline: 'three' };
const buttonPadding: UiSpacingProps['padding'] = { block: 'two', right: 'two' };
const nextMonthSpacing: UiSpacingProps['padding'] = { block: 'five' };

export const UiDatepicker: React.FC<UiDatepickerProps> = ({
  date,
  className,
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
  localizedLabels,
  flatPicker = false
}: UiDatepickerProps) => {
  const { isSmall } = useViewport();
  const today = useMemo(() => new Date(), []);
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

  const HeadingSection = useMemo(() => (
    <UiSpacing padding={titleSpacing}>
      <UiFlexGrid alignItems="center" justifyContent="center">
        <UiFlexGridItem>
          <UiButton styling="icon" onClick={onSelectPrevMonth} testId="datepicker-previous-month-button">
            <UiIcon icon="AngleCircleLeft" />
          </UiButton>
        </UiFlexGridItem>
        <UiFlexGridItem grow={1}>
          <UiText align='center' fontStyle="bold">
            {localizedLabels ? 
              getLocalizedMonthLabel(focusDate.getMonth(), localizedLabels) 
              : 
              getMonthTitle(focusDate.getMonth(), monthTitlesFormat)
            } {focusDate.getFullYear()}
          </UiText>
        </UiFlexGridItem>
        {showNextMonth && !isSmall && (
          <UiFlexGridItem grow={1}>
            <UiText align='center' fontStyle="bold">
              {localizedLabels ? 
                getLocalizedMonthLabel(nextFocusDate.getMonth(), localizedLabels) 
                : 
                getMonthTitle(nextFocusDate.getMonth(), monthTitlesFormat)
              } {nextFocusDate.getFullYear()}
            </UiText>
          </UiFlexGridItem>
        )}
        <UiFlexGridItem>
          <UiButton styling="icon" onClick={onSelectNextMonth} testId="datepicker-next-month-button">
            <UiIcon icon="AngleCircleRight" />
          </UiButton>
        </UiFlexGridItem>
      </UiFlexGrid>
    </UiSpacing>
  ), [focusDate, isSmall, localizedLabels, monthTitlesFormat, nextFocusDate, onSelectNextMonth, onSelectPrevMonth, showNextMonth]);

  const PickerSection = useMemo(() => (
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
            localizedLabels={localizedLabels}
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
              localizedLabels={localizedLabels}
            />
          </div>
        )}
      </UiFlexGrid>
  ), [dayTitlesFormat, disablePastDates, focusDate, highlightToday, isSmall, localizedLabels, monthTitlesFormat, nextFocusDate, onSelectInternalDate, selectedDate, showNextMonth, today]);

  if (flatPicker) {
    return (
      <div>
        {HeadingSection}
        {PickerSection}
      </div>
    )
  }

  return (
    <UiMenu visible={isOpen} closeMenuCB={onCloseMenu} testId={testId} fullscreenOnSmall={useDialogOnSmall} className={className}>
      {HeadingSection}
      {PickerSection}
      {closeLabel && !isDialogShown && (
        <div className={styles.closeButtonWrapperMenu}>
          <UiSpacing padding={buttonPadding}>
            <UiPrimaryButton type="button" onClick={onCloseMenu} padding={buttonContentSpacing}>
              <p>{closeLabel}</p>
            </UiPrimaryButton>
          </UiSpacing>
        </div>
      )}
      {isDialogShown && (
        <div className={styles.closeButtonWrapperDialog}>
          <UiSpacing padding={buttonPadding}>
            <UiPrimaryButton type="button" fullWidth onClick={onCloseMenu} padding={buttonContentSpacing}>
              <p>{closeLabel}</p>
            </UiPrimaryButton>
          </UiSpacing>
        </div>
      )}
    </UiMenu>
  );
};

UiDatepicker.displayName = 'UiDatepicker';
