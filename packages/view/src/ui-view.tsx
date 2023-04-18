import React from 'react';

import styled from 'styled-components';

import { ThemeContext, getThemeStyling, UiViewport, Breakpoints } from '@uireact/foundation';

import { UiViewProps } from './types/ui-view-props';
import { themeMapper } from './theme';
import { CenteredDiv } from './__private';

const Div = styled.div<UiViewProps>`
  ${(props) => getThemeStyling(props.theme, props.selectedTheme, themeMapper)}
`;

export const UiView: React.FC<UiViewProps> = ({
  centeredContent = false,
  theme,
  selectedTheme,
  children,
}: UiViewProps) => {
  return (
    <ThemeContext.Provider value={{ theme, selectedTheme }}>
      <Div theme={theme} selectedTheme={selectedTheme}>
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
    </ThemeContext.Provider>
  );
};

UiView.displayName = 'UiView';
