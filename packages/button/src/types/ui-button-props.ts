import { AriaAttributes, MouseEvent } from 'react';

import { ColorCategory, SizesProp, SpacingDistribution } from '@uireact/foundation';
import { MotionProps } from 'framer-motion';

export type UiButtonProps = {
  /** onClick Handler */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  /** Disable button */
  disabled?: boolean;
  children?: React.ReactNode;
  /** testId attribute */
  testId?: string;
  /** className attribute */
  className?: string;
  /** Button id */
  id?: string;
  /** Button theme */
  category?: ColorCategory;
  /** If button should take full height */
  fullHeight?: boolean;
  /** If button should take full width */
  fullWidth?: boolean;
  /** Button padding */
  padding?: SpacingDistribution;
  /** Button margin */
  margin?: SpacingDistribution;
  /** Framer motion props */
  motion?: MotionProps;
  /** Button type */
  type?: 'button' | 'submit';
  /** Button type */
  ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
  /** Button with rounded corners */
  rounded?: boolean;
  /** The styling of the button to render */
  styling?: 'filled' | 'clear' | 'icon' | 'outlined';
  /** The size of the border */
  roundedSize?: SizesProp;
} & AriaAttributes;
