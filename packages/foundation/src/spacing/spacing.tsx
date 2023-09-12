import * as React from 'react';

import styled from 'styled-components';

import { UiReactElementProps, UiReactPrivateElementProps, Theme, SpacingType } from '../types';
import { ThemeContext } from '../providers/theme-context';

export type SpacingDistribution = {
  /** Applies size to all sides */
  all?: SpacingType;
  /** Applies size to top and bottom */
  block?: SpacingType;
  /** Applies size to left and right */
  inline?: SpacingType;
  /** Applies size to left */
  left?: SpacingType;
  /** Applies size to right */
  right?: SpacingType;
  /** Applies size to top */
  top?: SpacingType;
  /** Applies size to bottom */
  bottom?: SpacingType;
};

export type UiSpacingProps = UiReactElementProps & {
  /** Margin to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  margin?: SpacingDistribution;
  /** Padding to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  padding?: SpacingDistribution;
  /** For rendering the spacing as inline block */
  inline?: boolean;
};

type __UiSpacingProps = UiReactPrivateElementProps & {
  $margin?: SpacingDistribution;
  $padding?: SpacingDistribution;
  $inline?: boolean;
};

const getSpaceValue = (sizing: SpacingDistribution, theme: Theme): string => {
  if (sizing.all) {
    return theme.spacing[sizing.all];
  }

  if (sizing.inline) {
    return `0px ${theme.spacing[sizing.inline]}`;
  }

  if (sizing.block) {
    return `${theme.spacing[sizing.block]} 0px`;
  }

  return `
    ${sizing.top ? theme.spacing[sizing.top] : '0px'}
    ${sizing.right ? theme.spacing[sizing.right] : '0px'}
    ${sizing.bottom ? theme.spacing[sizing.bottom] : '0px'}
    ${sizing.left ? theme.spacing[sizing.left] : '0px'}
  `;
};

const Div = styled.div<__UiSpacingProps>`
  ${(props) => `
    ${props.$margin ? `margin: ${getSpaceValue(props.$margin, props.$customTheme)};` : ''}
    ${props.$padding ? `padding: ${getSpaceValue(props.$padding, props.$customTheme)};` : ''}
    ${props.$inline ? 'display: inline-block' : ''}
  `}
`;

export const UiSpacing: React.FC<UiSpacingProps> = ({
  children,
  className,
  inline,
  margin,
  padding,
  testId,
}: UiSpacingProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Div
      $inline={inline}
      $customTheme={themeContext.theme}
      $selectedTheme={themeContext.selectedTheme}
      $margin={margin}
      $padding={padding}
      className={className}
      data-testid={testId}
    >
      {children}
    </Div>
  );
};
