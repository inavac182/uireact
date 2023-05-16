import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export enum UiDialogType {
  BOTTOM,
  CENTERED,
  FULLSCREEN,
  LEFT,
  RIGHT,
}

export type UiDialogProps = {
  /** Close icon label */
  closeLabel?: string;
  /** Dialog id */
  dialogId: string;
  /** Hide X icon */
  hideCloseIcon?: boolean;
  /** Position where the dialog will be rendered */
  type?: UiDialogType;
  /** Dialog title */
  title?: string;
  /** CB to be triggered when dialog is closed */
  handleDialogClose?: () => void;
} & UiReactElementProps;

export type privateUiDialogProps = {
  /** Position where the dialog will be rendered */
  type?: UiDialogType;
} & UiReactPrivateElementProps;
