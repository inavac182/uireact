import React from 'react';

import { UiListItemProps } from './types';

export const UiListItem: React.FC<UiListItemProps> = ({ children, className }: UiListItemProps) => {
  return <li className={className}>{children}</li>;
};

UiListItem.displayName = 'UiListItem';
