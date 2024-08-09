import { AriaAttributes } from 'react';

import type { ColorCategory, SizesProp, SpacingDistribution, Theme, UiReactElementProps } from '@uireact/foundation';

import { FontStyle } from './ui-text-props';


export type UiLinkProps = {
  /* Defaults the element to a specific theme coloration */
  coloration?: 'dark' | 'light';
  /* Represents the theme to use for the link, default PRIMARY */
  category?: ColorCategory;
  /** Link size, default REGULAR */
  size?: SizesProp;
  /** If link should take the whole link, useful for rendering links as Navbar items */
  fullWidth?: boolean;
  /** Font style */
  fontStyle?: FontStyle;
  /** If text should wrap */
  wrap?: boolean;
  /** Margin to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  margin?: SpacingDistribution;
  /** Padding to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  padding?: SpacingDistribution;
} & UiReactElementProps & AriaAttributes;
