import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { TextSize, ThemeContext, getColorCategory, getTextSize, getThemeStyling } from '@uireact/foundation';

import { UiLinkProps, privateLinkProps } from './types';
import { getDynamicLinkMapper } from './theme';

const Anchor = styled.a<privateLinkProps>`
  ${(props) => `
    ${getThemeStyling(props.customTheme, props.selectedTheme, getDynamicLinkMapper(getColorCategory(props.category)))}
    font-size: ${getTextSize(props.customTheme, props.size || TextSize.regular)};
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
      ${getThemeStyling(props.customTheme, props.selectedTheme, getDynamicLinkMapper(getColorCategory(props.category)))}
      font-size: ${getTextSize(props.customTheme, props.size || TextSize.regular)};
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
  href,
  ref,
  referrerpolicy,
  size,
  target,
  useReactLink,
  testId,
}: UiLinkProps) => {
  const themeContext = React.useContext(ThemeContext);

  if (useReactLink && href) {
    return (
      <StyledLinkWrapper
        category={theme}
        customTheme={themeContext.theme}
        onClick={handleClick}
        selectedTheme={themeContext.selectedTheme}
        size={size}
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
      category={theme}
      customTheme={themeContext.theme}
      href={href}
      onClick={handleClick}
      ref={ref}
      referrerpolicy={referrerpolicy}
      selectedTheme={themeContext.selectedTheme}
      size={size}
      target={target}
      role="link"
      data-testid={testId}
    >
      {children}
    </Anchor>
  );
};

UiLink.displayName = 'UiLink';
