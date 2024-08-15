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
  confirm: (() => Promise<void>) | (() => void);
  deny: (() => Promise<void>) | (() => void);
  options?: UiConfirmDialogOptions;
};
