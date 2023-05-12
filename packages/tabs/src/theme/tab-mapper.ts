import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const TabsMapper: ThemeMapper = {
  hover: {
    background: {
      category: ColorCategories.primary,
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
