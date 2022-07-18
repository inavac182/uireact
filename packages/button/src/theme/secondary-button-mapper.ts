import { ThemeMapper } from '@uireact/foundation';

export const SecondaryButtonThemeMapper: ThemeMapper = {
  default: {
    color: {
      key: 'fonts',
      token: 'token_10',
    },
    background: {
      key: 'secondary',
      token: 'token_100',
    },
    border: {
      key: 'secondary',
      token: 'token_100',
    },
  },
  hover: {
    color: {
      key: 'fonts',
      token: 'token_150',
    },
    background: {
      key: 'secondary',
      token: 'token_150',
    },
  },
  active: {
    color: {
      key: 'fonts',
      token: 'token_50',
    },
    background: {
      key: 'secondary',
      token: 'token_200',
    },
  },
  disabled: {
    color: {
      key: 'fonts',
      token: 'token_200',
    },
    background: {
      key: 'secondary',
      token: 'token_50',
    },
  },
};
