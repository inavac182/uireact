import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiHeadingProps = {
  /* Heading level to be used */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /* Heading centered */
  centered?: boolean;
  /* Wrap text with 3 dots at the end */
  wrap?: boolean;
} & UiReactElementProps;

export type privateHeadingProps = {
  $centered?: boolean;
  $level: 1 | 2 | 3 | 4 | 5 | 6;
  $wrap?: boolean;
} & UiReactPrivateElementProps;
