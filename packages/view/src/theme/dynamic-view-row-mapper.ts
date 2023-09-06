import { ThemeMapper, ColorCategories, ColorTokens, ColorCategory, getColorCategory } from '@uireact/foundation';

export const dynamicViewRowMapper = (
  weight: '10' | '50' | '100' | '150' | '200' = '100',
  category?: ColorCategory,
  inverseFont?: boolean,
  noBackground?: boolean
): ThemeMapper => {
  let token = ColorTokens.token_100;
  let fontToken = ColorTokens.token_100;

  switch (weight) {
    case '10':
      token = ColorTokens.token_10;
      fontToken = ColorTokens.token_50;
      break;
    case '50':
      token = ColorTokens.token_50;
      fontToken = ColorTokens.token_50;
      break;
    case '100':
      token = ColorTokens.token_100;
      fontToken = ColorTokens.token_100;
      break;
    case '150':
      token = ColorTokens.token_150;
      fontToken = ColorTokens.token_150;
      break;
    case '200':
      token = ColorTokens.token_200;
      fontToken = ColorTokens.token_200;
      break;
    default:
      token = ColorTokens.token_100;
      fontToken = ColorTokens.token_100;
  }

  if (noBackground) {
    return {
      normal: {
        color: {
          category: ColorCategories.fonts,
          inverse: inverseFont ?? false,
          token: fontToken,
        },
      },
    };
  }

  return {
    normal: {
      background: {
        category: getColorCategory(category || 'primary'),
        inverse: false,
        token: token,
      },
      color: {
        category: ColorCategories.fonts,
        inverse: inverseFont ?? false,
        token: fontToken,
      },
    },
  };
};
