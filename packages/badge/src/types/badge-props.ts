import { ColorCategory, TextSize, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiBadgeProps = {
  /** Badge category , default PRIMARY */
  category?: ColorCategory;
  /** Badge size, this is tied to the text size, default SMALL */
  size?: TextSize;
} & UiReactElementProps;

export type privateBadgeProps = UiBadgeProps & {
  category: ColorCategory;
} & UiReactPrivateElementProps;
