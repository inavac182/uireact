import { ColorCategory, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiNavbarItemProps = {
  children?: React.ReactNode;
  /** If the current option is active */
  active?: boolean;
  /** Selected category for navbar */
  category?: ColorCategory;
} & UiReactElementProps;

export type privateNavbarItemProps = UiNavbarItemProps & {
  category: ColorCategory;
} & UiReactPrivateElementProps;
