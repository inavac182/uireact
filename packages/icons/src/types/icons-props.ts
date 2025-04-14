import { ColorCategory, ColorToken, SizesProp, UiReactElementProps } from '@uireact/foundation';
import { MotionProps } from 'motion/react';

import * as SvgsComponent from '../public/svgs';
import { AriaAttributes } from 'react';

export const UiReactIcons = SvgsComponent;

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
  /** Color weight of the icon */
  weight?: ColorToken;
} & UiReactElementProps & AriaAttributes;
