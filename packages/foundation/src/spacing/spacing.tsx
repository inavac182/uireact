'use client';
import * as React from 'react';

import { UiReactElementProps, SpacingDistribution } from '../types';

export type UiSpacingProps = UiReactElementProps & {
  /** Margin to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  margin?: SpacingDistribution;
  /** Padding to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  padding?: SpacingDistribution;
  /** For rendering the spacing as inline block */
  inline?: boolean;
};

const getSpacingClass = (type: 'margin' | 'padding', spacing?: SpacingDistribution) => {
  if (!spacing) {
    return '';
  }

  if (spacing.all) {
    return `${type}-${spacing.all}`;
  }

  if (spacing.block || spacing.inline) {
    let classes = '';

    if (spacing.block) {
      classes += `${type}-top-${spacing.block} ${type}-bottom-${spacing.block}`;
    }

    if (spacing.inline) {
      classes += ` ${type}-left-${spacing.block} ${type}-right-${spacing.block}`;
    }

    return classes
  }

  let classes = '';

  if (spacing.top) {
    classes += `${type}-top-${spacing.top}`;
  }

  if (spacing.bottom) {
    classes += ` ${type}-bottom-${spacing.bottom}`;
  }

  if (spacing.bottom) {
    classes += ` ${type}-left-${spacing.left}`;
  }

  if (spacing.bottom) {
    classes += ` ${type}-right-${spacing.right}`;
  }

  return classes;
}

export const UiSpacing: React.FC<UiSpacingProps> = ({
  children,
  className = "",
  inline,
  margin,
  padding,
  testId,
}: UiSpacingProps) => (
  <div className={`${inline ? 'inline' : ''} ${getSpacingClass('margin', margin)} ${getSpacingClass('padding', padding)} ${className}`} data-testid={testId}>
    {children}
  </div>
);

/**
 * 
 * @deprecated("Stop Using this, will be removed on v3")
 * @param sizing 
 * @returns string
 */
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