import styled from 'styled-components';

import { privateLinearChartProps } from '../../types';
import { getAnimation, getColor, getPercentage } from './util';

export const LimitDiv = styled.div<privateLinearChartProps>`
  ${(props) => `background-color: ${getColor(props.$limitColor || 'primary')};`}

  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

export const CurrentDiv = styled.div<privateLinearChartProps>`
  ${(props) => `background-color: ${getColor(props.$currentColor || 'tertiary')};`}

  animation: ${(props) => getAnimation(getPercentage(props.$limitValue, props.$currentValue))} 1s ease-out forwards;
  height: 100%;
  padding: ${(props) => (props.$currentValue > 0 ? '5px' : '0')};
  box-sizing: border-box;
  position: absolute;
  top: 0;
`;

export const WrapperDiv = styled.div`
  width: 100%;
  position: relative;
  min-height: 5px;
`;
