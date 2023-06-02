import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiMenuProps = {
  /** Close label for dialog on small devices */
  closeLabel?: string;
  /** If the menu should go to fullscreen on small breakpoint */
  fullscreenOnSmall?: boolean;
  /** Menu identifier to be used when is fullscreen on small */
  menuId?: string;
  /** Menu visibility, default FALSE */
  visible: boolean;
  /** CB for when menu is closed */
  closeMenuCB: () => void;
} & UiReactElementProps;

export type privateMenuProps = UiMenuProps & {
  marginOffset: number;
} & UiReactPrivateElementProps;
