import React, { useContext } from 'react';

import { useMenus } from 'docz';
import styled, { keyframes } from 'styled-components';

import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiViewRow } from '@uireact/view';

import { SidebarGroup } from './sidebar-group';
import { MenuContext } from '../../wrapper';
import { Logo } from '../Header/logo';

const SidebarSpacing: UiSpacingProps['padding'] = { left: 'six', top: 'six', bottom: 'six' };

const animation = keyframes`
0% {
  transform: translate(-300px);
}

100% {
  transform: translate(0px);
}
`;

const SidebarDiv = styled.div<{ $isTriggered?: boolean }>`
  position: sticky;
  top: 0;
  border-right: 2px solid #3e3e3e;

  @media only screen and (max-width: 920px) {
    ${(props) => `
      ${props.$isTriggered ? `display: block;` : `display: none;`}`}

    position: fixed;
    z-index: 200;
    animation: ${animation} 0.3s linear;
    height: 100%;
    width: 300px;

    .menu-container {
      overflow-x: hidden;
      overflow-y: auto;
      z-index: 15;
      position: relative;
      height: 100%;
    }
  }
`;

const bgAnimation = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 0.5;
}
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #3d3d3d;
  z-index: 9;
  opacity: 0.5;
  animation: ${bgAnimation} 0.5s ease-out;

  @media only screen and (min-width: 920px) {
    display: none;
  }
`;

const SidebarGridContainer = styled.div`
  height: 100%;
  position: absolute;
  width: -webkit-fill-available;
  width: -moz-available;

  .menu-flex-grid-container {
    height: 100%;
  }
`;

const sideBarLogoSpacing: UiSpacingProps['margin'] = { top: 'seven', bottom: 'six' };

export const Sidebar = React.forwardRef((): React.ReactElement => {
  const [query] = React.useState('');
  const menus = useMenus({ query });
  const menuContext = useContext(MenuContext);

  const closeMenuCB = React.useCallback(() => {
    if (menuContext) {
      menuContext.setMenuVisible(false);
    }
  }, [menuContext]);

  return (
    <SidebarDiv $isTriggered={menuContext?.isMenuVisible}>
      <Div onClick={closeMenuCB} />
      <UiViewRow className="menu-container">
        <SidebarGridContainer>
          <UiFlexGrid direction="column" justifyContent="space-between" className="menu-flex-grid-container">
            <UiFlexGridItem>
              <UiSpacing padding={SidebarSpacing}>
                <UiFlexGrid direction="column">
                  {menus?.map((menuItem, index) => (
                    <SidebarGroup key={`navbar-group-${index}`} menuItem={menuItem} />
                  ))}
                </UiFlexGrid>
              </UiSpacing>
            </UiFlexGridItem>
            <UiFlexGridItem align="center">
              <UiSpacing margin={sideBarLogoSpacing}>
                <Logo />
              </UiSpacing>
            </UiFlexGridItem>
          </UiFlexGrid>
        </SidebarGridContainer>
      </UiViewRow>
    </SidebarDiv>
  );
});

Sidebar.displayName = 'Sidebar';
