import React, { useMemo } from 'react';

import { UiViewRowProps } from './types';
import styles from './ui-view-row.scss';

export const UiViewRow: React.FC<UiViewRowProps> = ({
  category = 'primary',
  centeredContent,
  children,
  className = '',
  inverseFont,
  testId,
  weight = '100',
  noBackground
}: UiViewRowProps) => {
  const bgClass = noBackground ? '' : `bg-${category}-${weight}`;
  const colorClass = `color${inverseFont ? '-inverse': ''}-fonts-100`;

  return (
    <div className={`${className} ${bgClass} ${colorClass}`} data-testid={testId}>
      <div className={`${centeredContent ? styles.centered : ''}`}>{children}</div>
    </div>
  );
};

UiViewRow.displayName = 'UiViewRow';
