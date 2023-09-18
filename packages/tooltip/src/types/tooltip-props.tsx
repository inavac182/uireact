import { UiReactElementProps } from '@uireact/foundation';

export type UiTooltipProps = {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
} & UiReactElementProps;

export type privateTooltipProps = {
  $position?: 'top' | 'bottom' | 'left' | 'right';
};
