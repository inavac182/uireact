import { Theme } from '../types/themes';
import { Dark, Light } from './default-colors';

export const DefaultTheme: Theme = {
  name: 'UIReactDefaultTheme',
  dark: Dark,
  light: Light,
  sizes: {
    headings: {
      level1: '24px',
      level2: '20px',
      level3: '16px',
      level4: '14px',
      level5: '14px',
      level6: '14px',
    },
    texts: {
      xsmall: '8px',
      small: '10px',
      regular: '12px',
      large: '14px',
      xlarge: '16px',
    },
  },
  texts: {
    font: 'Fira Sans',
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
