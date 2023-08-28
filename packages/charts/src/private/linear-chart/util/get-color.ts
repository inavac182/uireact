import { ColorCategories, ColorCategory, ColorTokens, Theme, ThemeColor, getThemeColor } from '@uireact/foundation';
import { ThemedColor } from '../../../types';

export const getColorFromThemeIfRecognized = (
  customTheme: Theme,
  selectedTheme: ThemeColor,
  value: ColorCategory | string
): string => {
  switch (value) {
    case 'error':
      return getThemeColor(customTheme, selectedTheme, ColorCategories.error, ColorTokens.token_100);
    case 'warning':
      return getThemeColor(customTheme, selectedTheme, ColorCategories.warning, ColorTokens.token_100);
    case 'negative':
      return getThemeColor(customTheme, selectedTheme, ColorCategories.negative, ColorTokens.token_100);
    case 'positive':
      return getThemeColor(customTheme, selectedTheme, ColorCategories.positive, ColorTokens.token_100);
    case 'primary':
      return getThemeColor(customTheme, selectedTheme, ColorCategories.primary, ColorTokens.token_100);
    case 'secondary':
      return getThemeColor(customTheme, selectedTheme, ColorCategories.secondary, ColorTokens.token_100);
    case 'tertiary':
      return getThemeColor(customTheme, selectedTheme, ColorCategories.tertiary, ColorTokens.token_100);
    default:
      return value;
  }
};

export const getColor = (
  customTheme: Theme,
  selectedTheme: ThemeColor,
  color?: string | ThemedColor | ColorCategory
): string => {
  let themeColor = getThemeColor(customTheme, selectedTheme, ColorCategories.primary, ColorTokens.token_100);

  if (color) {
    if (typeof color === 'string') {
      themeColor = getColorFromThemeIfRecognized(customTheme, selectedTheme, color);
    } else {
      themeColor = selectedTheme === ThemeColor.dark ? color.dark : color.light;
    }
  }

  return themeColor;
};
