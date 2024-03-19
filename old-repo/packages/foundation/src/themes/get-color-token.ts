import { ColorToken, ColorTokens } from '../types';

export const getColorTokenValue = (token: ColorToken): ColorTokens => {
  switch (token) {
    case '10': {
      return ColorTokens.token_10;
    }
    case '50': {
      return ColorTokens.token_50;
    }
    case '100': {
      return ColorTokens.token_100;
    }
    case '150': {
      return ColorTokens.token_150;
    }
    case '200': {
      return ColorTokens.token_200;
    }
    default: {
      return ColorTokens.token_100;
    }
  }
};
