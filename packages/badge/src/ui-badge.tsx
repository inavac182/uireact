'use client';
import React from 'react';

import { UiBadgeProps } from './types';
import styles from './ui-badge.module.scss';

export const UiBadge: React.FC<UiBadgeProps> = ({
  category = 'primary',
  className = '',
  children,
  testId,
  size = 'small',
}: UiBadgeProps) => {
  const bgClass = `bg-${category}-10`;
  const colorClass = `color-${category}-200`;
  const borderClass = `border-${category}-200`;
  const radiusClass = `radius-${size}`;
  const sizeClass = `size-${size}`;

  return (
    <div className={`${styles.badge} ${bgClass} ${colorClass} ${borderClass} ${sizeClass} ${radiusClass} ${className}`} data-testid={testId}>
      <div className={styles.badgeContent}>{children}</div>
    </div>
  );
};

UiBadge.displayName = 'UiBadge';
