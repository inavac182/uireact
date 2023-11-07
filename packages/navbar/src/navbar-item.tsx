'use client';
import React from 'react';

import { UiNavbarItemProps } from './types';

export const UiNavbarItem: React.FC<UiNavbarItemProps> = ({ children }: UiNavbarItemProps) => {
  return <div>{children}</div>;
};

UiNavbarItem.displayName = 'UiNavbarItem';
