import styled from 'styled-components';

import { ColorCategories } from '@uireact/foundation';

import { privateLinearChartProps } from '../../types';
import { getAnimation, getColor, getPercentage } from './util';

export const LimitDiv = styled.div<privateLinearChartProps>`
  ${(props) =>
    `background-color: ${getColor(
      props.$customTheme,
      props.$selectedTheme,
      ColorCategories.secondary,
      props.$limitColor
    )};`}

  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

export const CurrentDiv = styled.div<privateLinearChartProps>`
  ${(props) =>
    `background-color: ${getColor(
      props.$customTheme,
      props.$selectedTheme,
      ColorCategories.tertiary,
      props.$currentColor
    )};`}

  animation: ${(props) => getAnimation(getPercentage(props.$limitValue, props.$currentValue))} 1s ease-out forwards;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
`;

export const WrapperDiv = styled.div`
  width: 100%;
  position: relative;
  min-height: 5px;
`;
