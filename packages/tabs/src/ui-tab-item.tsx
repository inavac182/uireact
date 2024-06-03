import React from 'react';

import { UiTabItemProps } from './types';
import styles from './ui-tabs.scss';

export function UiTabItem<T>({
  className = '',
  children,
  handleClick,
  identifier,
  selected
}: UiTabItemProps<T>): JSX.Element {
  const handleTabClick = React.useCallback(() => {
    handleClick(identifier);
  }, [handleClick, identifier]);

  return (
    <div className={`${className} ${styles.item} ${selected ? styles.selected : styles.nonSelected}`} onClick={handleTabClick}>
      {children}
    </div>
  );
}

UiTabItem.displayName = 'UiTabItem';
