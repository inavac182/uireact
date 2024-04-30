import { UiReactElementProps } from '@uireact/foundation';
import { MotionProps } from 'framer-motion';

export type UiMenuProps = {
  /** Close label for dialog on small devices */
  closeLabel?: string;
  /** If the menu should go to fullscreen on small breakpoint */
  fullscreenOnSmall?: boolean;
  /** Menu identifier to be used when is fullscreen on small */
  menuId?: string;
  /** Frame motion props */
  motion?: MotionProps;
  /** Menu visibility, default FALSE */
  visible: boolean;
  /** CB for when menu is closed */
  closeMenuCB: () => void;
} & UiReactElementProps;

export type privateMenuProps = {
  /** Close label for dialog on small devices */
  $closeLabel?: string;
  /** If the menu should go to fullscreen on small breakpoint */
  $fullscreenOnSmall?: boolean;
  /** Menu identifier to be used when is fullscreen on small */
  $menuId?: string;
  /** Menu visibility, default FALSE */
  $visible: boolean;
  $isOffset: boolean;
};
