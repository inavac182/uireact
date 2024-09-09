import React from 'react';

import { UiGrid, UiGridItem } from '@uireact/grid';

import { getDayTitle, getLocalizedWeekLabel } from '../utils';
import { DateTitleFormats, UiDatepickerLocalizedLabels } from '../types';
import styles from '../ui-datepicker.scss';

type WeekTitleProps = {
  titlesFormat: DateTitleFormats;
  localizedLabels?: UiDatepickerLocalizedLabels;
};

export const WeekTitle: React.FC<WeekTitleProps> = ({ titlesFormat, localizedLabels }: WeekTitleProps) => {
  return (
    <UiGrid cols={7}>
      {[...Array(7)].map((value, index) => (
        <UiGridItem key={`picker-day-title-${index}`}>
          <div className={styles.dayTitleContainer}>{localizedLabels ? getLocalizedWeekLabel(index, localizedLabels) : getDayTitle(index)[titlesFormat]}</div>
        </UiGridItem>
      ))}
    </UiGrid>
  );
};
