import React from 'react';

import { render, RenderResult } from '@testing-library/react';

import { ThemeColor } from '@uireact/foundation';

import { UiView } from '@uireact/view';

type WrapperComponentProps = {
  selectedTheme?: ThemeColor;
  children: React.ReactElement;
};

const WrapperComponent: React.FC<WrapperComponentProps> = ({ children, selectedTheme }: WrapperComponentProps) => {
  return (
    <UiView selectedTheme={selectedTheme ?? ThemeColor.dark} skipThemeDetector>
      {children}
    </UiView>
  );
};

export const uiRender = (component: React.ReactElement, selectedTheme?: ThemeColor): RenderResult => {
  return render(<WrapperComponent selectedTheme={selectedTheme}>{component}</WrapperComponent>);
};
