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

export const getDynamicMapper = (category: ColorCategories): ThemeMapper => {
  return {
    normal: {
      color: {
        category: category,
        inverse: true,
        token: ColorTokens.token_100,
      },
    },
  };
};
