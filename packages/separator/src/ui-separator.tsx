import React from 'react';

import styled from 'styled-components';

import {
  ColorCategory,
  ColorTokens,
  ThemeContext,
  UiReactElementProps,
  getColorCategory,
  getThemeColor,
} from '@uireact/foundation';

import { privateSeparatorProps } from './types';

const ContainerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
`;

const InitialBgDiv = styled.div<privateSeparatorProps>`
  width: 150%;
  height: 100px;
  position: absolute;

  ${(props) => `
    background-color: ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$from),
      ColorTokens.token_100
    )};
  `}
`;

const BottomDiv = styled.div<privateSeparatorProps>`
  width: 150%;
  height: 150px;
  opacity: 0.5;
  position: absolute;
  top: 50px;
  left: -50px;
  transform: rotate(3deg);

  ${(props) => `
    background-color: ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$to),
      ColorTokens.token_100
    )};
  `}
`;

const EndTransitionDiv = styled.div<privateSeparatorProps>`
  width: 150%;
  height: 150px;
  opacity: 1;
  position: absolute;
  top: 60px;
  left: -50px;
  transform: rotate(-3deg);

  ${(props) => `
    background-color: ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$to),
      ColorTokens.token_100
    )};
  `}
`;

export type UiSeparatorProps = {
  from: ColorCategory;
  to: ColorCategory;
} & UiReactElementProps;

export const UiSeparator: React.FC<UiSeparatorProps> = ({ from, to, className, testId }: UiSeparatorProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <ContainerDiv>
      <InitialBgDiv
        $customTheme={theme.theme}
        $selectedTheme={theme.selectedTheme}
        $from={from}
        $to={to}
        className={className}
        data-testId={testId}
      ></InitialBgDiv>
      <BottomDiv
        $customTheme={theme.theme}
        $selectedTheme={theme.selectedTheme}
        $from={from}
        $to={to}
        className={className}
        data-testId={testId}
      ></BottomDiv>
      <EndTransitionDiv
        $customTheme={theme.theme}
        $selectedTheme={theme.selectedTheme}
        $from={from}
        $to={to}
        className={className}
        data-testId={testId}
      ></EndTransitionDiv>
    </ContainerDiv>
  );
};

UiSeparator.displayName = 'UiSeparator';
