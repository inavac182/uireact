import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const LabelMapper: ThemeMapper = {
  normal: {
    color: {
      category: ColorCategories.fonts,
      inverse: false,
      token: ColorTokens.token_100,
    },
  },
};

export const getLabelDynamicMapper = (category: ColorCategories): ThemeMapper => {
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
