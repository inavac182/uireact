import * as React from 'react';

import styled from 'styled-components';

import { UiReactElementProps, UiReactPrivateElementProps, Sizing, Theme } from '../types';
import { ThemeContext } from '../providers/theme-context';

export type SpacingDistribution = {
  /** Applies size to all sides */
  all?: Sizing;
  /** Applies size to top and bottom */
  block?: Sizing;
  /** Applies size to left and right */
  inline?: Sizing;
  /** Applies size to left */
  left?: Sizing;
  /** Applies size to right */
  right?: Sizing;
  /** Applies size to top */
  top?: Sizing;
  /** Applies size to bottom */
  bottom?: Sizing;
};

export type UiSpacingProps = UiReactElementProps & {
  /** Margin to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  margin?: SpacingDistribution;
  /** Padding to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  padding?: SpacingDistribution;
};

type __UiSpacingProps = UiReactPrivateElementProps & UiSpacingProps;

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
    ${props.margin ? `margin: ${getSpaceValue(props.margin, props.customTheme)};` : ''}
    ${props.padding ? `padding: ${getSpaceValue(props.padding, props.customTheme)};` : ''}
  `}
`;

export const UiSpacing: React.FC<UiSpacingProps> = ({ children, margin, padding, testId }: UiSpacingProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Div
      customTheme={themeContext.theme}
      selectedTheme={themeContext.selectedTheme}
      margin={margin}
      padding={padding}
      data-testid={testId}
    >
      {children}
    </Div>
  );
};
