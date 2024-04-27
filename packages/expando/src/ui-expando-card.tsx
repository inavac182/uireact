'use client';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiIcon } from '@uireact/icons';
import { UiCard } from '@uireact/card';

import { UiExpandoCardInternalProps, UiExpandoCardProps } from './types';

const WrapperExpandoTrigger = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
`;

const ExpandoHeading = styled.h3<UiExpandoCardInternalProps>`
  padding: 0;
  font-size: var(--headings-level3);

  ${(props) => `
    color: var(--${props.$headingInverseColoration ? 'inverse-' : ''}fonts-token_100);
  `}
`;

const cardPadding: UiSpacingProps['padding'] = { all: 'four' };

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
  }, [expandedInternal]);

  return (
    <UiCard className={className} testId={testId} padding={{}} category={category}>
      <UiSpacing padding={cardPadding}>
        <WrapperExpandoTrigger onClick={onClick} data-testid="expando-trigger">
          <ExpandoHeading data-testid="expando-heading-trigger" $headingInverseColoration={headingInverseColoration}>
            {expandedInternal ? collapseLabel : expandLabel}
          </ExpandoHeading>
          <UiIcon icon={expandedInternal ? 'CaretUp' : 'CaretDown'} inverseColoration={headingInverseColoration} />
        </WrapperExpandoTrigger>
        {expandedInternal && <>{children}</>}
      </UiSpacing>
    </UiCard>
  );
};

UiExpandoCard.displayName = 'UiExpandoCard';
