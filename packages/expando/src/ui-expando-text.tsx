'use client';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { getColorCategory } from '@uireact/foundation';
import { UiIcon } from '@uireact/icons';

import { UiExpandoLinkInternalProps, UiExpandoLinkProps } from 'types';

const WrapperExpandoLink = styled.div<UiExpandoLinkInternalProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;

  ${(props) => `
    font-size: var(--texts-${props.$size});
    &:hover {
      div, span {
        color: var(--${props.$inverseColoration ? 'inverse-' : ''}${getColorCategory(props.$category)}-token_200);
      }
    }
  `}
`;

const EpandoLink = styled.div<UiExpandoLinkInternalProps>`
  ${(props) => `
    color: var(--${props.$inverseColoration ? 'inverse-' : ''}${getColorCategory(props.$category)}-token_100);
  `}
`;

export const UiExpandoText: React.FC<UiExpandoLinkProps> = ({
  category = 'tertiary',
  className,
  children,
  expanded,
  inverseColoration = false,
  label,
  onChange,
  size = 'regular',
  testId,
}: UiExpandoLinkProps) => {
  const [expandedInternal, setExpandedInternal] = useState<boolean>(expanded || false);

  const onClick = useCallback(() => {
    setExpandedInternal(!expandedInternal);

    onChange?.(!expandedInternal);
  }, [expandedInternal]);

  return (
    <div className={className} data-testid={testId}>
      <WrapperExpandoLink
        onClick={onClick}
        $category={category}
        $inverseColoration={inverseColoration}
        $size={size}
        data-testid="expando-trigger"
      >
        <EpandoLink
          $category={category}
          $inverseColoration={inverseColoration}
          $size={size}
          data-testid="expando-text-trigger"
        >
          <span>{label}</span>
        </EpandoLink>
        <UiIcon
          icon={expandedInternal ? 'CaretUp' : 'CaretDown'}
          category={category}
          inverseColoration={inverseColoration}
          size={size}
        />
      </WrapperExpandoLink>
      {expandedInternal && <>{children}</>}
    </div>
  );
};

UiExpandoText.displayName = 'UiExpandoText';
