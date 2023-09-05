import React from 'react';

import styled from 'styled-components';

import { ThemeContext, getHeadingSize, getThemeStyling } from '@uireact/foundation';

import { UiHeadingProps, privateHeadingProps } from './types';

import { getDynamicHeadingMapper } from './theme';

const commonStyles = `
  padding: 0;
  margin: 0;
  font-weight: bold;
`;

const H1 = styled.h1<privateHeadingProps>`
  ${(props) =>
    getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      getDynamicHeadingMapper(props.$selectedTheme, props.$inverseColoration)
    )}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.$level)};`}
  ${(props) => `
    ${props.$centered ? `text-align: center;` : ``}
    ${
      props.$wrap
        ? `
      overflow:hidden; 
      white-space:nowrap; 
      text-overflow: ellipsis;`
        : ``
    }
  `}

  ${commonStyles}
`;
const H2 = styled.h2<privateHeadingProps>`
  ${(props) =>
    getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      getDynamicHeadingMapper(props.$selectedTheme, props.$inverseColoration)
    )}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.$level)};`}
  ${(props) => `
    ${props.$centered ? `text-align: center;` : ``}
        ${
          props.$wrap
            ? `
      overflow:hidden; 
      white-space:nowrap; 
      text-overflow: ellipsis;`
            : ``
        }
  `}

  ${commonStyles}
`;
const H3 = styled.h3<privateHeadingProps>`
  ${(props) =>
    getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      getDynamicHeadingMapper(props.$selectedTheme, props.$inverseColoration)
    )}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.$level)};`}
  ${(props) => `
    ${props.$centered ? `text-align: center;` : ``}
        ${
          props.$wrap
            ? `
      overflow:hidden; 
      white-space:nowrap; 
      text-overflow: ellipsis;`
            : ``
        }
  `}

  ${commonStyles}
`;
const H4 = styled.h4<privateHeadingProps>`
  ${(props) =>
    getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      getDynamicHeadingMapper(props.$selectedTheme, props.$inverseColoration)
    )}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.$level)};`}
  ${(props) => `
    ${props.$centered ? `text-align: center;` : ``}
        ${
          props.$wrap
            ? `
      overflow:hidden; 
      white-space:nowrap; 
      text-overflow: ellipsis;`
            : ``
        }
  `}

  ${commonStyles}
`;
const H5 = styled.h5<privateHeadingProps>`
  ${(props) =>
    getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      getDynamicHeadingMapper(props.$selectedTheme, props.$inverseColoration)
    )}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.$level)};`}
  ${(props) => `
    ${props.$centered ? `text-align: center;` : ``}
        ${
          props.$wrap
            ? `
      overflow:hidden; 
      white-space:nowrap; 
      text-overflow: ellipsis;`
            : ``
        }
  `}

  ${commonStyles}
`;
const H6 = styled.h6<privateHeadingProps>`
  ${(props) =>
    getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      getDynamicHeadingMapper(props.$selectedTheme, props.$inverseColoration)
    )}
  ${(props) => `font-size: ${getHeadingSize(props.$customTheme, props.$level)};`}
  ${(props) => `
    ${props.$centered ? `text-align: center;` : ``}
        ${
          props.$wrap
            ? `
      overflow:hidden; 
      white-space:nowrap; 
      text-overflow: ellipsis;`
            : ``
        }
  `}

  ${commonStyles}
`;

export const UiHeading: React.FC<UiHeadingProps> = ({
  level = 3,
  inverseColoration,
  centered,
  children,
  wrap,
}: UiHeadingProps) => {
  const theme = React.useContext(ThemeContext);

  switch (level) {
    case 1:
      return (
        <H1
          $customTheme={theme.theme}
          $selectedTheme={theme.selectedTheme}
          $centered={centered}
          $level={level}
          $wrap={wrap}
          $inverseColoration={inverseColoration}
        >
          {children}
        </H1>
      );
    case 2:
      return (
        <H2
          $customTheme={theme.theme}
          $selectedTheme={theme.selectedTheme}
          $centered={centered}
          $level={level}
          $wrap={wrap}
          $inverseColoration={inverseColoration}
        >
          {children}
        </H2>
      );
    case 3:
      return (
        <H3
          $customTheme={theme.theme}
          $selectedTheme={theme.selectedTheme}
          $centered={centered}
          $level={level}
          $wrap={wrap}
          $inverseColoration={inverseColoration}
        >
          {children}
        </H3>
      );
    case 4:
      return (
        <H4
          $customTheme={theme.theme}
          $selectedTheme={theme.selectedTheme}
          $centered={centered}
          $level={level}
          $wrap={wrap}
          $inverseColoration={inverseColoration}
        >
          {children}
        </H4>
      );
    case 5:
      return (
        <H5
          $customTheme={theme.theme}
          $selectedTheme={theme.selectedTheme}
          $centered={centered}
          $level={level}
          $wrap={wrap}
          $inverseColoration={inverseColoration}
        >
          {children}
        </H5>
      );
    case 6:
      return (
        <H6
          $customTheme={theme.theme}
          $selectedTheme={theme.selectedTheme}
          $centered={centered}
          $level={level}
          $wrap={wrap}
          $inverseColoration={inverseColoration}
        >
          {children}
        </H6>
      );
    default:
      return (
        <H3
          $customTheme={theme.theme}
          $selectedTheme={theme.selectedTheme}
          $centered={centered}
          $level={level}
          $wrap={wrap}
          $inverseColoration={inverseColoration}
        >
          {children}
        </H3>
      );
  }
};

UiHeading.displayName = 'UiHeading';
