import React from 'react';

import { UiListProps } from './types';
import styles from './ui-list.scss';
import { SpacingDistribution, getSpacingClass } from '@uireact/foundation';

const defaultPadding: SpacingDistribution = {
  left: 'five'
};

const defaultUnBulletedPadding: SpacingDistribution = {};

export const UiList: React.FC<UiListProps> = ({ children, className = '', type = 'UNORDERED', padding, ...props }: UiListProps) => {
  switch (type) {
    case 'ORDERED':
      return <ol className={`${className} ${getSpacingClass('padding', padding || defaultPadding)}`} {...props}>{children}</ol>;
    case 'BULLETED':
      return (
        <ul className={`${className} ${getSpacingClass('padding', padding || defaultPadding)}`} {...props}>
          {children}
        </ul>
      );
    default:
      return (
        <ul className={`${className} ${getSpacingClass('padding', padding || defaultUnBulletedPadding)} ${styles.unordered}`} {...props}>
          {children}
        </ul>
      );
  }
};

UiList.displayName = 'UiList';
