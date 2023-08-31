import React from 'react';

import styled from 'styled-components';

import { Breakpoints, getThemeStyling, ThemeContext, UiViewport } from '@uireact/foundation';

import { privateViewRowProps, UiViewRowProps } from './types';
import { dynamicViewRowMapper } from './theme';
import { CenteredDiv } from './__private';

const Div = styled.div<privateViewRowProps>`
  ${(props) => {
    const mapper = dynamicViewRowMapper(props.$weight, props.$category, props.$inverseFont);
    return getThemeStyling(props.$customTheme, props.$selectedTheme, mapper);
  }}
`;

export const UiViewRow: React.FC<UiViewRowProps> = ({
  category,
  centeredContent,
  children,
  className,
  inverseFont,
  weight,
}: UiViewRowProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Div
      $customTheme={themeContext.theme}
      $selectedTheme={themeContext.selectedTheme}
      $weight={weight}
      className={className}
      $category={category}
      $inverseFont={inverseFont}
    >
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
    </Div>
  );
};

UiViewRow.displayName = 'UiViewRow';
