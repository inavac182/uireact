import React from 'react';

import { render, RenderResult } from '@testing-library/react';

import { DefaultTheme, ThemeColor } from '@uireact/foundation';

import { UiView } from '@uireact/view';

type WrapperComponentProps = {
  selectedTheme?: ThemeColor;
  children: React.ReactElement;
};

const WrapperComponent: React.FC<WrapperComponentProps> = ({ children, selectedTheme }: WrapperComponentProps) => {
  return (
    <UiView theme={DefaultTheme} selectedTheme={selectedTheme ?? ThemeColor.dark}>
      {children}
    </UiView>
  );
};

export const uiRender = (component: React.ReactElement, $selectedTheme?: ThemeColor): RenderResult => {
  return render(<WrapperComponent selectedTheme={$selectedTheme}>{component}</WrapperComponent>);
};
