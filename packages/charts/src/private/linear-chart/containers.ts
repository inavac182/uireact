import styled, { keyframes } from 'styled-components';

import { Keyframes } from 'styled-components/dist/types';

import { privateLinearChartProps } from '../../types';
import { ColorCategories, ColorTokens, getThemeColor } from '@uireact/foundation';

export const LimitDiv = styled.div<privateLinearChartProps>`
  ${(props) => {
    const color =
      props.$limitColor ??
      getThemeColor(props.$customTheme, props.$selectedTheme, ColorCategories.secondary, ColorTokens.token_100);

    return `background-color: ${color};`;
  }}

  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

const getAnimation = (percentage: number): Keyframes => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${percentage}%;
  }
`;

const getPercentage = (limit: number, current: number) => {
  let percentage = 0;

  if (current > limit) {
    percentage = 100;
  } else {
    percentage = Math.round((current * 100) / limit);
  }

  return percentage;
};

export const CurrentDiv = styled.div<privateLinearChartProps>`
  ${(props) => {
    const color =
      props.$currentColor ??
      getThemeColor(props.$customTheme, props.$selectedTheme, ColorCategories.tertiary, ColorTokens.token_100);

    return `background-color: ${color};`;
  }}

  animation: ${(props) => getAnimation(getPercentage(props.$limitValue, props.$currentValue))} 1s ease-out forwards;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const WrapperDiv = styled.div`
  width: 100%;
  position: relative;
  min-height: 5px;
`;
