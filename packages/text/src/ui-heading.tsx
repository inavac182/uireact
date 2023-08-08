import React from 'react';

import styled from 'styled-components';

import { ThemeContext, getHeadingSize, getThemeStyling } from '@uireact/foundation';

import { UiHeadingProps, privateHeadingProps } from './types';

import { HeadingMapper } from './theme';

const commonStyles = `
  padding: 0;
  margin: 0;
  font-weight: bold;
`;

const H1 = styled.h1<privateHeadingProps>`
  ${(props) => getThemeStyling(props.$customTheme, props.$selectedTheme, HeadingMapper)}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.level)};`}
  ${(props) => `
    ${props.centered ? `text-align: center;` : ``}
  `}

  ${commonStyles}
`;
const H2 = styled.h2<privateHeadingProps>`
  ${(props) => getThemeStyling(props.$customTheme, props.$selectedTheme, HeadingMapper)}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.level)};`}
  ${(props) => `
    ${props.centered ? `text-align: center;` : ``}
  `}

  ${commonStyles}
`;
const H3 = styled.h3<privateHeadingProps>`
  ${(props) => getThemeStyling(props.$customTheme, props.$selectedTheme, HeadingMapper)}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.level)};`}
  ${(props) => `
    ${props.centered ? `text-align: center;` : ``}
  `}

  ${commonStyles}
`;
const H4 = styled.h4<privateHeadingProps>`
  ${(props) => getThemeStyling(props.$customTheme, props.$selectedTheme, HeadingMapper)}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.level)};`}
  ${(props) => `
    ${props.centered ? `text-align: center;` : ``}
  `}

  ${commonStyles}
`;
const H5 = styled.h5<privateHeadingProps>`
  ${(props) => getThemeStyling(props.$customTheme, props.$selectedTheme, HeadingMapper)}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.level)};`}
  ${(props) => `
    ${props.centered ? `text-align: center;` : ``}
  `}

  ${commonStyles}
`;
const H6 = styled.h6<privateHeadingProps>`
  ${(props) => getThemeStyling(props.$customTheme, props.$selectedTheme, HeadingMapper)}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.level)};`}
  ${(props) => `
    ${props.centered ? `text-align: center;` : ``}
  `}

  ${commonStyles}
`;

export const UiHeading: React.FC<UiHeadingProps> = ({ level = 3, centered, children }: UiHeadingProps) => {
  const theme = React.useContext(ThemeContext);

  switch (level) {
    case 1:
      return (
        <H1 $customTheme={theme.theme} $selectedTheme={theme.selectedTheme} centered={centered} level={level}>
          {children}
        </H1>
      );
    case 2:
      return (
        <H2 $customTheme={theme.theme} $selectedTheme={theme.selectedTheme} centered={centered} level={level}>
          {children}
        </H2>
      );
    case 3:
      return (
        <H3 $customTheme={theme.theme} $selectedTheme={theme.selectedTheme} centered={centered} level={level}>
          {children}
        </H3>
      );
    case 4:
      return (
        <H4 $customTheme={theme.theme} $selectedTheme={theme.selectedTheme} centered={centered} level={level}>
          {children}
        </H4>
      );
    case 5:
      return (
        <H5 $customTheme={theme.theme} $selectedTheme={theme.selectedTheme} centered={centered} level={level}>
          {children}
        </H5>
      );
    case 6:
      return (
        <H6 $customTheme={theme.theme} $selectedTheme={theme.selectedTheme} centered={centered} level={level}>
          {children}
        </H6>
      );
    default:
      return (
        <H3 $customTheme={theme.theme} $selectedTheme={theme.selectedTheme} centered={centered} level={level}>
          {children}
        </H3>
      );
  }
};

UiHeading.displayName = 'UiHeading';
