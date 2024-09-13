import React, { useCallback, useState } from 'react';

import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiIcon } from '@uireact/icons';
import { UiText } from '@uireact/text';

import { UiExpandoLinkProps } from './types';
import styles from './ui-expando-text.scss';

const contentPadding: UiSpacingProps['padding'] = { block: 'two' };

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
          <UiText fontStyle='bold'>{expandedInternal ? collapseLabel : expandLabel}</UiText>
        </div>
        <UiIcon
          icon={expandedInternal ? 'CaretUp' : 'CaretDown'}
          category={category}
          inverseColoration={inverseColoration}
          size={size}
        />
      </div>
      {expandedInternal && (
        <UiSpacing padding={contentPadding}>
          {children}
        </UiSpacing>
      )}
    </div>
  );
};

UiExpandoText.displayName = 'UiExpandoText';
