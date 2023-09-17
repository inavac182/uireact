import React from 'react';

import styled from 'styled-components';

import { privateFlexGridProps, UiFlexGridProps } from './types';

const Div = styled.div<privateFlexGridProps>`
  ${(props) => `
    display: ${props.$inline ? 'inline-flex' : 'flex'};
    ${props.$alignItems ? `align-items: ${props.$alignItems};` : ''}
    ${props.$direction ? `flex-direction: ${props.$direction};` : ''}
    ${props.$columnGap ? `column-gap: var(--spacing-${props.$columnGap});` : ''}
    ${props.$gap ? `gap: var(--spacing-${props.$gap});` : ''}
    ${props.$justifyContent ? `justify-content: ${props.$justifyContent};` : ''}
    ${props.$rowGap ? `row-gap: var(--spacing-${props.$rowGap});;` : ''}
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
  inline,
  justifyContent,
  rowGap,
  testId,
  wrap,
}: UiFlexGridProps) => (
  <Div
    $alignItems={alignItems}
    className={className}
    data-testid={testId}
    $columnGap={columnGap}
    $direction={direction}
    $inline={inline}
    $justifyContent={justifyContent}
    $gap={gap}
    $rowGap={rowGap}
    $wrap={wrap}
  >
    {children}
  </Div>
);

UiFlexGrid.displayName = 'UiFlexGrid';
