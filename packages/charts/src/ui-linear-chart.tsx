import React from 'react';

import { ThemeContext, UiReactElementProps } from '@uireact/foundation';
import { UiText } from '@uireact/text';

import { ThemedColor } from './types';
import { CurrentDiv, LimitDiv, WrapperDiv } from './private';

export type UiLinearChartProps = {
  /** Represents the limit value for the chart, the 100% value */
  limitValue: number;
  /** Represents the label for the limit value */
  limitLabel?: string;
  /** Represents the color for the limit value in the chart */
  limitColor?: string | ThemedColor;
  /** Represents the current value of the covered possibel area  */
  currentValue: number;
  /** Represents the label for the current value */
  currentLabel?: string;
  /** Represents the color for the current value */
  currentColor?: string | ThemedColor;
  /** Represents the chart's title */
  title?: string;
} & UiReactElementProps;

export const UiLinearChart: React.FC<UiLinearChartProps> = ({
  className,
  testId,
  limitValue,
  limitColor,
  title,
  currentValue,
  currentColor,
}: UiLinearChartProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <div className={className} data-testid={testId}>
      {title && <UiText>{title}</UiText>}
      <WrapperDiv>
        <LimitDiv
          $selectedTheme={themeContext.selectedTheme}
          $customTheme={themeContext.theme}
          $limitValue={limitValue}
          $currentValue={currentValue}
          $limitColor={limitColor}
        />
        <CurrentDiv
          $selectedTheme={themeContext.selectedTheme}
          $customTheme={themeContext.theme}
          $limitValue={limitValue}
          $currentValue={currentValue}
          $currentColor={currentColor}
        />
      </WrapperDiv>
    </div>
  );
};

UiLinearChart.displayName = 'UiLinearChart';
