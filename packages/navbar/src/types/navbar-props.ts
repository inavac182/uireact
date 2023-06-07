import { ColorCategory, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type Alignment = 'start' | 'center' | 'end';

export type Orientation = 'stacked' | 'inline';

export type UiNavbarProps = {
  children: React.ReactElement;
  /**  Stacked will render all options vertically - INLINE Default */
  orientation?: Orientation;
  /** Color category for navbar */
  category?: ColorCategory;
  /** Navbar alignment */
  align?: Alignment;
} & Omit<UiReactElementProps, 'children'>;

export type privateNavbarProps = UiNavbarProps & UiReactPrivateElementProps;
