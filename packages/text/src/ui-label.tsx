'use client';
import React from 'react';

import styled from 'styled-components';

import { getColorCategory } from '@uireact/foundation';

import { UiLabelProps, privateLabelProps } from './types';

const Label = styled.label<privateLabelProps>`
  ${(props) => `
    color: var(--${getColorCategory(props.$category)}-token_100);
    ${`font-size: var(--texts-${props.$size});`}
    ${`line-height: var(--texts-${props.$size});`}
  `}

  padding: 0;
  margin: 0;
`;

export const UiLabel: React.FC<UiLabelProps> = ({ children, htmlFor, size = 'small', category }: UiLabelProps) => (
  <Label $size={size} $category={category} htmlFor={htmlFor}>
    {children}
  </Label>
);

UiLabel.displayName = 'UiLabel';
