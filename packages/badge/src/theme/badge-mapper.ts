import { ColorTokens, ThemeMapper } from '@uireact/foundation';

import { getCategory } from './utils';

export const getDynamicBadgeMapper = (
  category?: 'primary' | 'secondary' | 'tertiary' | 'positive' | 'negative' | 'error'
): ThemeMapper => {
  return {
    normal: {
      background: {
        category: getCategory(category),
        inverse: false,
        token: ColorTokens.token_10,
      },
      'border-color': {
        category: getCategory(category),
        inverse: false,
        token: ColorTokens.token_200,
      },
      color: {
        category: getCategory(category),
        inverse: false,
        token: ColorTokens.token_200,
      },
    },
  };
};
