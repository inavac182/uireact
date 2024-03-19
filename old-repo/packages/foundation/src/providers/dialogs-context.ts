import React from 'react';

import { IDialogController } from '../types';

const noOpDialogControl = () => {
  console.error('No dialog controller implemented');
};

export const UiDialogsControllerContext = React.createContext<IDialogController>({
  openDialog: noOpDialogControl,
  closeDialog: noOpDialogControl,
  openedDialogs: [],
});

UiDialogsControllerContext.displayName = 'UiDialogsControllerContext';
