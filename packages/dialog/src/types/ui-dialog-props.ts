import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export enum UiDialogType {
  BOTTOM,
  CENTERED,
  FULLSCREEN,
  LEFT,
  RIGHT,
}

export type UiDialogProps = {
  /** Dialog id */
  dialogId: string;
  /** Hide X icon */
  hideCloseIcon?: boolean;
  /** Position where the dialog will be rendered */
  type?: UiDialogType;
  /** Dialog title */
  title?: string;
} & UiReactElementProps;

export type privateUiDialogProps = {
  /** Position where the dialog will be rendered */
  type?: UiDialogType;
} & UiReactPrivateElementProps;
