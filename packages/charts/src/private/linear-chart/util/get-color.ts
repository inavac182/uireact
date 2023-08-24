import { ColorCategories, ColorTokens, Theme, ThemeColor, getThemeColor } from '@uireact/foundation';
import { ThemedColor } from '../../../types';

export const getColor = (
  customTheme: Theme,
  selectedTheme: ThemeColor,
  category: ColorCategories,
  color?: string | ThemedColor
): string => {
  let themeColor = getThemeColor(customTheme, selectedTheme, category, ColorTokens.token_100);

  if (color) {
    if (typeof color === 'string') {
      themeColor = color;
    } else {
      themeColor = selectedTheme === ThemeColor.dark ? color.dark : color.light;
    }
  }

  return themeColor;
};
