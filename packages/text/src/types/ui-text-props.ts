import { ColorCategory, TextSize, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type FontStyle = 'italic' | 'bold' | 'regular' | 'light';

export type UiTextProps = {
  /* Text size to be used, default is regular */
  size?: TextSize;
  /* Render text centered */
  centered?: boolean;
  /** Font style */
  fontStyle?: FontStyle;
  /* Render text inlined */
  inline?: boolean;
  /* Represents the theme to use for the text, default PRIMARY */
  theme?: ColorCategory;
} & UiReactElementProps;

export type privateTextProps = Omit<UiTextProps, 'theme'> & {
  category?: ColorCategory;
  size: TextSize;
} & UiReactPrivateElementProps;
