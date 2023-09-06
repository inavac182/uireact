import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const getDynamicMapper = (noBackground?: boolean): ThemeMapper => {
  if (noBackground) {
    return {
      normal: {
        color: {
          category: ColorCategories.fonts,
          inverse: false,
          token: ColorTokens.token_100,
        },
      },
    };
  }

  return {
    normal: {
      background: {
        category: ColorCategories.primary,
        inverse: false,
        token: ColorTokens.token_100,
      },
      color: {
        category: ColorCategories.fonts,
        inverse: false,
        token: ColorTokens.token_100,
      },
    },
  };
};
