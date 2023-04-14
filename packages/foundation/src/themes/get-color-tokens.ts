import { Tokens } from 'types/themes/internal';
import { Theme, ThemeColor, ColorCategories } from '../types';

export const getColorTokens = (theme: Theme, selectedTheme: ThemeColor, category: ColorCategories): Tokens => {
  return theme[selectedTheme][category];
};
