import { Theme } from '../types/themes/';

export const Dark: Theme = {
  name: 'Dark',
  colors: {
    base: {
      token_10: '#A9A9A9',
      token_50: '#808080',
      token_100: '#484848',
      token_150: '#202020',
      token_200: '#000000',
    },
    fonts: {
      token_10: '#DCDCDC',
      token_50: '#D3D3D3',
      token_100: '#C0C0C0',
      token_150: '#A9A9A9',
      token_200: '#888888',
    },
    primary: {
      token_10: '#00D98C',
      token_50: '#088156',
      token_100: '#03452E',
      token_150: '#042318',
      token_200: '#010806',
    },
    secondary: {
      token_10: '#0C73D7',
      token_50: '#10477D',
      token_100: '#082643',
      token_150: '#061421',
      token_200: '#010508',
    },
    tertiary: {
      token_10: '#FF9700',
      token_50: '#C1770C',
      token_100: '#673F05',
      token_150: '#342106',
      token_200: '#0C0802',
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
