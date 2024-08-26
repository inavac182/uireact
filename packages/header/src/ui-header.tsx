'use client';
import React from 'react';

import { UiHeaderProps } from './types';

import styles from './ui-header.scss';
import { SpacingDistribution, getSpacingClass } from '@uireact/foundation';

const defaultPadding: SpacingDistribution = {all: 'two'};

export const UiHeader: React.FC<UiHeaderProps> = ({
  centered,
  children,
  className = '',
  fixed,
  testId,
  padding = defaultPadding,
  weight = '100',
}: UiHeaderProps) => (
  <div className={`${className} ${styles.header} ${fixed ? styles.stickyHeader : ''} bg-primary-${weight} ${getSpacingClass('padding', padding)}`} data-testid={testId}>
    {centered ? <div className={styles.centered}>{children}</div> : <>{children}</>}
  </div>
);

UiHeader.displayName = 'UiHeader';
