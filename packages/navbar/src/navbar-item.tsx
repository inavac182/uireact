'use client';
import React from 'react';
import { motion as MotionParent } from 'motion/react';

import { UiNavbarItemProps } from './types';

export const UiNavbarItem: React.FC<UiNavbarItemProps> = ({ children, motion }: UiNavbarItemProps) => {
  return <MotionParent.div {...motion}>{children}</MotionParent.div>;
};

UiNavbarItem.displayName = 'UiNavbarItem';
