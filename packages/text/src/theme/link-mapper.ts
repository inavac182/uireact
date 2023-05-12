import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const LinkMapper: ThemeMapper = {
  normal: {
    color: {
      category: ColorCategories.fonts,
      inverse: true,
      token: ColorTokens.token_100,
    },
  },
};

export const getDynamicLinkMapper = (category: ColorCategories): ThemeMapper => {
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
