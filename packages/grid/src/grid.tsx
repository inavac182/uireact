import React from 'react';
import styled from 'styled-components';

import { getGridTemplate } from './private';

interface GridProps {
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  cols?: number;
  colsGap?: number;
  colSize?: string;
  gridWidth?: string;
  gridHeight?: string;
  inlineGrid?: boolean;
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  rows?: number;
  rowsGap?: number;
  rowSize?: string;
}

type UiGridProps = GridProps & {
  children?: React.ReactNode;
};

const Div = styled.div<GridProps>`
  ${(props) => `
    display: ${props.inlineGrid ? 'inline-grid' : 'grid'};
    ${getGridTemplate(props.cols, props.colSize, 'cols')}
    ${getGridTemplate(props.rows, props.rowSize, 'rows')}
    ${props.justifyItems ? `justify-items: ${props.justifyItems};` : ''}
    ${props.colsGap ? `column-gap: ${props.colsGap};` : ''}
    ${props.rowsGap ? `row-gap: ${props.rowsGap};` : ''}
    ${props.autoFlow ? `grid-auto-flow: ${props.autoFlow};` : ''}
  `}
`;

export const UiGrid: React.FC<UiGridProps> = (props: UiGridProps) => <Div {...props}>{props.children}</Div>;

UiGrid.displayName = 'UiGrid';
