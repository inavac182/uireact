import * as React from 'react';

import styled from 'styled-components';

import { UiReactElementProps, SpacingDistribution } from '../types';

export type UiSpacingProps = UiReactElementProps & {
  /** Margin to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  margin?: SpacingDistribution;
  /** Padding to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  padding?: SpacingDistribution;
  /** For rendering the spacing as inline block */
  inline?: boolean;
};

type __UiSpacingProps = {
  $margin?: SpacingDistribution;
  $padding?: SpacingDistribution;
  $inline?: boolean;
};

export const getSpacingStyle = (sizing: SpacingDistribution): string => {
  if (sizing.all) {
    return `var(--spacing-${sizing.all})`;
  }

  if (sizing.inline || sizing.block) {
    const blockValue = sizing.block ? `var(--spacing-${sizing.block})` : '0px';
    const inlineValue = sizing.inline ? `var(--spacing-${sizing.inline})` : '0px';

    return `${blockValue} ${inlineValue}`;
  }

  return `
    ${sizing.top ? `var(--spacing-${sizing.top})` : '0px'}
    ${sizing.right ? `var(--spacing-${sizing.right})` : '0px'}
    ${sizing.bottom ? `var(--spacing-${sizing.bottom})` : '0px'}
    ${sizing.left ? `var(--spacing-${sizing.left})` : '0px'}
  `;
};

const Div = styled.div<__UiSpacingProps>`
  ${(props) => `
    ${props.$margin ? `margin: ${getSpacingStyle(props.$margin)};` : ''}
    ${props.$padding ? `padding: ${getSpacingStyle(props.$padding)};` : ''}
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
}: UiSpacingProps) => (
  <Div $inline={inline} $margin={margin} $padding={padding} className={className} data-testid={testId}>
    {children}
  </Div>
);
