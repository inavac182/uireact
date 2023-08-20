import { Theme } from '../types/themes';
import { Dark, Light } from './default-colors';

export const DefaultTheme: Theme = {
  name: 'UIReactDefaultTheme',
  dark: Dark,
  light: Light,
  sizes: {
    headings: {
      level1: '26px',
      level2: '24px',
      level3: '20px',
      level4: '18px',
      level5: '18px',
      level6: '18px',
    },
    texts: {
      xsmall: '14px',
      small: '16px',
      regular: '18px',
      large: '20px',
      xlarge: '22px',
    },
  },
  texts: {
    font: `'Source Sans Pro', sans- serif`,
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
