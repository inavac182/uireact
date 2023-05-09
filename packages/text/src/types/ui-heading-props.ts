import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiHeadingProps = {
  /* Heading level to be used */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /* Heading centered */
  centered?: boolean;
} & UiReactElementProps;

export type privateHeadingProps = UiHeadingProps & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
} & UiReactPrivateElementProps;
