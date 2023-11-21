import { UiConfirmDialogData, UiConfirmDialogHolder, UiConfirmDialogOptions } from '.';

export type IConfirmDialogController = {
  visible: boolean;
  confirmDialog: UiConfirmDialogHolder | null;
  showConfirmDialog: (
    notification: UiConfirmDialogData,
    onConfirm: () => void,
    onDeny: () => void,
    options?: UiConfirmDialogOptions
  ) => void;
  hideConfirmDialog: () => void;
};
