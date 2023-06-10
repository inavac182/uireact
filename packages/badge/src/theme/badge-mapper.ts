import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const getDynamicBadgeMapper = (category: ColorCategories): ThemeMapper => {
  return {
    normal: {
      background: {
        category: category,
        inverse: false,
        token: ColorTokens.token_10,
      },
      'border-color': {
        category: category,
        inverse: false,
        token: ColorTokens.token_200,
      },
      color: {
        category: category,
        inverse: false,
        token: ColorTokens.token_200,
      },
    },
  };
};
