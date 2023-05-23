import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const getDynamicMapper = (category: ColorCategories): ThemeMapper => {
  return {
    normal: {
      color: {
        category: ColorCategories.fonts,
        inverse: false,
        token: ColorTokens.token_100,
      },
      background: {
        category: category,
        inverse: false,
        token: ColorTokens.token_100,
      },
      'border-color': {
        category: category,
        inverse: false,
        token: ColorTokens.token_50,
      },
    },
    hover: {
      background: {
        category: category,
        inverse: false,
        token: ColorTokens.token_150,
      },
      'border-color': {
        category: category,
        inverse: false,
        token: ColorTokens.token_100,
      },
    },
    active: {
      background: {
        category: category,
        inverse: false,
        token: ColorTokens.token_200,
      },
      'border-color': {
        category: category,
        inverse: false,
        token: ColorTokens.token_150,
      },
    },
    disabled: {
      background: {
        category: category,
        inverse: false,
        token: ColorTokens.token_50,
      },
      'border-color': {
        category: category,
        inverse: false,
        token: ColorTokens.token_10,
      },
    },
  };
};
