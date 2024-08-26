import React from 'react';

import { SpacingDistribution, getSpacingClass } from '@uireact/foundation';

import { UiListItemProps } from './types';
import styles from './ui-list.scss';

const defaultSpacing: SpacingDistribution = { all: 'one' };

export const UiListItem: React.FC<UiListItemProps> = ({ children, className = '', padding = defaultSpacing }: UiListItemProps) => (
    <li className={`${className} ${styles.item} ${getSpacingClass('padding', padding)}`}>{children}</li>
);

UiListItem.displayName = 'UiListItem';
