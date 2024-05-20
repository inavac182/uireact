import { ColorCategory, UiReactElementProps } from '@uireact/foundation';
import { MotionProps } from 'framer-motion';

export type UiTooltipProps = {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  category?: ColorCategory;
  inverse?: boolean;
} & UiReactElementProps;

export type privateTooltipProps = {
  $position?: 'top' | 'bottom' | 'left' | 'right';
  $category: ColorCategory;
  $inverse?: boolean;
};
