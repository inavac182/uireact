import React from 'react';

import { ThemeContext } from '@uireact/foundation';
import { UiButton } from '@uireact/button';

import { DialogBackground, DialogContent, DialogWrapper } from './__private';

import { UiDialogProps } from './types';
import { useDialog } from '.';

export const UiDialog: React.FC<UiDialogProps> = ({ children, dialogId }: UiDialogProps) => {
  const { isOpen, actions } = useDialog(dialogId);
  const theme = React.useContext(ThemeContext);

  const closeDB = React.useCallback(() => {
    actions.closeDialog();
  }, [actions]);

  if (!isOpen) {
    return null;
  }

  return (
    <DialogWrapper>
      <DialogBackground />
      <DialogContent customTheme={theme.theme} selectedTheme={theme.selectedTheme}>
        <UiButton onClick={closeDB}>Close</UiButton>
        {children}
      </DialogContent>
    </DialogWrapper>
  );
};

UiDialog.displayName = 'UiDialog';
