import React from 'react';

import { UiFlexGridProps } from './types';
import { getFlexClasses } from './helpers';


export const UiFlexGrid: React.FC<UiFlexGridProps> = ({
  children,
  className = '',
  testId,
  ...props
}: UiFlexGridProps) => {
  let classes = getFlexClasses(props);

  return (
    <div className={`${classes} ${className}`} data-testid={testId}>
      {children}
    </div>
  );
};

UiFlexGrid.displayName = 'UiFlexGrid';
