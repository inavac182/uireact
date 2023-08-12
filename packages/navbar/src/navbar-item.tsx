import React from 'react';

import { UiNavbarItemProps } from './types';

export const UiNavbarItem: React.FC<UiNavbarItemProps> = ({ children }: UiNavbarItemProps) => {
  return <>{children}</>;
};

UiNavbarItem.displayName = 'UiNavbarItem';
