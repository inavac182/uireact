import { ColorCategory, SizesProp, Theme, UiReactElementProps } from '@uireact/foundation';
import { MotionProps } from 'framer-motion';

import * as SvgsComponent from '../public/svgs';

export type InverseColorationProp = {
  light: boolean;
  dark: boolean;
};

export type UiIconProps = {
  /** Icon ID to be rendered */
  icon: keyof typeof SvgsComponent;
  /** Icon category */
  category?: ColorCategory;
  /** Icon Size */
  size?: SizesProp;
  /** If the font color should be inversed to use its counter part coloration. */
  inverseColoration?: boolean;
  /* Defaults the element to a specific theme coloration */
  coloration?: 'dark' | 'light';
  /* Framer motion props */
  motion?: MotionProps;
} & UiReactElementProps;

export type privateIconProps = {
  $size?: SizesProp;
  $category?: ColorCategory;
  $inverseColoration?: boolean;
  $coloration?: 'dark' | 'light';
  $theme: Theme;
};
