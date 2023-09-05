import { ColorCategories, ColorTokens, ThemeColor, ThemeMapper } from '@uireact/foundation';
import { InverseColorationProp } from '../types';
import { getInverse } from './helpers/getInverse';

export const getDynamicMapper = (
  category: ColorCategories,
  selectedTheme: ThemeColor,
  inverseColoration?: boolean | InverseColorationProp
): ThemeMapper => {
  return {
    normal: {
      fill: {
        category: category,
        inverse: getInverse(selectedTheme, inverseColoration),
        token: ColorTokens.token_100,
      },
    },
  };
};
