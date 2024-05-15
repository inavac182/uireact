'use client';
import React from 'react';

import { styled } from 'styled-components';

import { getColorCategory } from '@uireact/foundation';

import { UiBadgeProps, privateBadgeProps } from './types';

const BadgeDiv = styled.div<privateBadgeProps>`
  ${(props) => `
    background-color: var(--${getColorCategory(props.$category)}-token_10);
    color: var(--${getColorCategory(props.$category)}-token_200)!important;
    svg {
      fill: var(--${getColorCategory(props.$category)}-token_200)!important;
    }
    border-color: var(--${getColorCategory(props.$category)}-token_200);
    font-size: var(--texts-${props.size});

    span,p {
      font-size: var(--texts-${props.size});
      line-height: var(--texts-${props.size});
      height: var(--texts-${props.size});
    }

    border-radius: var(--texts-${props.size});
    padding: 0px 10px;
  `}

  font-weight: bold;
  border-width: 2px;
  border-style: solid;
  display: inline-block;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const UiBadge: React.FC<UiBadgeProps> = ({
  category = 'primary',
  className,
  children,
  testId,
  size = 'small',
}: UiBadgeProps) => (
  <BadgeDiv $category={category} className={className} size={size} data-testid={testId}>
    <Container>{children}</Container>
  </BadgeDiv>
);

UiBadge.displayName = 'UiBadge';
