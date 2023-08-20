import { ColorCategory, ColorTokens, ThemeMapper, getColorCategory } from '@uireact/foundation';

export const getNavbarItemMapper = (category: ColorCategory): ThemeMapper => {
  return {
    hover: {
      background: {
        category: getColorCategory(category),
        inverse: false,
        token: ColorTokens.token_50,
      },
    },
  };
};
