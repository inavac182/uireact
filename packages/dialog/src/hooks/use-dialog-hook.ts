import React from 'react';

import { UiDialogsControllerContext } from '@uireact/foundation';

type DialogActions = {
  openDialog: () => void;
  closeDialog: () => void;
};

type UseDialogHook = {
  isOpen: boolean;
  actions: DialogActions;
};

export const useDialog = (dialogId: string): UseDialogHook => {
  const dialogController = React.useContext(UiDialogsControllerContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const actions = React.useMemo(() => {
    return {
      openDialog: () => dialogController.openDialog(dialogId),
      closeDialog: () => dialogController.closeDialog(dialogId),
    };
  }, [dialogId, dialogController]);

  React.useEffect(() => {
    let opened = false;

    dialogController.openedDialogs.map((dialog) => {
      if (dialog === dialogId) {
        opened = true;
      }
    });

    setIsOpen(opened);
  }, [dialogController, setIsOpen]);

  return { isOpen, actions };
};
