import { AriaAttributes } from 'react';

import type { ColorCategory, SizesProp, SpacingDistribution, UiReactElementProps } from '@uireact/foundation';

import { FontStyle } from './ui-text-props';

export type UiButtonLinkProps = {
  /* Represents the theme to use for the link, default PRIMARY */
  category?: ColorCategory;
  /** URL to be opened */
  href?: string;
  /** Link size, default REGULAR */
  size?: SizesProp;
  /** If link should take the whole link, useful for rendering links as Navbar items */
  fullWidth?: boolean;
  /** Font style */
  fontStyle?: FontStyle;
  /** If text should wrap */
  wrap?: boolean;
  /** If link text should render inverse text coloration */
  inverseTextColoration?: boolean;
  /* Defaults the element to a specific theme coloration */
  coloration?: 'dark' | 'light';
  /** Margin to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  margin?: SpacingDistribution;
  /** Padding to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  padding?: SpacingDistribution;
  /** The styling of the button */
  styling?: 'clear' | 'icon';
  /** If the button is rounded */
  rounded?: boolean;
} & UiReactElementProps & AriaAttributes;
