import { ColorCategories, ColorTokens, ThemeMapper } from '@uireact/foundation';

export const MenuMapper: ThemeMapper = {
  normal: {
    background: {
      category: ColorCategories.primary,
      inverse: false,
      token: ColorTokens.token_100,
    },
    'border-color': {
      category: ColorCategories.primary,
      inverse: false,
      token: ColorTokens.token_200,
    },
  },
};
