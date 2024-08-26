import React, { useCallback, useState } from 'react';

import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiIcon } from '@uireact/icons';
import { UiCard } from '@uireact/card';

import { UiExpandoCardProps } from './types';
import styles from './ui-expando-card.scss';

const cardPadding: UiSpacingProps['padding'] = { all: 'two' };

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
    <UiCard className={className} testId={testId} padding={{}} category={category}>
      <UiSpacing padding={cardPadding}>
        <div className={styles.wrapperExpandoTrigger} onClick={onClick} data-testid="expando-trigger">
          <h3 className={`${styles.expandoHeading} color-${headingInverseColoration ? 'inverse-' : ''}fonts-100`} data-testid="expando-heading-trigger">
            {expandedInternal ? collapseLabel : expandLabel}
          </h3>
          <UiIcon icon={expandedInternal ? 'CaretUp' : 'CaretDown'} inverseColoration={headingInverseColoration} />
        </div>
        {expandedInternal && <>{children}</>}
      </UiSpacing>
    </UiCard>
  );
};

UiExpandoCard.displayName = 'UiExpandoCard';
