import { ColorCategory, TextSize, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiLabelProps = {
  /* For what elements this label is */
  htmlFor?: string;
  /* Text size to be used, default is SMALL */
  size?: TextSize;
  /* Represents the theme to use for the text, default PRIMARY */
  category?: ColorCategory;
} & UiReactElementProps;

export type privateLabelProps = {
  /* For what elements this label is */
  htmlFor?: string;
  /* Represents the theme to use for the text, default PRIMARY */
  $category?: ColorCategory;
  $size: TextSize;
} & UiReactPrivateElementProps;
