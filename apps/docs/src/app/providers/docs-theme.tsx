'use client';
import React, { useCallback, useState } from 'react';

import { ThemeColor } from '@uireact/foundation';

export const DocsThemeContext = React.createContext<{ selectTheme: (color: ThemeColor) => void; selectedTheme: ThemeColor }>({
  selectedTheme: ThemeColor.dark,
  selectTheme: () => { }
});

type DocsThemeProviderProps = {
  children?: React.ReactElement;
}

export const DocsThemeProvider = ({ children }: DocsThemeProviderProps) => { 
  const [selectedTheme, setSelectedTheme] = useState(ThemeColor.dark);
  const selectTheme = useCallback((theme: ThemeColor) => {
    setSelectedTheme(theme);
  }, []);

  return (
    <DocsThemeContext.Provider value={{ selectedTheme, selectTheme }}>
      {children}
    </DocsThemeContext.Provider>
  )
}

DocsThemeContext.displayName = 'DocsTheContext';
