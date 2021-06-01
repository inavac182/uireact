import React from 'react';

import { NavbarItemWrapper } from './private';

export interface UiNavbarItemProps {
  children?: React.ReactNode;
  /** Alignment where the item content will render - CENTER Default */
  align?: 'right' | 'center' | 'left';
}

export const UiNavbarItem: React.FC<UiNavbarItemProps> = ({ children, align }: UiNavbarItemProps) => {
  return <NavbarItemWrapper align={align}>{children}</NavbarItemWrapper>;
};

UiNavbarItem.displayName = 'UiNavbarItem';
