import { ColorTokens } from '../types';

export const getNextToken = (token?: ColorTokens): ColorTokens => {
  switch (token) {
    case ColorTokens.token_10:
      return ColorTokens.token_50;
    case ColorTokens.token_50:
      return ColorTokens.token_100;
    case ColorTokens.token_100:
      return ColorTokens.token_150;
    case ColorTokens.token_150:
      return ColorTokens.token_200;
    case ColorTokens.token_200:
      return ColorTokens.token_200;
    default:
      return ColorTokens.token_100;
  }
};
