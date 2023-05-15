import { ColorCategory, TextSize, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiTextProps = {
  /* Text size to be used, default is regular */
  size?: TextSize;
  /* Render text centered */
  centered?: boolean;
  /* Render text inlined */
  inline?: boolean;
  /* Represents the theme to use for the text, default PRIMARY */
  theme?: ColorCategory;
} & UiReactElementProps;

export type privateTextProps = Omit<UiTextProps, 'theme'> & {
  category?: ColorCategory;
  size: TextSize;
} & UiReactPrivateElementProps;
