import React, { useCallback, useContext } from 'react';

import styled from 'styled-components';
import { useColorMode } from 'theme-ui';

import { UiButton } from '@uireact/button';
import { UiIcon } from '@uireact/icons';
import { UiLink } from '@uireact/text';
import { UiFlexGrid } from '@uireact/flex';

import { MenuContext } from '../../wrapper';

const MenuIcon = styled.div`
  display: none;

  @media only screen and (max-width: 920px) {
    display: inline-block;
  }
`;

export const Actions = (): React.ReactElement => {
  const [colorMode, setColorMode] = useColorMode();
  const menuContext = useContext(MenuContext);

  const themeSwitcherCB = React.useCallback(() => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }, [colorMode, setColorMode]);

  const openMenuCB = useCallback(() => {
    if (menuContext) {
      menuContext.setMenuVisible(!menuContext.isMenuVisible);
    }
  }, [menuContext]);

  return (
    <>
      <UiFlexGrid alignItems="center" gap="four">
        <UiLink>
          <a href="https://github.com/inavac182/uireact" target="_blank" rel="noreferrer">
            <UiIcon icon="BrandsGithub" size="large" />
          </a>
        </UiLink>
        <UiButton onClick={themeSwitcherCB} rounded styling="icon" category="tertiary">
          <UiIcon icon="CircleHalfStroke" size="large" />
        </UiButton>
        <MenuIcon>
          <UiButton styling="icon" category="tertiary" onClick={openMenuCB}>
            <UiIcon icon="MenuBurger" size="large" />
          </UiButton>
        </MenuIcon>
      </UiFlexGrid>
    </>
  );
};
