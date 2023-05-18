import {
  ColorCategories,
  ColorCategory,
  ColorTokens,
  ThemeMapper,
  getColorCategory,
  getNextToken,
} from '@uireact/foundation';

export const getDynamicCardMapper = (token?: ColorTokens, category?: ColorCategory): ThemeMapper => {
  return {
    normal: {
      background: {
        category: category ? getColorCategory(category) : ColorCategories.backgrounds,
        inverse: false,
        token: token || ColorTokens.token_100,
      },
      color: {
        category: ColorCategories.fonts,
        inverse: true,
        token: ColorTokens.token_100,
      },
      'border-color': {
        category: category ? getColorCategory(category) : ColorCategories.backgrounds,
        inverse: false,
        token: getNextToken(token || ColorTokens.token_150),
      },
    },
  };
};
