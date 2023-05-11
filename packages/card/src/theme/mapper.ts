import { ColorCategories, ColorTokens, ThemeMapper, getNextToken } from '@uireact/foundation';

import { getCategoryFromState } from './utils';

export const getDynamicCardMapper = (token?: ColorTokens, state?: 'POSITIVE' | 'NEGATIVE' | 'ERROR'): ThemeMapper => {
  return {
    normal: {
      background: {
        category: getCategoryFromState(state),
        inverse: false,
        token: token || ColorTokens.token_100,
      },
      color: {
        category: ColorCategories.fonts,
        inverse: false,
        token: ColorTokens.token_100,
      },
      'border-color': {
        category: getCategoryFromState(state),
        inverse: false,
        token: getNextToken(token || ColorTokens.token_150),
      },
    },
  };
};
