import { UiConfirmDialogData, UiConfirmDialogHolder, UiConfirmDialogOptions } from '.';

export type IConfirmDialogController = {
  visible: boolean;
  confirmDialog: UiConfirmDialogHolder | null;
  showConfirmDialog: (
    notification: UiConfirmDialogData,
    onConfirm: (() => Promise<void>) | (() => void),
    onDeny: (() => Promise<void>) | (() => void),
    options?: UiConfirmDialogOptions
  ) => void;
  hideConfirmDialog: () => void;
};
