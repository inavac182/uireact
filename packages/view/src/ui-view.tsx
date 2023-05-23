import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

import {
  ThemeContext,
  getThemeStyling,
  UiViewport,
  Breakpoints,
  ColorCategories,
  ColorTokens,
  TextSize,
  getTextSize,
  getThemeColor,
} from '@uireact/foundation';
import { UiDialogsControllerContext, useDialogController } from '@uireact/foundation';

import { UiViewProps, privateViewProps } from './types/ui-view-props';
import { themeMapper } from './theme';
import { CenteredDiv } from './__private';

const GlobalStyle = createGlobalStyle<privateViewProps>`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    ${(props) => `
      ${`font-family: ${props.customTheme.texts.font};`}
      ${`font-size: ${getTextSize(props.customTheme, TextSize.regular)};`}
      ${`background-color: ${getThemeColor(
        props.customTheme,
        props.selectedTheme,
        ColorCategories.backgrounds,
        ColorTokens.token_100
      )};`}
      ${`color: ${getThemeColor(
        props.customTheme,
        props.selectedTheme,
        ColorCategories.fonts,
        ColorTokens.token_100
      )};`}
    `}
    font-weight: 400;
  }
`;

const Div = styled.div<privateViewProps>`
  ${(props) => `
    ${getThemeStyling(props.customTheme, props.selectedTheme, themeMapper)}
    ${`font-family: ${props.customTheme.texts.font};`}
    ${`font-size: ${getTextSize(props.customTheme, TextSize.regular)};`}
  `}
`;

export const UiView: React.FC<UiViewProps> = ({
  dialogController,
  centeredContent = false,
  className,
  theme,
  selectedTheme,
  children,
}: UiViewProps) => {
  const defaultDialogController = useDialogController();

  return (
    <ThemeContext.Provider value={{ theme, selectedTheme }}>
      <UiDialogsControllerContext.Provider value={dialogController ?? defaultDialogController}>
        <GlobalStyle customTheme={theme} selectedTheme={selectedTheme} />
        <Div customTheme={theme} selectedTheme={selectedTheme} className={className} data-testid="UiView">
          {centeredContent ? (
            <>
              <UiViewport criteria={Breakpoints.XLARGE}>
                <CenteredDiv size="xl">{children}</CenteredDiv>
              </UiViewport>
              <UiViewport criteria={Breakpoints.LARGE}>
                <CenteredDiv size="l">{children}</CenteredDiv>
              </UiViewport>
              <UiViewport criteria={'s|m'}>{children}</UiViewport>
            </>
          ) : (
            <>{children}</>
          )}
        </Div>
      </UiDialogsControllerContext.Provider>
    </ThemeContext.Provider>
  );
};

UiView.displayName = 'UiView';
