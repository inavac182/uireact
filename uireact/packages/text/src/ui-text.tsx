'use client';
import React, { useContext } from 'react';

import styled, { css } from 'styled-components';

import {
  ColorCategories,
  ColorTokens,
  ThemeColor,
  ThemeContext,
  getColorCategory,
  getThemeColor,
} from '@uireact/foundation';

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
    ${
      !props.$coloration
        ? `color: var(--${props.$inverseColoration ? 'inverse-' : ''}${getColorCategory(props.$category)}-token_100);`
        : ''
    }
    
    padding: 0;
    margin: 0;

    ${
      props.$wrap
        ? `
          overflow:hidden; 
          white-space:nowrap; 
          text-overflow: ellipsis;`
        : ``
    }
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
  coloration,
  inline,
  fontStyle,
  size = 'regular',
  category,
  inverseColoration,
  wrap,
}: UiTextProps) => {
  const { theme } = useContext(ThemeContext);

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
        $coloration={coloration}
        $wrap={wrap}
        $theme={theme}
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
      $coloration={coloration}
      $wrap={wrap}
      $theme={theme}
    >
      {children}
    </Text>
  );
};

UiText.displayName = 'UiText';
