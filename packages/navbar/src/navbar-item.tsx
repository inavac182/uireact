'use client';
import React from 'react';
import { motion as MotionParent } from 'framer-motion';

import { UiNavbarItemProps } from './types';

export const UiNavbarItem: React.FC<UiNavbarItemProps> = ({ children, motion }: UiNavbarItemProps) => {
  return <MotionParent.div {...motion}>{children}</MotionParent.div>;
};

UiNavbarItem.displayName = 'UiNavbarItem';
