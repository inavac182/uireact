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
  const bgClass = useMemo(() => {
    if (noBackground) {
      return '';
    }

    return `bg-${category}-${weight}`;
  }, [category, noBackground, weight]);
  const colorClass = useMemo(() => {
    if (inverseFont) {
      return `color-inverse-fonts-${weight}`;
    }

    return `color-fonts-100`;
  }, [inverseFont, weight]);

  return (
    <div className={`${className} ${bgClass} ${colorClass}`} data-testid={testId}>
      <div className={`${centeredContent ? styles.centered : ''}`}>{children}</div>
    </div>
  );
};

UiViewRow.displayName = 'UiViewRow';
