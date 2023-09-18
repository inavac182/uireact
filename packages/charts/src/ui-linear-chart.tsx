import React from 'react';
import { styled } from 'styled-components';

import { UiReactElementProps } from '@uireact/foundation';
import { UiText } from '@uireact/text';
import { UiFlexGrid } from '@uireact/flex';

import { UiLinearChartData } from './types';
import { CurrentDiv, LimitDiv, WrapperDiv } from './private';

export type UiLinearChartProps = {
  data: UiLinearChartData;
} & UiReactElementProps;

const CurrentLabelWrapper = styled.div<{ $current: number }>`
  padding-top: ${(props) => (props.$current > 0 ? '5px' : '8px')};
`;

export const UiLinearChart: React.FC<UiLinearChartProps> = ({ className, testId, data }: UiLinearChartProps) => (
  <div className={className} data-testid={testId}>
    <UiFlexGrid justifyContent="space-between">
      <UiText>{data.title}</UiText>
      {data.limit.label && <UiText>{data.limit.label}</UiText>}
    </UiFlexGrid>
    <WrapperDiv>
      <LimitDiv $limitValue={data.limit.value} $currentValue={data.current.value} $limitColor={data.limit.color} />
      <CurrentDiv $limitValue={data.limit.value} $currentValue={data.current.value} $currentColor={data.current.color}>
        {data.current.label && !data.current.labelStatic && (
          <CurrentLabelWrapper $current={data.current.value}>
            <UiText align="right">{data.current.label}</UiText>
          </CurrentLabelWrapper>
        )}
      </CurrentDiv>
    </WrapperDiv>
    {data.current.label && data.current.labelStatic && <UiText>{data.current.label}</UiText>}
  </div>
);

UiLinearChart.displayName = 'UiLinearChart';
