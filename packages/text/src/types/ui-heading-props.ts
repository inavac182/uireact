import { SpacingDistribution, Theme, UiReactElementProps } from '@uireact/foundation';
import { InverseColorationProp } from './ui-text-props';

export type UiHeadingProps = {
  /* Heading level to be used */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /* Heading centered */
  centered?: boolean;
  /* Wrap text with 3 dots at the end */
  wrap?: boolean;
  /* If heading should use inverse theme coloration */
  inverseColoration?: boolean | InverseColorationProp;
  /* Defaults the element to a specific theme coloration */
  coloration?: 'dark' | 'light';
  /** Margin to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  margin?: SpacingDistribution;
  /** Padding to use based on [SpacingDistribution](./packages-foundation-docs-spacing#spacingDistribution) */
  padding?: SpacingDistribution;
} & UiReactElementProps;

export type privateHeadingProps = {
  $centered?: boolean;
  $level: 1 | 2 | 3 | 4 | 5 | 6;
  $wrap?: boolean;
  $inverseColoration?: boolean | InverseColorationProp;
  $coloration?: 'dark' | 'light';
  $theme: Theme;
  $margin?: SpacingDistribution;
  $padding?: SpacingDistribution;
};
