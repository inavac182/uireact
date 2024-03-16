'use client';
import React, { useContext } from 'react';

import styled from 'styled-components';

import {
  ColorCategories,
  ColorTokens,
  getColorCategory,
  getThemeColor,
  ThemeColor,
  ThemeContext,
} from '@uireact/foundation';

import { privateButtonLinkProps, UiButtonLinkProps } from './types';

const ButtonWrapper = styled.button<privateButtonLinkProps>`
  font-weight: bold;
  border-style: solid;
  border-radius: 10px;

  ${(props) => `
    background-color: var(--${getColorCategory(props.$category)}-token_100);
    border-color: var(--${getColorCategory(props.$category)}-token_50);
    border-width: 1px;
    ${props.$fullWidth ? 'width: 100%;' : ''}
  `}

  &:hover {
    ${(props) => `
      background-color: var(--${getColorCategory(props.$category)}-token_150);
      border-color: var(--${getColorCategory(props.$category)}-token_100);
    `}
  }

  &:active {
    ${(props) => `
      background-color: var(--${getColorCategory(props.$category)}-token_200);
      border-color: var(--${getColorCategory(props.$category)}-token_150);
    `}
  }

  &:disabled {
    ${(props) => `
      background-color: var(--${getColorCategory(props.$category)}-token_50);
      border-color: var(--${getColorCategory(props.$category)}-token_10);
    `}
  }

  a {
    ${(props) => `
      font-size: var(--texts-${props.$size});
      line-height: var(--texts-${props.$size});

      ${
        props.$coloration === 'dark'
          ? `color: ${getThemeColor(props.$theme, ThemeColor.dark, ColorCategories.fonts, ColorTokens.token_100)};`
          : ''
      }
      ${
        props.$coloration === 'light'
          ? `color: ${getThemeColor(props.$theme, ThemeColor.light, ColorCategories.fonts, ColorTokens.token_100)};`
          : ''
      }
      ${!props.$coloration ? `color: var(--${props.$inverseTextColoration ? 'inverse-' : ''}fonts-token_100);` : ''}
      
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 10px;

      ${props.$fullWidth ? 'width: 100%;' : ''}
      ${props.$fontStyle === 'italic' ? `font-style: ${props.$fontStyle};` : ''}
      ${props.$fontStyle === 'bold' ? `font-weight: bold;` : ''}
      ${props.$fontStyle === 'light' ? `font-weight: 300;` : ''}
      ${props.$fontStyle === 'regular' ? `font-weight: normal;` : ''}
      ${props.$wrap ? `text-overflow: ellipsis;white-space: nowrap;overflow: hidden !important;` : ''}
    `}

    padding: 10px;
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }
`;

export const UiButtonLink: React.FC<UiButtonLinkProps> = ({
  category = 'tertiary',
  children,
  coloration,
  handleClick,
  className,
  fullWidth,
  fontStyle,
  size = 'regular',
  testId,
  wrap,
  inverseTextColoration,
}: UiButtonLinkProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ButtonWrapper
      $category={category}
      $coloration={coloration}
      $fullWidth={fullWidth}
      $fontStyle={fontStyle}
      onClick={handleClick}
      className={className}
      $size={size}
      data-testid={testId}
      $wrap={wrap}
      $inverseTextColoration={inverseTextColoration}
      $theme={theme}
    >
      {children}
    </ButtonWrapper>
  );
};

UiButtonLink.displayName = 'UiButtonLink';
