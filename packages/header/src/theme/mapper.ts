import { ColorCategories, ColorToken, ColorTokens, ThemeMapper, getColorTokenValue } from '@uireact/foundation';

export const getDynamicMapper = (weight?: ColorToken): ThemeMapper => {
  const token = weight ? getColorTokenValue(weight) : ColorTokens.token_100;

  return {
    normal: {
      background: {
        category: ColorCategories.primary,
        inverse: false,
        token: token,
      },
      color: {
        category: ColorCategories.fonts,
        inverse: false,
        token: ColorTokens.token_100,
      },
      'border-color': {
        category: ColorCategories.primary,
        inverse: false,
        token: ColorTokens.token_150,
      },
    },
  };
};
