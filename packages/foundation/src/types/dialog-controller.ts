export type IDialogController = {
  openDialog: (dialogId: string) => void;
  closeDialog: (dialogId: string) => void;
  openedDialogs: string[];
};
