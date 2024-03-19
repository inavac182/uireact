import React from 'react';

import { IConfirmDialogController } from '../types';

// istanbul ignore next
const noOp = () => {
  console.error('No confirm dialog fn implemented');
};

export const UiConfirmDialogContext = React.createContext<IConfirmDialogController>({
  showConfirmDialog: noOp,
  hideConfirmDialog: noOp,
  visible: false,
  confirmDialog: null,
});

UiConfirmDialogContext.displayName = 'UiConfirmDialogContext';
