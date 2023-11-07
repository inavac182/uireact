'use client';
import React from 'react';

import styled from 'styled-components';

import { getColorCategory } from '@uireact/foundation';

import { UiIconProps, privateIconProps } from './types';
import { IconComponent } from './public';

const Span = styled.span<privateIconProps>`
  ${(props: privateIconProps) => `
    fill: var(--${props.$inverseColoration ? 'inverse-' : ''}${getColorCategory(props.$category)}-token_100);

    ${`font-size: var(--texts-${props.$size});`}
    ${`line-height: var(--texts-${props.$size});`}
    ${`height: var(--texts-${props.$size});`}
    ${`width: var(--texts-${props.$size});`}
  `}

  vertical-align: sub;
  display: inline-block;
  justify-content: center;
`;

export const UiIcon: React.FC<UiIconProps> = ({
  category,
  icon,
  size = 'regular',
  testId,
  inverseColoration,
}: UiIconProps) => (
  <Span $category={category} $size={size} $inverseColoration={inverseColoration} data-testid={testId}>
    <IconComponent icon={icon} />
  </Span>
);

UiIcon.displayName = 'UiIcon';
