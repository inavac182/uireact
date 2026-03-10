import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiSpacing, UiSpacingProps, useViewport } from '@uireact/foundation';
import { UiText } from '@uireact/text';
import React from 'react';
import { getMonthTitle } from 'utils';
import { PickerMonth } from './picker-month';
import { DateTitleFormats, UiDatepickerLocalizedLabels } from 'types';

import styles from '../ui-datepicker.scss';
import { PickerYear } from './picker-year';

export type DatepickerView = 'days' | 'month' | 'year';

type PickerSectionProps = {
  onSelectInternalDate: (date: Date) => void;
  onMonthSelect: (month: number) => void;
  today: Date;
  focusDate: Date;
  dayTitlesFormat: DateTitleFormats;
  highlightToday?: boolean;
  selectedDate?: Date;
  disablePastDates?: boolean;
  localizedLabels?: UiDatepickerLocalizedLabels;
  showNextMonth?: boolean;
  nextFocusDate: Date;
  monthTitlesFormat: DateTitleFormats;
  view: DatepickerView;
};

const nextMonthSpacing: UiSpacingProps['padding'] = { block: 'five' };

export const PickerSection = ({
  dayTitlesFormat,
  disablePastDates,
  focusDate,
  highlightToday,
  localizedLabels,
  onSelectInternalDate,
  onMonthSelect,
  today,
  selectedDate,
  showNextMonth,
  nextFocusDate,
  monthTitlesFormat,
  view,
}: PickerSectionProps) => {
  const { isSmall } = useViewport();

  return (
    <UiFlexGrid direction={isSmall ? 'column' : 'row'}>
      <UiFlexGridItem grow={1}>
        {view === 'days' && (
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
        )}
        {view === 'month' && (
          <PickerYear
            today={today}
            monthTitlesFormat={monthTitlesFormat}
            onMonthSelect={onMonthSelect}
            focusDate={focusDate}
            highlightToday={highlightToday}
            selectedDate={selectedDate}
            disablePastDates={disablePastDates}
            localizedLabels={localizedLabels}
          />
        )}
        {view === 'year' && <UiText>Year</UiText>}
      </UiFlexGridItem>
      {showNextMonth && (
        <div className={styles.monthWrapper}>
          {isSmall && (
            <UiSpacing padding={nextMonthSpacing}>
              <UiText align="center" fontStyle="bold">
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
  );
};
