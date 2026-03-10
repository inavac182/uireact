'use client';
import React, { useCallback, useMemo, useState } from 'react';

import { UiMenu } from '@uireact/menu';
import { UiPrimaryButton } from '@uireact/button';
import { UiSpacing, UiSpacingProps, useViewport } from '@uireact/foundation';

import { UiDatepickerProps } from './types';
import { PickerHeading } from './private/picker-heading';
import { DatepickerView, PickerSection } from './private/picker-section';
import { YEARS_BEFORE, YEARS_COUNT } from './private/picker-years';

import styles from './ui-datepicker.scss';

const buttonContentSpacing: UiSpacingProps['padding'] = { block: 'two', inline: 'three' };
const buttonPadding: UiSpacingProps['padding'] = { block: 'two', right: 'two' };

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
  flatPicker = false,
}: UiDatepickerProps) => {
  const [view, setView] = useState<DatepickerView>('days');
  const [yearOffset, setYearOffset] = useState(0);
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
      onClose?.();
    },
    [setSelectedDate, onSelectDate, onClose]
  );

  const onChangeMonthClicked = useCallback(() => {
    if (view !== 'month') {
      setView('month');
    } else {
      setView('days');
    }
  }, [view]);

  const onChangeYearClicked = useCallback(() => {
    if (view !== 'year') {
      setYearOffset(0);
      setView('year');
    }
  }, [view]);

  const onPrevYearPage = useCallback(() => setYearOffset((prev) => prev - 1), []);
  const onNextYearPage = useCallback(() => setYearOffset((prev) => prev + 1), []);

  const isPrevYearPageDisabled =
    !!disablePastDates && focusDate.getFullYear() - YEARS_BEFORE + yearOffset * YEARS_COUNT <= today.getFullYear();

  const onMonthSelected = useCallback(
    (month: number) => {
      setFocusDate(new Date(focusDate.getFullYear(), month, 1));
      setNextFocusDate(new Date(focusDate.getFullYear(), month + 1, 1));
      setView('days');
    },
    [focusDate]
  );

  const onYearSelected = useCallback(
    (year: number) => {
      setFocusDate(new Date(year, focusDate.getMonth(), 1));
      setNextFocusDate(new Date(year, focusDate.getMonth() + 1, 1));
      setView('month');
    },
    [focusDate]
  );

  const Picker = useMemo(() => {
    return (
      <>
        <PickerHeading
          focusDate={focusDate}
          monthTitlesFormat={monthTitlesFormat}
          nextFocusDate={nextFocusDate}
          onSelectNextMonth={onSelectNextMonth}
          onSelectPrevMonth={onSelectPrevMonth}
          onSelectPrevYearPage={onPrevYearPage}
          onSelectNextYearPage={onNextYearPage}
          localizedLabels={localizedLabels}
          showNextMonth={showNextMonth}
          onMonthClicked={onChangeMonthClicked}
          onYearClicked={onChangeYearClicked}
          view={view}
          yearOffset={yearOffset}
          isPrevYearPageDisabled={isPrevYearPageDisabled}
        />
        <PickerSection
          view={view}
          dayTitlesFormat={dayTitlesFormat}
          disablePastDates={disablePastDates}
          focusDate={focusDate}
          onMonthSelect={onMonthSelected}
          onYearSelect={onYearSelected}
          yearOffset={yearOffset}
          highlightToday={highlightToday}
          localizedLabels={localizedLabels}
          monthTitlesFormat={monthTitlesFormat}
          nextFocusDate={nextFocusDate}
          onSelectInternalDate={onSelectInternalDate}
          showNextMonth={showNextMonth}
          today={today}
          selectedDate={selectedDate}
        />
      </>
    );
  }, [
    dayTitlesFormat,
    disablePastDates,
    focusDate,
    highlightToday,
    localizedLabels,
    monthTitlesFormat,
    nextFocusDate,
    onChangeMonthClicked,
    onChangeYearClicked,
    onMonthSelected,
    onYearSelected,
    onPrevYearPage,
    onNextYearPage,
    isPrevYearPageDisabled,
    onSelectInternalDate,
    onSelectNextMonth,
    onSelectPrevMonth,
    selectedDate,
    showNextMonth,
    today,
    view,
    yearOffset,
  ]);

  if (flatPicker) {
    return <div className={className}>{Picker}</div>;
  }

  return (
    <UiMenu
      visible={isOpen}
      closeMenuCB={onCloseMenu}
      testId={testId}
      fullscreenOnSmall={useDialogOnSmall}
      className={className}
    >
      {Picker}
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
