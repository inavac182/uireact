import { SpacingDefaults } from '.';
import { Theme } from '../types/themes/';

export const Light: Theme = {
  name: 'Light',
  colors: {
    base: {
      token_10: '#FFFFFF',
      token_50: '#F8F8F8',
      token_100: '#F5F5F5',
      token_150: '#D8D8D8',
      token_200: '#C0C0C0',
    },
    fonts: {
      token_10: '#DCDCDC',
      token_50: '#D3D3D3',
      token_100: '#C0C0C0',
      token_150: '#A9A9A9',
      token_200: '#888888',
    },
    primary: {
      token_10: '#52F8BD',
      token_50: '#39D49D',
      token_100: '#29A177',
      token_150: '#206D52',
      token_200: '#143026',
    },
    secondary: {
      token_10: '#5EACF8',
      token_50: '#438BD1',
      token_100: '#31679C',
      token_150: '#25486A',
      token_200: '#15222E',
    },
    tertiary: {
      token_10: '#FFB954',
      token_50: '#FFB344',
      token_100: '#F1A83E',
      token_150: '#A37430',
      token_200: '#47361D',
    },
  },
  spacing: SpacingDefaults,
};
