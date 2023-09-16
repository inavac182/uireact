import { UiReactElementProps } from '@uireact/foundation';
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
} & UiReactElementProps;

export type privateHeadingProps = {
  $centered?: boolean;
  $level: 1 | 2 | 3 | 4 | 5 | 6;
  $wrap?: boolean;
  $inverseColoration?: boolean | InverseColorationProp;
};
