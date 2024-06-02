import { AriaAttributes } from 'react';

import { ColorCategory, SpacingType, UiReactElementProps } from '@uireact/foundation';
import { MotionProps } from 'framer-motion';

export type NavbarOrientation = 'stacked' | 'inline';
export type NavbarColoration = 'light' | 'dark';
export type NavbarStyling = 'bordered' | 'filled';
export type NavbarRounded = 'all' | 'edges';

export type UiNavbarProps = {
  children: React.ReactNode;
  /**  Stacked will render all options vertically - INLINE Default */
  orientation?: NavbarOrientation;
  /** Color category for navbar */
  category?: ColorCategory;
  /** Gap between navbar items */
  gap?: SpacingType;
  /** If items should be stretched, useful when navbar is rendered to cover whole width */
  stretch?: boolean;
  /** The Navbar colorations tyling */
  styling?: NavbarStyling;
  /** The Navbar rounded edges prop */
  rounded?: NavbarRounded;
  /** If the navbar should render using lighter or darker tokens */
  hoverColoration?: NavbarColoration;
  /** If the navbar should not render bg */
  noBackground?: boolean;
  /** Framer motion props */
  motion?: MotionProps;
} & UiReactElementProps & AriaAttributes;
