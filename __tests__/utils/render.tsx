import React from 'react';

import { render, RenderResult } from '@testing-library/react';

import { ThemeColor } from '@uireact/foundation';

import { UiView } from '@uireact/view';

type WrapperComponentProps = {
  children: React.ReactElement;
};

const WrapperComponent: React.FC<WrapperComponentProps> = ({ children }: WrapperComponentProps) => {
  return (
    <UiView>
      {children}
    </UiView>
  );
};

export const uiRender = (component: React.ReactElement, selectedTheme?: ThemeColor): RenderResult => {
  return render(<WrapperComponent>{component}</WrapperComponent>);
};
