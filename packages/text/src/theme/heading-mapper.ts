import { ColorCategories, ColorTokens, ThemeColor, ThemeMapper } from '@uireact/foundation';
import { InverseColorationProp } from '../types';
import { getInverseColoration } from './helpers/get-inverse-coloration';

export const getDynamicHeadingMapper = (
  selectedTheme: ThemeColor,
  inverseColoration?: boolean | InverseColorationProp
): ThemeMapper => {
  return {
    normal: {
      color: {
        category: ColorCategories.fonts,
        inverse: getInverseColoration(selectedTheme, inverseColoration),
        token: ColorTokens.token_100,
      },
    },
  };
};
