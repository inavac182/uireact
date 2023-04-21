import React from 'react';

import { ThemeContext } from '@uireact/foundation';
import { UiButton } from '@uireact/button';

import { DialogBackground, DialogContent, DialogWrapper } from './__private';

import { UiDialogProps } from './types';
import { useDialog } from '.';

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
        <UiButton onClick={closeCB}>Close</UiButton>
        {children}
      </DialogContent>
    </DialogWrapper>
  );
};

UiDialog.displayName = 'UiDialog';
