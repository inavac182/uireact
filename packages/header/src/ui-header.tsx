import React from 'react';

import styled from 'styled-components';

import { Breakpoints, ThemeContext, UiViewport, getThemeStyling } from '@uireact/foundation';

import { UiHeaderProps, privateUiHeaderProps } from './types';
import { CenteredDiv } from './__private';
import { themeMapper } from './theme';

const Div = styled.div<privateUiHeaderProps>`
  * {
    margin: 0;
    padding: 0;
  }

  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 3px;
  border-style: solid;

  ${(props) => {
    return `
    ${getThemeStyling(props.customTheme, props.selectedTheme, themeMapper)}
    ${props.fixed ? 'position: absolute;' : ''}
    `;
  }}

  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

export const UiHeader: React.FC<UiHeaderProps> = ({ centered, children, fixed }: UiHeaderProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Div customTheme={themeContext.theme} selectedTheme={themeContext.selectedTheme} fixed={fixed}>
      {centered ? (
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
  );
};

UiHeader.displayName = 'UiHeader';
