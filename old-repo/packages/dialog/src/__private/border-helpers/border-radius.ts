import { UiDialogType } from '../../types';

export const getBorderRadius = (type?: UiDialogType): string => {
  switch (type) {
    case UiDialogType.BOTTOM:
      return '5px 5px 0 0';
    case UiDialogType.CENTERED:
      return '5px';
    case UiDialogType.LEFT:
      return '0';
    case UiDialogType.RIGHT:
      return '0';
    case UiDialogType.FULLSCREEN:
      return '0';
    default:
      return '5px';
  }
};
