import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export enum UiDialogType {
  CENTERED,
  BOTTOM,
  RIGHT,
  LEFT,
}

export type UiDialogProps = {
  /** Dialog id */
  dialogId: string;
  /** Position where the dialog will be rendered */
  position?: UiDialogType;
} & UiReactElementProps;

export type privateUiDialogProps = {
  position?: UiDialogType;
} & UiReactPrivateElementProps;
