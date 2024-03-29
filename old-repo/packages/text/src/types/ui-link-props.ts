import { ColorCategory, SizesProp, Theme, UiReactElementProps } from '@uireact/foundation';

import { FontStyle } from './ui-text-props';

export type UiLinkProps = {
  /* Defaults the element to a specific theme coloration */
  coloration?: 'dark' | 'light';
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
} & UiReactElementProps;

export type privateLinkProps = {
  /** Link size, default REGULAR */
  $size: SizesProp;
  /** If link should take the whole link, useful for rendering links as Navbar items */
  $fullWidth?: boolean;
  /** Font style */
  $fontStyle?: FontStyle;
  $category?: ColorCategory;
  $wrap?: boolean;
  $coloration?: 'dark' | 'light';
  $theme: Theme;
};
