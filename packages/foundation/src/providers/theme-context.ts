import React from 'react';
import { DefaultTheme } from '../themes';
import { Theme, ThemeColor } from '../types';

export const ThemeContext = React.createContext<{ theme: Theme; selectedTheme: ThemeColor }>({
  theme: DefaultTheme,
  selectedTheme: ThemeColor.light,
});

ThemeContext.displayName = 'UiReactThemeContext';
