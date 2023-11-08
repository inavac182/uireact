import { ColorCategory, SizesProp, UiReactElementProps } from '@uireact/foundation';

export type UiExpandoLinkProps = {
  /** The initial expanded state */
  expanded?: boolean;
  /** The expando label */
  label: string;
  /** The expando on change callback */
  onChange?: (expanded: boolean) => void;
  /** If the coloration is inversed */
  inverseColoration?: boolean;
  /** The text and icon color category */
  category?: ColorCategory;
  /** The text and icon size */
  size?: SizesProp;
} & UiReactElementProps;

export type UiExpandoLinkInternalProps = {
  $inverseColoration: boolean;
  $category: ColorCategory;
  $size: SizesProp;
};
