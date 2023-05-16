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
import { UiDialogsControllerContext } from '@uireact/dialog';

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
      ${`font-size: ${getTextSize(props.customTheme, TextSize.regular)};`}
      ${`font-family: ${props.customTheme.texts.font};`}
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
  ${(props) => getThemeStyling(props.customTheme, props.selectedTheme, themeMapper)}
`;

export const UiView: React.FC<UiViewProps> = ({
  dialogController,
  centeredContent = false,
  className,
  theme,
  selectedTheme,
  children,
}: UiViewProps) => {
  return (
    <ThemeContext.Provider value={{ theme, selectedTheme }}>
      <UiDialogsControllerContext.Provider value={dialogController}>
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
