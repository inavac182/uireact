import React from 'react';

import { render, RenderResult } from '@testing-library/react';

import { DefaultTheme, ThemeColor, ThemeContext } from '@uireact/foundation';

export const uiRender = (component: React.ReactElement, selectedTheme?: ThemeColor): RenderResult => {
  return render(
    <ThemeContext.Provider value={{ theme: DefaultTheme, selectedTheme: selectedTheme ?? ThemeColor.dark }}>
      {component}
    </ThemeContext.Provider>
  );
};
