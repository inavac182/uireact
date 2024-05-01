'use client';
import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoints, UiViewport, useViewport } from '@uireact/foundation';
import { UiDialog, UiDialogType, useDialog } from '@uireact/dialog';
import { UiReactFadeUp } from '@uireact/framer-animations';

import { UiMenuProps, privateMenuProps } from './types';

const MenuDiv = styled(motion.div)<privateMenuProps>`
  background-color: var(--primary-token_100);
  border-color: var(--primary-token_150);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  ${(props) => `  
    ${
      // istanbul ignore next
      props.$isOffset ? `right: 10px;` : ''
    }
  `}

  position: absolute;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  width: max-content;
  z-index: 10;
`;

const WrapperDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export const UiMenu: React.FC<UiMenuProps> = ({
  closeLabel,
  children,
  closeMenuCB,
  fullscreenOnSmall,
  menuId,
  motion = UiReactFadeUp,
  visible,
  testId,
}: UiMenuProps) => {
  const dialogId = menuId || 'menu-component';
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [isOffset, setIsOffset] = React.useState(false);
  const { isSmall } = useViewport();
  const { isOpen, actions } = useDialog(dialogId);

  const escCB = React.useCallback(
    (event: KeyboardEvent) => {
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

  React.useEffect(() => {
    // istanbul ignore this
    if (menuRef && menuRef.current && visible && typeof window !== undefined) {
      const position = menuRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      // istanbul ignore next
      if (position.right > screenWidth) {
        setIsOffset(true);
      }
    }
  }, [menuRef, visible]);

  if (!visible) {
    return null;
  }

  if (fullscreenOnSmall) {
    return (
      <div>
        <UiViewport criteria={Breakpoints.SMALL}>
          <UiDialog
            closeLabel={closeLabel}
            dialogId={dialogId}
            handleDialogClose={closeMenuCB}
            type={UiDialogType.FULLSCREEN}
          >
            {children}
          </UiDialog>
        </UiViewport>
        <UiViewport criteria={'m|l|xl'}>
          <WrapperDiv onClick={closeMenuCB}></WrapperDiv>
          <MenuDiv $visible={visible} role="menu" ref={menuRef} $isOffset={isOffset} data-testid={testId} {...motion}>
            {children}
          </MenuDiv>
        </UiViewport>
      </div>
    );
  }

  return (
    <div>
      <WrapperDiv onClick={closeMenuCB}></WrapperDiv>
      <MenuDiv $visible={visible} role="menu" ref={menuRef} $isOffset={isOffset} data-testid={testId} {...motion}>
        {children}
      </MenuDiv>
    </div>
  );
};

UiMenu.displayName = 'UiMenu';
