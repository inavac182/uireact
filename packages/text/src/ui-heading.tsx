import React from 'react';

import styled, { css } from 'styled-components';

import { UiHeadingProps, privateHeadingProps } from './types';

const commonStyles = css<privateHeadingProps>`
  ${(props) => `
    font-size: var(--headings-level${props.$level});
    line-height: var(--headings-level${props.$level});

    color: var(--fonts-token_100);

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

  padding: 0;
  margin: 0;
  font-weight: bold;
`;

const H1 = styled.h1<privateHeadingProps>`
  ${commonStyles}
`;
const H2 = styled.h2<privateHeadingProps>`
  ${commonStyles}
`;
const H3 = styled.h3<privateHeadingProps>`
  ${commonStyles}
`;
const H4 = styled.h4<privateHeadingProps>`
  ${commonStyles}
`;
const H5 = styled.h5<privateHeadingProps>`
  ${commonStyles}
`;
const H6 = styled.h6<privateHeadingProps>`
  ${commonStyles}
`;

export const UiHeading: React.FC<UiHeadingProps> = ({
  level = 3,
  inverseColoration,
  centered,
  children,
  wrap,
}: UiHeadingProps) => {
  switch (level) {
    case 1:
      return (
        <H1 $centered={centered} $level={level} $wrap={wrap} $inverseColoration={inverseColoration}>
          {children}
        </H1>
      );
    case 2:
      return (
        <H2 $centered={centered} $level={level} $wrap={wrap} $inverseColoration={inverseColoration}>
          {children}
        </H2>
      );
    case 3:
      return (
        <H3 $centered={centered} $level={level} $wrap={wrap} $inverseColoration={inverseColoration}>
          {children}
        </H3>
      );
    case 4:
      return (
        <H4 $centered={centered} $level={level} $wrap={wrap} $inverseColoration={inverseColoration}>
          {children}
        </H4>
      );
    case 5:
      return (
        <H5 $centered={centered} $level={level} $wrap={wrap} $inverseColoration={inverseColoration}>
          {children}
        </H5>
      );
    case 6:
      return (
        <H6 $centered={centered} $level={level} $wrap={wrap} $inverseColoration={inverseColoration}>
          {children}
        </H6>
      );
    default:
      return (
        <H3 $centered={centered} $level={level} $wrap={wrap} $inverseColoration={inverseColoration}>
          {children}
        </H3>
      );
  }
};

UiHeading.displayName = 'UiHeading';
