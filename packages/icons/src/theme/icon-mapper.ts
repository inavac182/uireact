import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const getDynamicMapper = (category: ColorCategories): ThemeMapper => {
  return {
    normal: {
      fill: {
        category: category,
        inverse: false,
        token: ColorTokens.token_100,
      },
    },
  };
};
