import React from 'react';
import { UiConfirmDialogData, UiConfirmDialogContext, UiConfirmDialogOptions } from '@uireact/foundation';

type UseUiConfirmDialogHook = {
  showConfirmDialog: (
    data: UiConfirmDialogData,
    onConfirm: () => void,
    onDeny: () => void,
    options?: UiConfirmDialogOptions
  ) => void;
};

export const useConfirmDialog = (): UseUiConfirmDialogHook => {
  const confirmDialogContext = React.useContext(UiConfirmDialogContext);

  return {
    showConfirmDialog: confirmDialogContext.showConfirmDialog,
  };
};
