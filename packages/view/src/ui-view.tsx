'use client';
import React, { useEffect, useState } from 'react';

import styled, { createGlobalStyle } from 'styled-components';

import {
  ThemeContext,
  UiViewport,
  Breakpoints,
  Theme,
  ThemeColor,
  useConfirmDialogController,
} from '@uireact/foundation';
import {
  UiDialogsControllerContext,
  useDialogController,
  UiNotificationsContext,
  useNotificationsController,
  UiConfirmDialogContext,
} from '@uireact/foundation';

import { UiViewProps, privateViewProps } from './types/ui-view-props';

import {
  CenteredDiv,
  DarkThemeStyleVariables,
  FontFamilyVariable,
  LightThemeStyleVariables,
  SizesVariables,
  SpacingVariables,
} from './__private';
import { useThemeDetector } from './hooks';

/* istanbul ignore next */
const GlobalStyle = createGlobalStyle<{ $customTheme: Theme, $skipFontName?: boolean }>`
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
    ${props => !props.$skipFontName ? FontFamilyVariable : ''}
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

  a,p,span,label,input,select,button,h1,h2,h3,h4,h5,h6 {
    font-family: var(--font-family);
  }
`;

const Div = styled.div<privateViewProps>`
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
  skipThemeDetector,
  skipFontName
}: UiViewProps) => {
  const defaultDialogController = useDialogController();
  const notificationsController = useNotificationsController();
  const confirmDialogController = useConfirmDialogController();
  const isDarkEnabled = useThemeDetector();
  const [internalSelectedTheme, setSelectedTheme] = useState(selectedTheme || ThemeColor.dark);

  useEffect(() => {
    if (selectedTheme === ThemeColor.light) {
      setSelectedTheme(ThemeColor.light);
      document.documentElement.classList.add('light');
    } else {
      setSelectedTheme(ThemeColor.dark);
      document.documentElement.classList.remove('light');
    }
  }, [selectedTheme]);

  useEffect(() => {
    if (skipThemeDetector) {
      return;
    }

    if (isDarkEnabled) {
      setSelectedTheme(ThemeColor.dark);
      document.documentElement.classList.remove('light');
    } else {
      setSelectedTheme(ThemeColor.light);
      document.documentElement.classList.add('light');
    }
  }, [isDarkEnabled, skipThemeDetector]);

  return (
    <>
      <GlobalStyle $customTheme={theme} $skipFontName={skipFontName} />
      <Div className={className} data-testid="UiView" $noBackground={noBackground}>
        <ThemeContext.Provider value={{ theme, selectedTheme: internalSelectedTheme }}>
          <UiDialogsControllerContext.Provider value={dialogController ?? defaultDialogController}>
            <UiNotificationsContext.Provider value={notificationsController}>
              <UiConfirmDialogContext.Provider value={confirmDialogController}>
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
              </UiConfirmDialogContext.Provider>
            </UiNotificationsContext.Provider>
          </UiDialogsControllerContext.Provider>
        </ThemeContext.Provider>
      </Div>
    </>
  );
};

UiView.displayName = 'UiView';
