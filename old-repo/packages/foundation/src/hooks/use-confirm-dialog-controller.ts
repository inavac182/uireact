import { useCallback, useState } from 'react';
import { IConfirmDialogController, UiConfirmDialogData, UiConfirmDialogHolder, UiConfirmDialogOptions } from '../types';

export const useConfirmDialogController = (): IConfirmDialogController => {
  const [visible, setVisible] = useState<boolean>(false);
  const [confirmDialogData, setConfirmDialogData] = useState<UiConfirmDialogHolder | null>(null);

  const hideConfirmDialog = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const showConfirmDialog = useCallback(
    (data: UiConfirmDialogData, onConfirm: () => void, onDeny: () => void, options?: UiConfirmDialogOptions) => {
      setVisible(true);
      setConfirmDialogData({
        data,
        confirm: onConfirm,
        deny: onDeny,
        options,
      });
    },
    [confirmDialogData, setConfirmDialogData]
  );

  return {
    visible,
    confirmDialog: confirmDialogData,
    showConfirmDialog,
    hideConfirmDialog,
  };
};
