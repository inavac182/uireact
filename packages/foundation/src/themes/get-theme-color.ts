import { ColorCategories, ThemeColor, ColorTokens } from '../types/enums';
import { Theme } from '../types';

export const getThemeColor = (theme: Theme, color: ThemeColor, category: ColorCategories, token: ColorTokens): string =>
  theme[color]?.[category]?.[token] || '';
