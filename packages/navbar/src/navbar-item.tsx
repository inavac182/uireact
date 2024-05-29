'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { UiNavbarItemProps } from './types';

const ItemWrapper = styled(motion.div)``;

export const UiNavbarItem: React.FC<UiNavbarItemProps> = ({ children, motion }: UiNavbarItemProps) => {
  return <ItemWrapper {...motion}>{children}</ItemWrapper>;
};

UiNavbarItem.displayName = 'UiNavbarItem';
