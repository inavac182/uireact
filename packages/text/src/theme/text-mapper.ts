import { ColorCategories, ColorTokens, ThemeColor, ThemeMapper } from '@uireact/foundation';
import { InverseColorationProp } from '../types';
import { getInverseColoration } from './helpers/get-inverse-coloration';

export const TextMapper: ThemeMapper = {
  normal: {
    color: {
      category: ColorCategories.fonts,
      inverse: false,
      token: ColorTokens.token_100,
    },
  },
};

export const getDynamicMapper = (
  category: ColorCategories,
  selectedTheme: ThemeColor,
  inverseColoration?: boolean | InverseColorationProp
): ThemeMapper => {
  return {
    normal: {
      color: {
        category: category,
        inverse: getInverseColoration(selectedTheme, inverseColoration),
        token: ColorTokens.token_100,
      },
    },
  };
};
