import { ColorCategory, SizesProp, SpacingDistribution, Theme, UiReactElementProps } from '@uireact/foundation';

export type UiLabelProps = {
  /* For what elements this label is */
  htmlFor?: string;
  /* Text size to be used, default is SMALL */
  size?: SizesProp;
  /* Represents the theme to use for the text, default PRIMARY */
  category?: ColorCategory;
  /* Defaults the element to a specific theme coloration */
  coloration?: 'dark' | 'light';
  /** Margin to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  margin?: SpacingDistribution;
  /** Padding to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  padding?: SpacingDistribution;
} & UiReactElementProps;

export type privateLabelProps = {
  /* For what elements this label is */
  htmlFor?: string;
  /* Represents the theme to use for the text, default PRIMARY */
  $category?: ColorCategory;
  $size: SizesProp;
  $coloration?: 'dark' | 'light';
  $theme: Theme;
  $margin?: SpacingDistribution;
  $padding?: SpacingDistribution;
};
