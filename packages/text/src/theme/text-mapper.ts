import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const TextMapper: ThemeMapper = {
  normal: {
    color: {
      category: ColorCategories.fonts,
      inverse: true,
      token: ColorTokens.token_100,
    },
  },
};

export const getCategory = (state: 'POSITIVE' | 'NEGATIVE' | 'ERROR'): ColorCategories => {
  switch (state) {
    case 'ERROR':
      return ColorCategories.error;
    case 'NEGATIVE':
      return ColorCategories.negative;
    case 'POSITIVE':
      return ColorCategories.positive;
    default:
      return ColorCategories.fonts;
  }
};

export const getDynamicMapper = (category: ColorCategories): ThemeMapper => {
  return {
    normal: {
      color: {
        category: category,
        inverse: false,
        token: ColorTokens.token_100,
      },
    },
  };
};
