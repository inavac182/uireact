import React from 'react';

import { ThemeContext, UiReactElementProps, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiText } from '@uireact/text';
import { UiFlexGrid } from '@uireact/flex';

import { ThemedColor } from './types';
import { CurrentDiv, LimitDiv, WrapperDiv } from './private';

export type UiLinearChartProps = {
  /** Represents the limit value for the chart, the 100% value */
  limitValue: number;
  /** Represents the label for the limit value */
  limitLabel?: string;
  /** Represents the color for the limit value in the chart, if not provide defaults to the SECONDARY color in the theme */
  limitColor?: string | ThemedColor;
  /** Represents the current value of the covered possibel area  */
  currentValue: number;
  /** Represents the label for the current value */
  currentLabel?: string;
  /** Represents the color for the current value, if not provide defaults to the TERTIARY color in the theme */
  currentColor?: string | ThemedColor;
  /** Current label position */
  currentLabelPosition?: 'static';
  /** Represents the chart's title */
  title?: string;
} & UiReactElementProps;

const currentLabelSpacing: UiSpacingProps['padding'] = { top: 'three' };

export const UiLinearChart: React.FC<UiLinearChartProps> = ({
  className,
  testId,
  limitValue,
  limitColor,
  limitLabel,
  title,
  currentValue,
  currentColor,
  currentLabel,
  currentLabelPosition,
}: UiLinearChartProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <div className={className} data-testid={testId}>
      <UiFlexGrid justifyContent="space-between">
        <UiText>{title}</UiText>
        {limitLabel && <UiText>{limitLabel}</UiText>}
      </UiFlexGrid>
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
        >
          {currentLabel && !currentLabelPosition && (
            <UiSpacing padding={currentLabelSpacing}>
              <UiText align="right">{currentLabel}</UiText>
            </UiSpacing>
          )}
        </CurrentDiv>
      </WrapperDiv>
      {currentLabel && currentLabelPosition === 'static' && <UiText>{currentLabel}</UiText>}
    </div>
  );
};

UiLinearChart.displayName = 'UiLinearChart';
