import { ColorCategories, ColorTokens, ThemeMapper, getNextToken } from '@uireact/foundation';

export const themeMapper: ThemeMapper = {
  normal: {
    background: {
      category: ColorCategories.backgrounds,
      inverse: false,
      token: ColorTokens.token_100,
    },
    color: {
      category: ColorCategories.fonts,
      inverse: true,
      token: ColorTokens.token_100,
    },
  },
};

export const getDynamicCardMapper = (token: ColorTokens): ThemeMapper => {
  return {
    normal: {
      background: {
        category: ColorCategories.backgrounds,
        inverse: false,
        token: token,
      },
      color: {
        category: ColorCategories.fonts,
        inverse: false,
        token: getNextToken(token),
      },
    },
  };
};
