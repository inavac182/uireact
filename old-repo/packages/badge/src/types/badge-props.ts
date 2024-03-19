import { ColorCategory, SizesProp, UiReactElementProps } from '@uireact/foundation';

export type UiBadgeProps = {
  /** Badge category , default PRIMARY */
  category?: ColorCategory;
  /** Badge size, this is tied to the text size, default SMALL */
  size?: SizesProp;
} & UiReactElementProps;

export type privateBadgeProps = UiBadgeProps & {
  $category: ColorCategory;
};
