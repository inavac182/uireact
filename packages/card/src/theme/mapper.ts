import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

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
