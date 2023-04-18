import { ThemeMapper, ColorCategories, ColorTokens } from '@uireact/foundation';

export const dynamicViewRowMapper = (weight: '10' | '50' | '100' | '150' | '200' = '100'): ThemeMapper => {
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

  return {
    normal: {
      background: {
        category: ColorCategories.backgrounds,
        inverse: false,
        token: token,
      },
      color: {
        category: ColorCategories.fonts,
        inverse: true,
        token: fontToken,
      },
    },
  };
};
