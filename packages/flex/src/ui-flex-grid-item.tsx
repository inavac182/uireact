import React from 'react';

import { UiFlexGridItemProps } from './types';
import { getFlexItemClasses } from './helpers';

export const UiFlexGridItem: React.FC<UiFlexGridItemProps> = ({
  children,
  className = '',
  testId,
  ...props
}: UiFlexGridItemProps) => (
  <div className={`${getFlexItemClasses(props)} ${className}`} data-testid={testId}>
    {children}
  </div>
);

UiFlexGridItem.displayName = 'UiFlexGridItem';
