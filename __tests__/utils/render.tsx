import React from 'react';

import { render, RenderResult } from '@testing-library/react';

import { DefaultTheme, ThemeColor, ThemeContext } from '@uireact/foundation';
import { UiDialogsControllerContext } from '@uireact/dialog';

import { useDialogController } from '../../src/providers/dialogs-controller';

type WrapperComponentProps = {
  selectedTheme?: ThemeColor;
  children: React.ReactElement;
};

const WrapperComponent: React.FC<WrapperComponentProps> = ({ children, selectedTheme }: WrapperComponentProps) => {
  const dialogController = useDialogController();

  return (
    <ThemeContext.Provider value={{ theme: DefaultTheme, selectedTheme: selectedTheme ?? ThemeColor.dark }}>
      <UiDialogsControllerContext.Provider value={dialogController}>{children}</UiDialogsControllerContext.Provider>
    </ThemeContext.Provider>
  );
};

export const uiRender = (component: React.ReactElement, selectedTheme?: ThemeColor): RenderResult => {
  return render(<WrapperComponent selectedTheme={selectedTheme}>{component}</WrapperComponent>);
};
