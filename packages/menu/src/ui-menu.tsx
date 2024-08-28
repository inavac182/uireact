'use client';
import React, { useCallback, useEffect } from 'react';

import { motion as MotionParent } from 'framer-motion';

import { Breakpoints, UiViewport, useViewport } from '@uireact/foundation';
import { UiDialog, UiDialogType, useDialog } from '@uireact/dialog';
import { UiReactFadeUp } from '@uireact/framer-animations';

import { UiMenuProps } from './types';
import styles from './ui-menu.scss';
import { useClickOutside } from './hooks';

export const UiMenu: React.FC<UiMenuProps> = ({
  className = '',
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
  let menuClasses = `${styles.menu} ${className}`;

  //istanbul ignore next
  if (isOffset) {
    menuClasses = `${menuClasses} ${styles.offset}`;
  }

  const escCB = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenuCB();
    }
  }, [closeMenuCB]);

  useEffect(() => {
    if (visible && isSmall && !isOpen) {
      actions.openDialog();
    }

    if (visible && isOpen && !isSmall) {
      actions.closeDialog();
    }
  }, [visible, isOpen, isSmall, actions]);

  useEffect(() => {
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

  useEffect(() => {
    if (visible) {
      document.addEventListener('keydown', escCB, false);

      return () => {
        document.removeEventListener('keydown', escCB, false);
      };
    }
  }, [visible, menuRef, escCB]);

  useClickOutside(menuRef, closeMenuCB, visible);

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
          <MotionParent.div className={menuClasses} role="menu" ref={menuRef} data-testid={testId} {...motion}>
            {children}
          </MotionParent.div>
        </UiViewport>
      </div>
    );
  }

  return (
    <div>
      <MotionParent.div role="menu" className={menuClasses} ref={menuRef} data-testid={testId} {...motion}>
        {children}
      </MotionParent.div>
    </div>
  );
};

UiMenu.displayName = 'UiMenu';
