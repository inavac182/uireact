import { CategoryTheme, StaticStyles, StyleProps, ThemeType } from '../types';

export const getColor = (category: CategoryTheme, value: StyleProps, theme: ThemeType): string => {
  if (!theme || !theme.colors) {
    console.error('THEME ERROR', 'THEME IS NOT VALID');
    return '';
  }

  const themeValues = theme.colors[category] as StaticStyles;

  if (!themeValues) {
    console.error('THEME ERROR', 'CATEGORY NOT FOUND IN THEME');
    return '';
  }

  const color = themeValues[value];

  if (!color) {
    console.error('THEME ERROR', 'COLOR NOT FOUND IN CATEGORY');
    return '';
  }

  return color;
};
