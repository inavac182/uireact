import { ColorCategory, SizesProp, UiReactElementProps } from '@uireact/foundation';

export type UiExpandoLinkProps = {
  /** The initial expanded state */
  expanded?: boolean;
  /** The expand label */
  expandLabel: string;
  /** The collapse label */
  collapseLabel: string;
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

export type UiExpandoCardProps = {
  /** The initial expanded state */
  expanded?: boolean;
  /** The expand label */
  expandLabel: string;
  /** The collapse label */
  collapseLabel: string;
  /** The expando on change callback */
  onChange?: (expanded: boolean) => void;
  /** The card category */
  category?: ColorCategory;
  /** Use inverse coloration for heading */
  headingInverseColoration?: boolean;
} & UiReactElementProps;

export type UiExpandoCardInternalProps = {
  $category?: ColorCategory;
  $isExpanded?: boolean;
  $headingInverseColoration?: boolean;
};
