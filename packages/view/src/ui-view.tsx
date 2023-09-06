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
import { getDynamicMapper } from './theme';
import { CenteredDiv } from './__private';

/* istanbul ignore next */
const GlobalStyle = createGlobalStyle<privateViewProps>`
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    ${(props) => `
      ${`font-family: ${props.$customTheme.texts.font};`}
      ${`font-size: ${getTextSize(props.$customTheme, TextSize.regular)};`}
      ${`background-color: ${getThemeColor(
        props.$customTheme,
        props.$selectedTheme,
        ColorCategories.primary,
        ColorTokens.token_100
      )};`}
      ${`color: ${getThemeColor(
        props.$customTheme,
        props.$selectedTheme,
        ColorCategories.fonts,
        ColorTokens.token_100
      )};`}
    `}

    font-weight: 400;
    width: 100%;
  }
`;

const Div = styled.div<privateViewProps>`
  ${(props) => `
    ${getThemeStyling(props.$customTheme, props.$selectedTheme, getDynamicMapper(props.$noBackground))}
    ${`font-family: ${props.$customTheme.texts.font};`}
    ${`font-size: ${getTextSize(props.$customTheme, TextSize.regular)};`}
  `}

  transition: background .2s;
`;

export const UiView: React.FC<UiViewProps> = ({
  dialogController,
  centeredContent = false,
  className,
  theme,
  selectedTheme,
  children,
  noBackground,
}: UiViewProps) => {
  const defaultDialogController = useDialogController();

  return (
    <Div
      $customTheme={theme}
      $selectedTheme={selectedTheme}
      className={className}
      data-testid="UiView"
      $noBackground={noBackground}
    >
      <ThemeContext.Provider value={{ theme, selectedTheme }}>
        <UiDialogsControllerContext.Provider value={dialogController ?? defaultDialogController}>
          <GlobalStyle $customTheme={theme} $selectedTheme={selectedTheme} />
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
  );
};

UiView.displayName = 'UiView';
