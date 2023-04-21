import React from 'react';

export type IDialogController = {
  openDialog: (dialogId: string) => void;
  closeDialog: (dialogId: string) => void;
  openedDialogs: string[];
};

const noOpDialogControl = () => {
  console.error('No dialog controller implemented');
};

export const UiDialogsControllerContext = React.createContext<IDialogController>({
  openDialog: noOpDialogControl,
  closeDialog: noOpDialogControl,
  openedDialogs: [],
});

UiDialogsControllerContext.displayName = 'UiDialogsControllerContext';
