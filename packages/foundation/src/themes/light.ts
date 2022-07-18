import { Theme } from '../types/themes/';

export const Light: Theme = {
  name: 'Light',
  colors: {
    backgrounds: {
      token_10: '#FFFFFF',
      token_50: '#F8F8F8',
      token_100: '#F5F5F5',
      token_150: '#D8D8D8',
      token_200: '#C0C0C0',
    },
    fonts: {
      token_10: '#A9A9A9',
      token_50: '#808080',
      token_100: '#484848',
      token_150: '#202020',
      token_200: '#000000',
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
  spacing: {
    one: '1px',
    two: '2px',
    three: '4px',
    four: '8px',
    five: '16px',
    six: '32px',
    seven: '64px',
  },
};
