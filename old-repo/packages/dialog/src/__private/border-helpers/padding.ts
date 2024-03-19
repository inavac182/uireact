import { UiDialogType } from '../../types';

export const getPadding = (type?: UiDialogType): string => {
  switch (type) {
    case UiDialogType.BOTTOM:
      return '2px 2px 0px 2px';
    case UiDialogType.CENTERED:
      return '2px';
    case UiDialogType.LEFT:
      return '0 2px 0 0';
    case UiDialogType.RIGHT:
      return '0 0 0 2px';
    case UiDialogType.FULLSCREEN:
      return '0';
    default:
      return '2px';
  }
};
