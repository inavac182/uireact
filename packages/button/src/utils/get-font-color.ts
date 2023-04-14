import { ThemeColor } from '@uireact/foundation';

import { UiButtonProps } from '../types';

export const getFontColor = (selectedTheme: ThemeColor, buttonType: UiButtonProps['buttonType']): ThemeColor => {
  switch (buttonType) {
    case 'primary':
      return selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light;
    case 'secondary':
      return selectedTheme === ThemeColor.light ? ThemeColor.light : ThemeColor.dark;
    case 'tertiary':
      return selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light;
    case 'positive':
      return selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light;
    case 'negative':
      return selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light;
    case 'error':
      return selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light;
    default:
      ThemeColor.dark;
  }

  return ThemeColor.dark;
};
