'use client';
import React from 'react';

import styled, { css } from 'styled-components';

import { getColorCategory } from '@uireact/foundation';

import { UiTextProps, privateTextProps } from './types';

const SharedStyle = css<privateTextProps>`
  ${(props) => `
    ${props.$centered ? `text-align: center;` : ``}
    ${props.$align ? `text-align: ${props.$align};` : ``}
    ${`font-size: var(--texts-${props.$size});`}
    ${`line-height: var(--texts-${props.$size});`}
    ${props.$fontStyle === 'italic' ? 'font-style: italic;' : ''}
    ${props.$fontStyle === 'bold' ? `font-weight: bold;` : ''}
    ${props.$fontStyle === 'light' ? `font-weight: 300;` : ''}
    ${props.$fontStyle === 'regular' ? `font-weight: normal;` : ''}

    color: var(--${props.$inverseColoration ? 'inverse-' : ''}${getColorCategory(props.$category)}-token_100);
    padding: 0;
    margin: 0;
  `}
`;

const Text = styled.p<privateTextProps>`
  ${SharedStyle}
`;

const Span = styled.span<privateTextProps>`
  ${SharedStyle}
`;

export const UiText: React.FC<UiTextProps> = ({
  align,
  children,
  className,
  centered,
  inline,
  fontStyle,
  size = 'regular',
  category,
  inverseColoration,
}: UiTextProps) => {
  if (inline) {
    return (
      <Span
        $category={category}
        className={className}
        $fontStyle={fontStyle}
        $size={size}
        $align={align}
        $centered={centered}
        $inline={inline}
        $inverseColoration={inverseColoration}
      >
        {children}
      </Span>
    );
  }

  return (
    <Text
      $category={category}
      className={className}
      $fontStyle={fontStyle}
      $size={size}
      $align={align}
      $centered={centered}
      $inline={inline}
      $inverseColoration={inverseColoration}
    >
      {children}
    </Text>
  );
};

UiText.displayName = 'UiText';
