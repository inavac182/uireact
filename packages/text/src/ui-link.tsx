import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getTextSize, getThemeStyling } from '@uireact/foundation';

import { UiLinkProps, privateLinkProps } from './types';
import { getCategory, getDynamicLinkMapper } from './theme';

const Anchor = styled.a<privateLinkProps>`
  ${(props) => `
    ${getThemeStyling(props.customTheme, props.selectedTheme, getDynamicLinkMapper(getCategory(props.category)))}
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
  category = 'PRIMARY',
  children,
  handleClick,
  href,
  ref,
  referrerpolicy,
  size,
  target,
}: UiLinkProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Anchor
      category={category}
      customTheme={theme.theme}
      href={href}
      onClick={handleClick}
      ref={ref}
      referrerpolicy={referrerpolicy}
      selectedTheme={theme.selectedTheme}
      size={size}
      target={target}
      role="link"
    >
      {children}
    </Anchor>
  );
};

UiLink.displayName = 'UiLink';
