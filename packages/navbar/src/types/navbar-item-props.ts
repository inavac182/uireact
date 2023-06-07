import { ColorCategory, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiNavbarItemProps = {
  children?: React.ReactElement;
  /** Alignment where the item content will render - CENTER Default */
  align?: 'right' | 'center' | 'left';
  /** If the current option is active */
  active?: boolean;
  /** Selected category for navbar */
  category?: ColorCategory;
} & UiReactElementProps;

export type privateNavbarItemProps = UiNavbarItemProps & {
  category: ColorCategory;
} & UiReactPrivateElementProps;
