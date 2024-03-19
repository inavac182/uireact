import { ColorCategory, UiReactElementProps } from '@uireact/foundation';

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
