import React from 'react';

import { ThemeContext } from '@uireact/foundation';

import { NavbarWrapper } from './private';

export interface UiNavbarProps {
  children?: React.ReactNode;
  /**  Stacked will render all options vertically - INLINE Default */
  orientation: 'stacked' | 'inline';
}

export const UiNavbar: React.FC<UiNavbarProps> = ({ children, orientation }: UiNavbarProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <NavbarWrapper customTheme={themeContext.theme} orientation={orientation}>
      {children}
    </NavbarWrapper>
  );
};

UiNavbar.displayName = 'UiNavbar';
