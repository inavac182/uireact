import React, { useCallback, useState } from 'react';

import { UiIcon } from '@uireact/icons';

import { UiExpandoLinkProps } from './types';
import styles from './ui-expando-text.scss';

export const UiExpandoText: React.FC<UiExpandoLinkProps> = ({
  category = 'fonts',
  className = '',
  children,
  expanded,
  inverseColoration = false,
  expandLabel,
  collapseLabel,
  onChange,
  size = 'regular',
  testId,
}: UiExpandoLinkProps) => {
  const [expandedInternal, setExpandedInternal] = useState<boolean>(expanded || false);
  let classes = `${styles.wrapperExpandoLink} size-${size} color-${inverseColoration ? 'inverse-' : ''}${category}-100 hover-color-${inverseColoration ? 'inverse-' : ''}${category}-200`;
  const onClick = useCallback(() => {
    setExpandedInternal(!expandedInternal);

    onChange?.(!expandedInternal);
  }, [expandedInternal, onChange]);

  return (
    <div className={className} data-testid={testId}>
      <div
        className={classes}
        onClick={onClick}
        data-testid="expando-trigger"
      >
        <div data-testid="expando-text-trigger">
          <span>{expandedInternal ? collapseLabel : expandLabel}</span>
        </div>
        <UiIcon
          icon={expandedInternal ? 'CaretUp' : 'CaretDown'}
          category={category}
          inverseColoration={inverseColoration}
          size={size}
        />
      </div>
      {expandedInternal && <>{children}</>}
    </div>
  );
};

UiExpandoText.displayName = 'UiExpandoText';
