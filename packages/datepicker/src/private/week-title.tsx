import React from 'react';

import { UiGrid, UiGridItem } from '@uireact/grid';

import { getDayTitle } from '../utils';
import { DateTitleFormats } from '../types';
import { styled } from 'styled-components';

type WeekTitleProps = {
  titlesFormat: DateTitleFormats;
};

const DayTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--texts-small);
`;

export const WeekTitle: React.FC<WeekTitleProps> = ({ titlesFormat }: WeekTitleProps) => {
  return (
    <UiGrid cols={7}>
      {[...Array(7)].map((value, index) => (
        <UiGridItem key={`picker-day-title-${index}`}>
          <DayTitle>{getDayTitle(index)[titlesFormat]}</DayTitle>
        </UiGridItem>
      ))}
    </UiGrid>
  );
};
