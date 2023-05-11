import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiMenuProps = {
  /** If the menu should go to fullscreen on small breakpoint */
  fullscreenOnSmall?: boolean;
  /** Menu visibility, default FALSE */
  visible: boolean;
  /** CB for when menu is closed */
  closeMenuCB: () => void;
} & UiReactElementProps;

export type privateMenuProps = UiMenuProps & UiReactPrivateElementProps;
