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
  /* Represents the color category to use for the text, default PRIMARY */
  category?: ColorCategory;
} & UiReactElementProps;

export type privateTextProps = {
  /* Text size to be used, default is regular */
  $size: TextSize;
  /* Render text centered */
  $centered?: boolean;
  /** Font style */
  $fontStyle?: FontStyle;
  /* Render text inlined */
  $inline?: boolean;
  $category?: ColorCategory;
} & UiReactPrivateElementProps;
