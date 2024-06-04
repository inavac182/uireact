import React from 'react';

import { UiFlexGridItemProps } from './types';
import { getFlexItemClasses, getFlexItemStyles } from './helpers';

export const UiFlexGridItem: React.FC<UiFlexGridItemProps> = ({
  children,
  className = '',
  testId,
  ...props
}: UiFlexGridItemProps) => (
  <div className={`${className} ${getFlexItemClasses(props)}`} style={getFlexItemStyles(props)} data-testid={testId}>
    {children}
  </div>
);

UiFlexGridItem.displayName = 'UiFlexGridItem';
