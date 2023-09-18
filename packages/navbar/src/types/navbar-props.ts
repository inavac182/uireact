import { ColorCategory, SpacingType, UiReactElementProps } from '@uireact/foundation';

export type Alignment = 'start' | 'center' | 'end';

export type Orientation = 'stacked' | 'inline';

export type NavbarStyling = 'bordered' | 'filled';

export type UiNavbarProps = {
  children: React.ReactNode;
  /**  Stacked will render all options vertically - INLINE Default */
  orientation?: Orientation;
  /** Color category for navbar */
  category?: ColorCategory;
  /** Navbar alignment */
  align?: Alignment;
  /** Gap between navbar items */
  gap?: SpacingType;
  /** If top and bottom item render rounded corners, useful for rendering navbar inside cards */
  roundedCorners?: boolean;
  /** If items should be stretched, useful when navbar is rendered to cover whole width */
  stretchItems?: boolean;
  /** The hover effect for the navbar*/
  styling?: NavbarStyling;
} & Omit<UiReactElementProps, 'children'>;

export type privateNavbarProps = {
  children: React.ReactNode;
  /** Color category for navbar */
  $category?: ColorCategory;
  /** If top and bottom item render rounded corners, useful for rendering navbar inside cards */
  $roundedCorners?: boolean;
  /** If items should be stretched, useful when navbar is rendered to cover whole width */
  $gap?: SpacingType;
  $stretchItems?: boolean;
  $orientation: Orientation;
  $align: Alignment;
  $styling?: NavbarStyling;
};
