import React from 'react';

import styled from 'styled-components';

import { ColorCategories, ColorTokens, ThemeContext, getThemeColor, getThemeStyling } from '@uireact/foundation';

import { UiMenuProps, privateMenuProps } from './types';
import { MenuMapper } from './theme';

const MenuDiv = styled.div<privateMenuProps>`
  ${(props) => `
    ${getThemeStyling(props.customTheme, props.selectedTheme, MenuMapper)}
    box-shadow: 0px 0px 5px ${getThemeColor(
      props.customTheme,
      props.selectedTheme,
      ColorCategories.backgrounds,
      ColorTokens.token_200
    )};
  `}

  position: absolute;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  width: max-content;
  z-index: 10;
`;

const WrapperDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export const UiMenu: React.FC<UiMenuProps> = ({ children, closeMenuCB, visible }: UiMenuProps) => {
  const theme = React.useContext(ThemeContext);

  const escCB = React.useCallback(
    (event) => {
      if (event.key === 'Escape') {
        closeMenuCB();
      }
    },
    [closeMenuCB]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', escCB, false);

    return () => {
      document.removeEventListener('keydown', escCB, false);
    };
  }, [escCB]);

  if (!visible) {
    return null;
  }

  return (
    <>
      <WrapperDiv onClick={closeMenuCB}></WrapperDiv>
      <MenuDiv
        customTheme={theme.theme}
        selectedTheme={theme.selectedTheme}
        visible={visible}
        role="menu"
        closeMenuCB={closeMenuCB}
      >
        {children}
      </MenuDiv>
    </>
  );
};

UiMenu.displayName = 'UiMenu';
