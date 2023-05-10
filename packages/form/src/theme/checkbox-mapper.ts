import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const getDynamicCheckboxMapper = (category: ColorCategories): ThemeMapper => {
  return {
    normal: {
      background: {
        category: category,
        inverse: true,
        token: ColorTokens.token_100,
      },
    },
  };
};

export const DisabledCheckboxMapper: ThemeMapper = {
  normal: {
    background: {
      category: ColorCategories.fonts,
      inverse: true,
      token: ColorTokens.token_10,
    },
  },
};
