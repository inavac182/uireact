import { AriaAttributes } from 'react';

import type { ColorCategory, SpacingDistribution, UiReactElementProps } from '@uireact/foundation';

import { InverseColorationProp } from './ui-text-props';

export type UiHeadingProps = {
  /* Heading level to be used */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /* Heading category */
  category?: ColorCategory;
  /* Heading centered */
  centered?: boolean;
  /* The style for the heading wrapping */
  wrap?: 'normal' | 'break' | 'ellipsis' | 'clip';
  /* If heading should use inverse theme coloration */
  inverseColoration?: boolean | InverseColorationProp;
  /* Defaults the element to a specific theme coloration */
  coloration?: 'dark' | 'light';
  /** Margin to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  margin?: SpacingDistribution;
  /** Padding to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  padding?: SpacingDistribution;
} & UiReactElementProps & AriaAttributes;
