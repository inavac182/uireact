import React from 'react';

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

export const UiLink: React.FC<UiLinkProps> = ({
  theme = 'secondary',
  children,
  handleClick,
  href,
  ref,
  referrerpolicy,
  size,
  target,
}: UiLinkProps) => {
  const themeContext = React.useContext(ThemeContext);

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
    >
      {children}
    </Anchor>
  );
};

UiLink.displayName = 'UiLink';
