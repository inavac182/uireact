import React from 'react';

import styled from 'styled-components';

import { ThemeContext, getColorCategory, getTextSizeFromSizeString, getThemeStyling } from '@uireact/foundation';

import { UiLinkProps, privateLinkProps } from './types';
import { getDynamicLinkMapper } from './theme';

const AnchorWrapper = styled.span<privateLinkProps>`
  > a {
    ${(props) => `
      ${getThemeStyling(
        props.$customTheme,
        props.$selectedTheme,
        getDynamicLinkMapper(getColorCategory(props.$category))
      )}
      font-size: ${getTextSizeFromSizeString(props.$customTheme, props.$size || 'regular')};
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
  size,
  testId,
  wrap,
}: UiLinkProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <AnchorWrapper
      $category={category}
      $customTheme={themeContext.theme}
      $fullWidth={fullWidth}
      $fontStyle={fontStyle}
      onClick={handleClick}
      className={className}
      $selectedTheme={themeContext.selectedTheme}
      $size={size}
      data-testid={testId}
      $wrap={wrap}
    >
      {children}
    </AnchorWrapper>
  );
};

UiLink.displayName = 'UiLink';
