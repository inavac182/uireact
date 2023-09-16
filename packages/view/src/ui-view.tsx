import React, { useEffect } from 'react';

import styled, { createGlobalStyle } from 'styled-components';

import { ThemeContext, UiViewport, Breakpoints, Theme, ThemeColor } from '@uireact/foundation';
import { UiDialogsControllerContext, useDialogController } from '@uireact/foundation';

import { UiViewProps, privateViewProps } from './types/ui-view-props';

import {
  CenteredDiv,
  DarkThemeStyleVariables,
  FontFamilyVariable,
  LightThemeStyleVariables,
  SizesVariables,
  SpacingVariables,
} from './__private';

const GlobalStyle = createGlobalStyle<{ $customTheme: Theme }>`
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  :root {
    ${DarkThemeStyleVariables}
    ${SizesVariables}
    ${SpacingVariables}
    ${FontFamilyVariable}
  }

  html.light {
    ${LightThemeStyleVariables}
  }

  body {
    font-family: var(--font-family);
    font-size: var(--texts-regular);
    background-color: var(--primary-token_100);
    color: var(--fonts-token_100);
    font-weight: 400;
    width: 100%;
  }
`;

const Div = styled.div<privateViewProps>`
  font-family: var(--font-family);
  font-size: var(--texts-regular);
  background-color: ${(props) => (props.$noBackground ? 'transparent' : 'var(--primary-token_100)')};
  transition: background 0.2s;
`;

export const UiView: React.FC<UiViewProps> = ({
  dialogController,
  centeredContent = false,
  className,
  theme,
  selectedTheme,
  children,
  noBackground = false,
}: UiViewProps) => {
  const defaultDialogController = useDialogController();

  useEffect(() => {
    if (selectedTheme === ThemeColor.light) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [selectedTheme]);

  return (
    <>
      <GlobalStyle $customTheme={theme} />
      <Div className={className} data-testid="UiView" $noBackground={noBackground}>
        <ThemeContext.Provider value={{ theme, selectedTheme }}>
          <UiDialogsControllerContext.Provider value={dialogController ?? defaultDialogController}>
            <>
              {centeredContent ? (
                <>
                  <UiViewport criteria={Breakpoints.XLARGE}>
                    <CenteredDiv $size="xl">{children}</CenteredDiv>
                  </UiViewport>
                  <UiViewport criteria={Breakpoints.LARGE}>
                    <CenteredDiv $size="l">{children}</CenteredDiv>
                  </UiViewport>
                  <UiViewport criteria={'s|m'}>{children}</UiViewport>
                </>
              ) : (
                <>{children}</>
              )}
            </>
          </UiDialogsControllerContext.Provider>
        </ThemeContext.Provider>
      </Div>
    </>
  );
};

UiView.displayName = 'UiView';
