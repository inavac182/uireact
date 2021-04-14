import React from 'react';
import styled from 'styled-components';

import { getGridTemplate } from './private';

interface GridProps {
  /** Sets the grid-auto-flow property */
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  /** Number of columns that the grid will have, default is 1 */
  cols?: number;
  /** Gap between each colum */
  colsGap?: number;
  /** Size of each col: px or % */
  colSize?: string;
  /** Total width of the grid */
  gridWidth?: string;
  /** Total height of the grid */
  gridHeight?: string;
  /** Sets if the grid items will be inline */
  inlineGrid?: boolean;
  /** Sets the justify property of all grid items */
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  /** Number of rows that the grid will have, default is 1 */
  rows?: number;
  /** Gap between each row */
  rowsGap?: number;
  /** Size of each row: px or % */
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
    ${props.gridWidth ? `width: ${props.gridWidth};` : ''}
    ${props.gridHeight ? `height: ${props.gridHeight};` : ''}
  `}
`;

export const UiGrid: React.FC<UiGridProps> = (props: UiGridProps) => <Div {...props}>{props.children}</Div>;

UiGrid.displayName = 'UiGrid';
