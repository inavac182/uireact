import {
  ColorCategories,
  ColorCategory,
  ColorToken,
  ColorTokens,
  ThemeMapper,
  getColorCategory,
  getColorTokenValue,
  getNextColorToken,
} from '@uireact/foundation';

export const getDynamicCardMapper = (token?: ColorToken, category?: ColorCategory): ThemeMapper => {
  const baseToken = token ? getColorTokenValue(token) : ColorTokens.token_100;

  return {
    normal: {
      background: {
        category: category ? getColorCategory(category) : ColorCategories.secondary,
        inverse: false,
        token: baseToken,
      },
      'border-color': {
        category: category ? getColorCategory(category) : ColorCategories.secondary,
        inverse: false,
        token: getNextColorToken(baseToken),
      },
    },
  };
};
