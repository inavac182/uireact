import React from 'react';
import { Themes } from '../themes';

export const ThemeContext = React.createContext({
  theme: Themes.dark,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toogleTheme: /* istanbul ignore next */ () => {},
});

ThemeContext.displayName = 'UiReactThemeContext';
