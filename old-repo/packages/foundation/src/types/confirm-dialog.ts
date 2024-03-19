export type UiConfirmDialogData = {
  title: string;
  message: string;
  confirmLabel: string;
  denyLabel: string;
};

export type UiConfirmDialogOptions = {
  direction?: 'inline' | 'stacked';
};

export type UiConfirmDialogHolder = {
  data: UiConfirmDialogData;
  confirm: () => void;
  deny: () => void;
  options?: UiConfirmDialogOptions;
};
