import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const themeMapper: ThemeMapper = {
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
