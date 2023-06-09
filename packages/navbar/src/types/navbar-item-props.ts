import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiNavbarItemProps = {
  children?: React.ReactNode;
  /** If the current option is active */
  active?: boolean;
} & UiReactElementProps;

export type privateNavbarItemProps = UiNavbarItemProps & UiReactPrivateElementProps;
