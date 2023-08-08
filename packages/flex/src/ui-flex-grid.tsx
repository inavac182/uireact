import React from 'react';

import styled from 'styled-components';

import { getSpacingSize, ThemeContext } from '@uireact/foundation';

import { privateFlexGridProps, UiFlexGridProps } from './types';

const Div = styled.div<privateFlexGridProps>`
  display: flex;

  ${(props) => `
    ${props.$alignItems ? `align-items: ${props.$alignItems};` : ''}
    ${props.$direction ? `flex-direction: ${props.$direction};` : ''}
    ${props.$columnGap ? `column-gap: ${getSpacingSize(props.$customTheme, props.$columnGap)};` : ''}
    ${props.$gap ? `gap: ${getSpacingSize(props.$customTheme, props.$gap)};` : ''}
    ${props.$justifyContent ? `justify-content: ${props.$justifyContent};` : ''}
    ${props.$rowGap ? `row-gap: ${getSpacingSize(props.$customTheme, props.$rowGap)};` : ''}
    ${props.$wrap ? `flex-wrap: ${props.$wrap};` : ''}
  `}
`;

export const UiFlexGrid: React.FC<UiFlexGridProps> = ({
  alignItems,
  children,
  className,
  columnGap,
  direction,
  gap,
  justifyContent,
  rowGap,
  wrap,
}: UiFlexGridProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Div
      $alignItems={alignItems}
      className={className}
      $columnGap={columnGap}
      $customTheme={theme.theme}
      $selectedTheme={theme.selectedTheme}
      $direction={direction}
      $justifyContent={justifyContent}
      $gap={gap}
      $rowGap={rowGap}
      $wrap={wrap}
    >
      {children}
    </Div>
  );
};
UiFlexGrid.displayName = 'UiFlexGrid';
