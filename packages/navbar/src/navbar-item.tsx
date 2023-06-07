import React from 'react';

import { ColorTokens, ThemeContext, getColorCategory, getThemeColor } from '@uireact/foundation';

import styled from 'styled-components';

import { UiNavbarItemProps, privateNavbarItemProps } from './types';

const Div = styled.div<privateNavbarItemProps>`
  ${(props) => `
    ${
      props.active
        ? `background: ${getThemeColor(
            props.customTheme,
            props.selectedTheme,
            getColorCategory(props.category),
            ColorTokens.token_150,
            false
          )};`
        : ''
    }
  `}
`;

export const UiNavbarItem: React.FC<UiNavbarItemProps> = ({
  active,
  category = 'primary',
  children,
}: UiNavbarItemProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Div
      active={active}
      category={category}
      customTheme={themeContext.theme}
      selectedTheme={themeContext.selectedTheme}
    >
      {children}
    </Div>
  );
};

UiNavbarItem.displayName = 'UiNavbarItem';
