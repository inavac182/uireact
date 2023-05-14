import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const getDynamicMapper = (category: ColorCategories): ThemeMapper => {
  return {
    normal: {
      color: {
        category: category,
        inverse: false,
        token: ColorTokens.token_100,
      },
      fill: {
        category: category,
        inverse: true,
        token: ColorTokens.token_100,
      },
    },
  };
};
