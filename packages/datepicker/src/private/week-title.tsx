import React from 'react';

import { UiGrid, UiGridItem } from '@uireact/grid';

import { getDayTitle } from '../utils';
import { DateTitleFormats } from '../types';
import styles from '../ui-datepicker.scss';

type WeekTitleProps = {
  titlesFormat: DateTitleFormats;
};

export const WeekTitle: React.FC<WeekTitleProps> = ({ titlesFormat }: WeekTitleProps) => {
  return (
    <UiGrid cols={7}>
      {[...Array(7)].map((value, index) => (
        <UiGridItem key={`picker-day-title-${index}`}>
          <div className={styles.dayTitleContainer}>{getDayTitle(index)[titlesFormat]}</div>
        </UiGridItem>
      ))}
    </UiGrid>
  );
};
