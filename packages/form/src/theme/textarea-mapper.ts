import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const TextareaMapper: ThemeMapper = {
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

export const getDynamicTextareaMapper = (category: ColorCategories): ThemeMapper => {
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
        token: ColorTokens.token_100,
      },
    },
    focus: {
      'border-color': {
        category: category,
        inverse: true,
        token: ColorTokens.token_150,
      },
    },
  };
};
