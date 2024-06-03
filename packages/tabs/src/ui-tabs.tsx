import React from 'react';

import { UiTabsProps } from './types';
import styles from './ui-tabs.scss';

export const UiTabs: React.FC<UiTabsProps> = ({ children, className = '', radius, ...props }: UiTabsProps) => (
  <div className={`${className} ${styles.tabs} ${radius ? styles[`radius-${radius}`] : ''}`} {...props}>
    {children}
  </div>
);

UiTabs.displayName = 'UiTabs';
