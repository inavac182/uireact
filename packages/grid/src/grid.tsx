import React from 'react';

interface UiGridProps {
  children?: React.ReactNode;
}

export const UiGrid: React.FC<UiGridProps> = (props: UiGridProps) => <div>{props.children}</div>;

UiGrid.displayName = 'UiGrid';
