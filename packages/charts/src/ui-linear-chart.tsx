import React from 'react';

import { ThemeContext, UiReactElementProps, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiText } from '@uireact/text';
import { UiFlexGrid } from '@uireact/flex-grid';

import { UiLinearChartData } from './types';
import { CurrentDiv, LimitDiv, WrapperDiv } from './private';

export type UiLinearChartProps = {
  data: UiLinearChartData;
} & UiReactElementProps;

const currentLabelSpacing: UiSpacingProps['padding'] = { top: 'three' };

export const UiLinearChart: React.FC<UiLinearChartProps> = ({ className, testId, data }: UiLinearChartProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <div className={className} data-testid={testId}>
      <UiFlexGrid justifyContent="space-between">
        <UiText>{data.title}</UiText>
        {data.limit.label && <UiText>{data.limit.label}</UiText>}
      </UiFlexGrid>
      <WrapperDiv>
        <LimitDiv
          $selectedTheme={themeContext.selectedTheme}
          $customTheme={themeContext.theme}
          $limitValue={data.limit.value}
          $currentValue={data.current.value}
          $limitColor={data.limit.color}
        />
        <CurrentDiv
          $selectedTheme={themeContext.selectedTheme}
          $customTheme={themeContext.theme}
          $limitValue={data.limit.value}
          $currentValue={data.current.value}
          $currentColor={data.current.color}
        >
          {data.current.label && !data.current.labelStatic && (
            <UiSpacing padding={currentLabelSpacing}>
              <UiText align="right">{data.current.label}</UiText>
            </UiSpacing>
          )}
        </CurrentDiv>
      </WrapperDiv>
      {data.current.label && data.current.labelStatic && <UiText>{data.current.label}</UiText>}
    </div>
  );
};

UiLinearChart.displayName = 'UiLinearChart';
