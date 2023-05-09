import { TextSize, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiTextProps = {
  /* Text size to be used, default is regular */
  size?: TextSize;
  /* Render text centered */
  centered?: boolean;
  /* Render text inlined */
  inline?: boolean;
} & UiReactElementProps;

export type privateTextProps = UiTextProps & {
  size: TextSize;
} & UiReactPrivateElementProps;
