import { AriaAttributes } from 'react';

import { ColorCategory, SizesProp, SpacingDistribution, UiReactElementProps } from '@uireact/foundation';

export type FontStyle = 'italic' | 'bold' | 'slim';

export type InverseColorationProp = {
  light: boolean;
  dark: boolean;
};

export type UiTextProps = {
  /* Defaults the element to a specific theme coloration */
  coloration?: 'dark' | 'light';
  /* Text size to be used, default is regular */
  size?: SizesProp;
  /** Font style */
  fontStyle?: FontStyle;
  /* Render text inlined */
  inline?: boolean;
  /* Represents the color category to use for the text, default PRIMARY */
  category?: ColorCategory;
  /** If the font color should be inversed to use its counter part coloration. */
  inverseColoration?: boolean;
  /** Align text, default LEFT */
  align?: 'left' | 'center' | 'right';
  /** If the text should wrap */
  wrap?: boolean;
  /** Margin to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  margin?: SpacingDistribution;
  /** Padding to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  padding?: SpacingDistribution;
} & UiReactElementProps & AriaAttributes;
