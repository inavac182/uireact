'use client';
import React from 'react';

import { Theme, ThemeColor } from '../types';

export const ThemeContext = React.createContext<{ selectedTheme: ThemeColor }>({
  selectedTheme: ThemeColor.light
});

ThemeContext.displayName = 'UiReactThemeContext';
