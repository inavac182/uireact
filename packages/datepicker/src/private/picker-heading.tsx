import React from 'react';

import { UiButton } from '@uireact/button';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiSpacing, UiSpacingProps, useViewport } from '@uireact/foundation';
import { UiIcon } from '@uireact/icons';
import { UiText } from '@uireact/text';

import { DateTitleFormats, UiDatepickerLocalizedLabels } from '../types';
import { getLocalizedMonthLabel, getMonthTitle } from '../utils';
import { HeadingButton } from './heading/heading-button';
import { DatepickerView } from './picker-section';
import { YEARS_BEFORE, YEARS_COUNT } from './picker-years';

type PickerHeadingprops = {
  onSelectPrevMonth: () => void;
  onSelectNextMonth: () => void;
  onSelectPrevYearPage: () => void;
  onSelectNextYearPage: () => void;
  onMonthClicked: () => void;
  onYearClicked: () => void;
  localizedLabels?: UiDatepickerLocalizedLabels;
  focusDate: Date;
  monthTitlesFormat: DateTitleFormats;
  showNextMonth?: boolean;
  nextFocusDate: Date;
  view: DatepickerView;
  yearOffset: number;
  isPrevYearPageDisabled: boolean;
};

const titleSpacing: UiSpacingProps['padding'] = { all: 'three' };

export const PickerHeading = ({
  onSelectPrevMonth,
  onSelectNextMonth,
  onSelectPrevYearPage,
  onSelectNextYearPage,
  onMonthClicked,
  onYearClicked,
  focusDate,
  nextFocusDate,
  localizedLabels,
  monthTitlesFormat,
  showNextMonth,
  view,
  yearOffset,
  isPrevYearPageDisabled,
}: PickerHeadingprops) => {
  const { isSmall } = useViewport();
  const currentMonthLabel = localizedLabels
    ? getLocalizedMonthLabel(focusDate.getMonth(), localizedLabels)
    : getMonthTitle(focusDate.getMonth(), monthTitlesFormat);
  const currentYear = focusDate.getFullYear();

  const nextMonthLabel = localizedLabels
    ? getLocalizedMonthLabel(nextFocusDate.getMonth(), localizedLabels)
    : getMonthTitle(nextFocusDate.getMonth(), monthTitlesFormat);
  const nextYear = nextFocusDate.getFullYear();

  const startYear = currentYear - YEARS_BEFORE + yearOffset * YEARS_COUNT;
  const endYear = startYear + YEARS_COUNT - 1;

  const isYearView = view === 'year';

  return (
    <UiSpacing padding={titleSpacing}>
      <UiFlexGrid alignItems="center" justifyContent="center">
        <UiFlexGridItem>
          <UiButton
            styling="icon"
            onClick={isYearView ? onSelectPrevYearPage : onSelectPrevMonth}
            disabled={isYearView ? isPrevYearPageDisabled : undefined}
            testId="datepicker-previous-month-button"
          >
            <UiIcon icon="AngleCircleLeft" />
          </UiButton>
        </UiFlexGridItem>
        <UiFlexGridItem grow={1}>
          {isYearView ? (
            <UiText align="center" fontStyle="bold">
              {startYear} - {endYear}
            </UiText>
          ) : (
            <UiFlexGrid alignItems="center" gap="two" justifyContent="center">
              <HeadingButton label={currentMonthLabel} callback={onMonthClicked} />
              <HeadingButton label={currentYear.toString()} callback={onYearClicked} />
            </UiFlexGrid>
          )}
        </UiFlexGridItem>
        {showNextMonth && !isSmall && !isYearView && (
          <UiFlexGridItem grow={1}>
            <UiFlexGrid alignItems="center" gap="two" justifyContent="center">
              <HeadingButton label={nextMonthLabel} callback={onMonthClicked} />
              <HeadingButton label={nextYear.toString()} callback={onYearClicked} />
            </UiFlexGrid>
          </UiFlexGridItem>
        )}
        <UiFlexGridItem>
          <UiButton
            styling="icon"
            onClick={isYearView ? onSelectNextYearPage : onSelectNextMonth}
            testId="datepicker-next-month-button"
          >
            <UiIcon icon="AngleCircleRight" />
          </UiButton>
        </UiFlexGridItem>
      </UiFlexGrid>
    </UiSpacing>
  );
};
