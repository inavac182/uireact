import { ColorCategory, SizesProp, UiReactElementProps } from '@uireact/foundation';

import { FontStyle } from './ui-text-props';

export type UiButtonLinkProps = {
  /* Represents the theme to use for the link, default PRIMARY */
  category?: ColorCategory;
  /** URL to be opened */
  href?: string;
  /** Handle link click */
  handleClick?: () => void;
  /** Link size, default REGULAR */
  size?: SizesProp;
  /** If link should take the whole link, useful for rendering links as Navbar items */
  fullWidth?: boolean;
  /** Font style */
  fontStyle?: FontStyle;
  /** If text should wrap */
  wrap?: boolean;
  /** If link text should render inverse text coloration */
  inverseTextColoration?: boolean;
} & UiReactElementProps;

export type privateButtonLinkProps = {
  /* Represents the theme to use for the link, default PRIMARY */
  $theme?: ColorCategory;
  /** Link size, default REGULAR */
  $size: SizesProp;
  /** If link should take the whole link, useful for rendering links as Navbar items */
  $fullWidth?: boolean;
  /** Font style */
  $fontStyle?: FontStyle;
  $category?: ColorCategory;
  $wrap?: boolean;
  /** If link text should render inverse text coloration */
  $inverseTextColoration?: boolean;
};
