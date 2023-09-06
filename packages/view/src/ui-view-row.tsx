import React from 'react';

import styled from 'styled-components';

import { getThemeStyling, ThemeContext, UiViewport, useViewport } from '@uireact/foundation';

import { privateViewRowProps, UiViewRowProps } from './types';
import { dynamicViewRowMapper } from './theme';
import { CenteredDiv } from './__private';

const Div = styled.div<privateViewRowProps>`
  ${(props) => {
    const mapper = dynamicViewRowMapper(props.$weight, props.$category, props.$inverseFont, props.$noBackground);
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
  noBackground,
}: UiViewRowProps) => {
  const viewport = useViewport();
  const themeContext = React.useContext(ThemeContext);

  return (
    <Div
      $customTheme={themeContext.theme}
      $selectedTheme={themeContext.selectedTheme}
      $weight={weight}
      className={className}
      $category={category}
      $inverseFont={inverseFont}
      $noBackground={noBackground}
    >
      {centeredContent ? (
        <>
          <UiViewport criteria={'l|xl'}>
            <CenteredDiv $size={viewport.isLarge ? 'l' : 'xl'}>{children}</CenteredDiv>
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
