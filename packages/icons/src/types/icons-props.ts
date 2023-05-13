import { ColorCategories, TextSize, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiIconProps = {
  /** Icon ID to load */
  id: string;
  /** Icon category */
  category?: ColorCategories;
  /** Icon Size */
  size?: TextSize;
} & UiReactElementProps;

export type privateIconProps = Omit<UiIconProps, 'id'> & UiReactPrivateElementProps;
