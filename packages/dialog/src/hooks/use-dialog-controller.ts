import React from 'react';

import { IDialogController } from '@uireact/dialog';

export const useDialogController = (): IDialogController => {
  const [openedDialogs, setOpenedDialogs] = React.useState<string[]>([]);

  const openDialog = React.useCallback(
    (dialogId: string) => {
      const found = openedDialogs.filter((id) => id === dialogId);

      if (!found || found.length === 0) {
        const newOpenedDialogs = [...openedDialogs, dialogId];
        setOpenedDialogs(newOpenedDialogs);
      }
    },
    [openedDialogs, setOpenedDialogs]
  );

  const closeDialog = React.useCallback(
    (dialogId: string) => {
      const newOpenedDialogs = openedDialogs.filter((id) => id !== dialogId);
      setOpenedDialogs(newOpenedDialogs);
    },
    [openedDialogs, setOpenedDialogs]
  );

  return {
    openDialog,
    closeDialog,
    openedDialogs,
  };
};
