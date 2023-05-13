import React from 'react';

import { UiProgressIndicatorItemProps } from './types';

export const UiProgressIndicatorItem: React.FC<UiProgressIndicatorItemProps> = ({
  children,
}: UiProgressIndicatorItemProps) => <>{children}</>;

UiProgressIndicatorItem.displayName = 'UiProgressIndicatorItem';
