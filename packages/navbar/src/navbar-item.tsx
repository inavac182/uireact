import React from 'react';

import { NavbarItemWrapper } from './private';

export interface UiNavbarItemProps {
  children?: React.ReactNode;
}

export const UiNavbarItem: React.FC<UiNavbarItemProps> = ({ children }: UiNavbarItemProps) => {
  return <NavbarItemWrapper>{children}</NavbarItemWrapper>;
};

UiNavbarItem.displayName = 'UiNavbarItem';
