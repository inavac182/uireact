import { ThemeMapper } from '@uireact/foundation';

export const ButtonThemeMapper: ThemeMapper = {
  base: {
    color: {
      state: 'fonts',
      token: 'token_10',
    },
    background: {
      state: 'primary',
      token: 'token_100',
    },
    border: {
      state: 'primary',
      token: 'token_100',
    },
  },
  hover: {
    color: {
      state: 'fonts',
      token: 'token_150',
    },
    background: {
      state: 'primary',
      token: 'token_150',
    },
  },
  active: {
    color: {
      state: 'fonts',
      token: 'token_50',
    },
    background: {
      state: 'primary',
      token: 'token_200',
    },
  },
  disabled: {
    color: {
      state: 'fonts',
      token: 'token_200',
    },
    background: {
      state: 'primary',
      token: 'token_50',
    },
  },
};
