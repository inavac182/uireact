import React, { useCallback, useState } from 'react';

import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiIcon } from '@uireact/icons';
import { UiCard } from '@uireact/card';
import { UiText } from '@uireact/text';

import { UiExpandoCardProps } from './types';
import styles from './ui-expando-card.scss';

const cardPadding: UiSpacingProps['padding'] = { block: 'two', inline: 'three' };
const contentPadding: UiSpacingProps['padding'] = { block: 'two' };

export const UiExpandoCard: React.FC<UiExpandoCardProps> = ({
  category = 'primary',
  className,
  children,
  expanded,
  expandLabel,
  headingInverseColoration,
  collapseLabel,
  onChange,
  testId,
}: UiExpandoCardProps) => {
  const [expandedInternal, setExpandedInternal] = useState<boolean>(expanded || false);

  const onClick = useCallback(() => {
    setExpandedInternal(!expandedInternal);

    onChange?.(!expandedInternal);
  }, [expandedInternal, onChange]);

  return (
    <UiCard className={className} testId={testId} category={category} padding={cardPadding}>
      <div className={styles.wrapperExpandoTrigger} onClick={onClick} data-testid="expando-trigger">
        <UiText className={`color-${headingInverseColoration ? 'inverse-' : ''}fonts-100`} data-testid="expando-heading-trigger" fontStyle='bold'>
          {expandedInternal ? collapseLabel : expandLabel}
        </UiText>
        <UiIcon icon={expandedInternal ? 'CaretUp' : 'CaretDown'} inverseColoration={headingInverseColoration} />
      </div>
      {expandedInternal && (
        <UiSpacing padding={contentPadding}>
          {children}
        </UiSpacing>
      )}
    </UiCard>
  );
};

UiExpandoCard.displayName = 'UiExpandoCard';
