import React from 'react';

import styled from 'styled-components';

import { ThemeContext } from '@uireact/foundation';

import { DialogBackground, DialogContent, DialogWrapper } from './__private';

import { UiDialogProps } from './types';
import { useDialog } from '.';

const Button = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 5px;
`;

export const UiDialog: React.FC<UiDialogProps> = ({ children, dialogId }: UiDialogProps) => {
  const { isOpen, actions } = useDialog(dialogId);
  const theme = React.useContext(ThemeContext);

  const closeCB = React.useCallback(() => {
    actions.closeDialog();
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

  return (
    <DialogWrapper>
      <DialogBackground onClick={closeCB} />
      <DialogContent customTheme={theme.theme} selectedTheme={theme.selectedTheme}>
        <Button onClick={closeCB}>❌</Button>
        {children}
      </DialogContent>
    </DialogWrapper>
  );
};

UiDialog.displayName = 'UiDialog';
