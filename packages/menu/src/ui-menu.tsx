import React from 'react';

import styled from 'styled-components';

import {
  Breakpoints,
  ColorCategories,
  ColorTokens,
  ThemeContext,
  UiViewport,
  getThemeColor,
  getThemeStyling,
  useViewport,
} from '@uireact/foundation';
import { UiDialog, UiDialogType, useDialog } from '@uireact/dialog';

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

export const UiMenu: React.FC<UiMenuProps> = ({
  children,
  closeMenuCB,
  fullscreenOnSmall,
  menuId,
  visible,
}: UiMenuProps) => {
  const dialogId = menuId || 'menu-component';
  const { isSmall } = useViewport();
  const { isOpen, actions } = useDialog(dialogId);
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

  React.useEffect(() => {
    if (visible && isSmall && !isOpen) {
      actions.openDialog();
    }

    if (visible && isOpen && !isSmall) {
      actions.closeDialog();
    }
  }, [visible, isOpen, isSmall]);

  if (!visible) {
    return null;
  }

  if (fullscreenOnSmall) {
    return (
      <>
        <UiViewport criteria={Breakpoints.SMALL}>
          <UiDialog dialogId={dialogId} handleDialogClose={closeMenuCB} type={UiDialogType.FULLSCREEN}>
            {children}
          </UiDialog>
        </UiViewport>
        <UiViewport criteria={'m|l|xl'}>
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
        </UiViewport>
      </>
    );
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
