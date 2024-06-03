import { ColorCategory, SizesProp, UiReactElementProps } from '@uireact/foundation';
import { AriaAttributes } from 'react';

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
} & UiReactElementProps & AriaAttributes;

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
} & UiReactElementProps & AriaAttributes;
