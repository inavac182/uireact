import React from 'react';

import styled from 'styled-components';

import { ThemeContext } from '@uireact/foundation';

import { UiIcon } from '@uireact/icons';

import { DialogBackground, DialogContent, DialogToolbar, DialogWrapper } from './__private';

import { UiDialogProps, UiDialogType } from './types';
import { useDialog } from '.';

const Button = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  padding-left: 10px;
`;

export const UiDialog: React.FC<UiDialogProps> = ({
  closeLabel,
  children,
  dialogId,
  handleDialogClose,
  type = UiDialogType.CENTERED,
  hideCloseIcon,
  title,
}: UiDialogProps) => {
  const { isOpen, actions } = useDialog(dialogId);
  const theme = React.useContext(ThemeContext);

  const closeCB = React.useCallback(() => {
    actions.closeDialog();
    handleDialogClose?.();
  }, [actions]);

  const escCB = React.useCallback(
    (event) => {
      if (event.key === 'Escape') {
        closeCB();
      }
    },
    [closeCB]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', escCB, false);

    return () => {
      document.removeEventListener('keydown', escCB, false);
    };
  }, [escCB]);

  if (!isOpen) {
    return null;
  }

  if (type !== UiDialogType.CENTERED) {
    return (
      <DialogContent customTheme={theme.theme} selectedTheme={theme.selectedTheme} type={type}>
        {title && <DialogToolbar title={title} hideCloseIcon={hideCloseIcon} closeCB={closeCB} />}
        {!title && !hideCloseIcon && (
          <Button onClick={closeCB} aria-label={closeLabel}>
            <UiIcon icon="Cross" />
          </Button>
        )}
        {children}
      </DialogContent>
    );
  }

  return (
    <DialogWrapper>
      <>
        <DialogBackground onClick={closeCB} />
        <DialogContent customTheme={theme.theme} selectedTheme={theme.selectedTheme} type={type}>
          {title && (
            <DialogToolbar title={title} hideCloseIcon={hideCloseIcon} closeCB={closeCB} closeLabel={closeLabel} />
          )}
          {!title && !hideCloseIcon && (
            <Button onClick={closeCB} aria-label={closeLabel}>
              <UiIcon icon="Cross" />
            </Button>
          )}
          {children}
        </DialogContent>
      </>
    </DialogWrapper>
  );
};

UiDialog.displayName = 'UiDialog';
