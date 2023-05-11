import { ColorCategories, ColorTokens, Theme, ThemeColor } from '../types';

export const getThemeColor = (
  theme: Theme,
  selectedTheme: ThemeColor,
  category: ColorCategories,
  token: ColorTokens,
  inverse?: boolean
): string => {
  if (inverse) {
    if (selectedTheme === ThemeColor.dark) {
      //istanbul ignore next
      return theme?.[ThemeColor.light]?.[category]?.[token] || '';
    } else {
      //istanbul ignore next
      return theme?.[ThemeColor.dark]?.[category]?.[token] || '';
    }
  }

  //istanbul ignore next
  return theme?.[selectedTheme]?.[category]?.[token] || '';
};
