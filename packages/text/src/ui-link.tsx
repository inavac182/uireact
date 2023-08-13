import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { TextSize, ThemeContext, getColorCategory, getTextSize, getThemeStyling } from '@uireact/foundation';

import { UiLinkProps, privateLinkProps } from './types';
import { getDynamicLinkMapper } from './theme';

const Anchor = styled.a<privateLinkProps>`
  ${(props) => `
    ${getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      getDynamicLinkMapper(getColorCategory(props.$category))
    )}
    font-size: ${getTextSize(props.$customTheme, props.$size || TextSize.regular)};
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

  :hover {
    text-decoration: underline;
  }
`;

const StyledLinkWrapper = styled.span<privateLinkProps>`
  a {
    ${(props) => `
      ${getThemeStyling(
        props.$customTheme,
        props.$selectedTheme,
        getDynamicLinkMapper(getColorCategory(props.$category))
      )}
      font-size: ${getTextSize(props.$customTheme, props.$size || TextSize.regular)};
      ${props.$fontStyle === 'italic' ? `font-style: ${props.$fontStyle};` : ''}
      ${props.$fontStyle === 'bold' ? `font-weight: bold;` : ''}
    `}

    cursor: pointer;
    outline: none;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const UiLink: React.FC<UiLinkProps> = ({
  theme = 'secondary',
  children,
  handleClick,
  className,
  href,
  fullWidth,
  fontStyle,
  ref,
  referrerpolicy,
  size,
  target,
  useReactLink,
  testId,
  wrap,
}: UiLinkProps) => {
  const themeContext = React.useContext(ThemeContext);

  if (useReactLink && href) {
    return (
      <StyledLinkWrapper
        className={className}
        $category={theme}
        $customTheme={themeContext.theme}
        $fullWidth={fullWidth}
        $fontStyle={fontStyle}
        onClick={handleClick}
        $selectedTheme={themeContext.selectedTheme}
        $size={size}
        $wrap={wrap}
      >
        <Link
          to={href}
          data-testid={testId}
          role="link"
          target={target}
          ref={ref}
          referrerPolicy={referrerpolicy || 'no-referrer'}
        >
          {children}
        </Link>
      </StyledLinkWrapper>
    );
  }

  return (
    <Anchor
      $category={theme}
      $customTheme={themeContext.theme}
      href={href}
      $fullWidth={fullWidth}
      $fontStyle={fontStyle}
      onClick={handleClick}
      className={className}
      ref={ref}
      referrerpolicy={referrerpolicy}
      $selectedTheme={themeContext.selectedTheme}
      $size={size}
      target={target}
      role="link"
      data-testid={testId}
      $wrap={wrap}
    >
      {children}
    </Anchor>
  );
};

UiLink.displayName = 'UiLink';
