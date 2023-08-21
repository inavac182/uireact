import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';
import { InverseColorationProp } from '../types';

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
  isDark?: boolean,
  inverseColoration?: boolean | InverseColorationProp
): ThemeMapper => {
  let isInverse = false;

  if (typeof inverseColoration === 'object') {
    if (inverseColoration.dark && isDark) {
      isInverse = true;
    } else if (inverseColoration.light && !isDark) {
      isInverse = true;
    }
  } else if (inverseColoration) {
    isInverse = true;
  }

  return {
    normal: {
      color: {
        category: category,
        inverse: isInverse,
        token: ColorTokens.token_100,
      },
    },
  };
};
