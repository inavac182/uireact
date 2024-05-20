'use client';
import React, { useContext } from 'react';

import { styled } from 'styled-components';

import { ColorTokens, ThemeColor, ThemeContext, getColorCategory, getSpacingStyle, getThemeColor } from '@uireact/foundation';

import { UiLinkProps, privateLinkProps } from './types';

const AnchorWrapper = styled.span<privateLinkProps>`
  > a {
    ${(props) => `
      ${
        props.$coloration === 'dark'
          ? `color: ${getThemeColor(
              props.$theme,
              ThemeColor.dark,
              getColorCategory(props.$category),
              ColorTokens.token_100
            )};`
          : ''
      }
      ${
        props.$coloration === 'light'
          ? `color: ${getThemeColor(
              props.$theme,
              ThemeColor.light,
              getColorCategory(props.$category),
              ColorTokens.token_100
            )};`
          : ''
      }
      ${!props.$coloration ? `color: var(--${getColorCategory(props.$category)}-token_100);` : ''}
      
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
      ${props.$padding ? `padding: ${getSpacingStyle(props.$padding)};` : ''}
      ${props.$margin ? `margin: ${getSpacingStyle(props.$margin)};` : ''}
    `}

    cursor: pointer;
    outline: none;
    text-decoration: none;
  }
`;

export const UiLink: React.FC<UiLinkProps> = ({
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
  margin,
  padding
}: UiLinkProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <AnchorWrapper
      $category={category}
      $coloration={coloration}
      $fullWidth={fullWidth}
      $fontStyle={fontStyle}
      onClick={handleClick}
      className={className}
      $size={size}
      data-testid={testId}
      $wrap={wrap}
      $theme={theme}
      $margin={margin}
      $padding={padding}
    >
      {children}
    </AnchorWrapper>
  );
};

UiLink.displayName = 'UiLink';
