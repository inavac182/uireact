import React from 'react';

import { UiButton } from '@uireact/button';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiSpacing, UiSpacingProps, useViewport } from '@uireact/foundation';
import { UiIcon } from '@uireact/icons';

import { DateTitleFormats, UiDatepickerLocalizedLabels } from '../types';
import { getLocalizedMonthLabel, getMonthTitle } from '../utils';
import { HeadingButton } from './heading/heading-button';

type PickerHeadingprops = {
  onSelectPrevMonth: () => void;
  onSelectNextMonth: () => void;
  onMonthClicked: () => void;
  onYearClicked: () => void;
  localizedLabels?: UiDatepickerLocalizedLabels;
  focusDate: Date;
  monthTitlesFormat: DateTitleFormats;
  showNextMonth?: boolean;
  nextFocusDate: Date;
};

const titleSpacing: UiSpacingProps['padding'] = { all: 'three' };

export const PickerHeading = ({
  onSelectPrevMonth,
  onSelectNextMonth,
  onMonthClicked,
  onYearClicked,
  focusDate,
  nextFocusDate,
  localizedLabels,
  monthTitlesFormat,
  showNextMonth,
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

  return (
    <UiSpacing padding={titleSpacing}>
      <UiFlexGrid alignItems="center" justifyContent="center">
        <UiFlexGridItem>
          <UiButton styling="icon" onClick={onSelectPrevMonth} testId="datepicker-previous-month-button">
            <UiIcon icon="AngleCircleLeft" />
          </UiButton>
        </UiFlexGridItem>
        <UiFlexGridItem grow={1}>
          <UiFlexGrid alignItems="center" gap="two" justifyContent="center">
            <HeadingButton label={currentMonthLabel} callback={onMonthClicked} />
            <HeadingButton label={currentYear.toString()} callback={onYearClicked} />
          </UiFlexGrid>
        </UiFlexGridItem>
        {showNextMonth && !isSmall && (
          <UiFlexGridItem grow={1}>
            <UiFlexGrid alignItems="center" gap="two" justifyContent="center">
              <HeadingButton label={nextMonthLabel} callback={onMonthClicked} />
              <HeadingButton label={nextYear.toString()} callback={onYearClicked} />
            </UiFlexGrid>
          </UiFlexGridItem>
        )}
        <UiFlexGridItem>
          <UiButton styling="icon" onClick={onSelectNextMonth} testId="datepicker-next-month-button">
            <UiIcon icon="AngleCircleRight" />
          </UiButton>
        </UiFlexGridItem>
      </UiFlexGrid>
    </UiSpacing>
  );
};
