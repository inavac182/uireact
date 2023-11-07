'use client';
import React from 'react';

import styled from 'styled-components';

import { getColorCategory } from '@uireact/foundation';

import { UiLinkProps, privateLinkProps } from './types';

const AnchorWrapper = styled.span<privateLinkProps>`
  > a {
    ${(props) => `
      color: var(--${getColorCategory(props.$category)}-token_100);
      font-size: var(--texts-${props.$size});
      line-height: var(--texts-${props.$size});

      &:hover {
        color: var(--${getColorCategory(props.$category)}-token_150);
      }

      &:active {
        color: var(--${getColorCategory(props.$category)}-token_200);
      }

      ${props.$fullWidth ? 'width: 100%; display: inline-block;' : ''}
      ${props.$fontStyle === 'italic' ? `font-style: ${props.$fontStyle};` : ''}
      ${props.$fontStyle === 'bold' ? `font-weight: bold;` : ''}
      ${props.$fontStyle === 'light' ? `font-weight: 300;` : ''}
      ${props.$fontStyle === 'regular' ? `font-weight: normal;` : ''}
      ${props.$wrap ? `text-overflow: ellipsis;white-space: nowrap;overflow: hidden !important;` : ''}
    `}

    cursor: pointer;
    outline: none;
    text-decoration: none;
  }
`;

export const UiLink: React.FC<UiLinkProps> = ({
  category = 'tertiary',
  children,
  handleClick,
  className,
  fullWidth,
  fontStyle,
  size = 'regular',
  testId,
  wrap,
}: UiLinkProps) => (
  <AnchorWrapper
    $category={category}
    $fullWidth={fullWidth}
    $fontStyle={fontStyle}
    onClick={handleClick}
    className={className}
    $size={size}
    data-testid={testId}
    $wrap={wrap}
  >
    {children}
  </AnchorWrapper>
);

UiLink.displayName = 'UiLink';
