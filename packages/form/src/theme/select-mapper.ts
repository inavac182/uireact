import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const SelectMapper: ThemeMapper = {
  normal: {
    background: {
      category: ColorCategories.fonts,
      inverse: true,
      token: ColorTokens.token_100,
    },
    color: {
      category: ColorCategories.fonts,
      inverse: false,
      token: ColorTokens.token_50,
    },
    'border-color': {
      category: ColorCategories.fonts,
      inverse: true,
      token: ColorTokens.token_200,
    },
  },
  focus: {
    background: {
      category: ColorCategories.fonts,
      inverse: true,
      token: ColorTokens.token_100,
    },
    color: {
      category: ColorCategories.fonts,
      inverse: false,
      token: ColorTokens.token_50,
    },
    'border-color': {
      category: ColorCategories.secondary,
      inverse: true,
      token: ColorTokens.token_200,
    },
  },
  disabled: {
    background: {
      category: ColorCategories.fonts,
      inverse: true,
      token: ColorTokens.token_200,
    },
    color: {
      category: ColorCategories.fonts,
      inverse: false,
      token: ColorTokens.token_50,
    },
    'border-color': {
      category: ColorCategories.fonts,
      inverse: true,
      token: ColorTokens.token_150,
    },
  },
};

export const getDynamicSelectMapper = (category: ColorCategories): ThemeMapper => {
  return {
    normal: {
      background: {
        category: ColorCategories.fonts,
        inverse: true,
        token: ColorTokens.token_100,
      },
      color: {
        category: ColorCategories.fonts,
        inverse: false,
        token: ColorTokens.token_50,
      },
      'border-color': {
        category: category,
        inverse: true,
        token: ColorTokens.token_200,
      },
    },
    focus: {
      background: {
        category: ColorCategories.fonts,
        inverse: true,
        token: ColorTokens.token_100,
      },
      color: {
        category: ColorCategories.fonts,
        inverse: false,
        token: ColorTokens.token_50,
      },
      'border-color': {
        category: category,
        inverse: true,
        token: ColorTokens.token_200,
      },
    },
  };
};
