import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';
import { MotionProps } from 'motion/react';

export type UiNavbarItemProps = {
  children?: React.ReactNode;
  /** If the current option is active */
  active?: boolean;
  /** Framer motion props */
  motion?: MotionProps;
} & UiReactElementProps;
