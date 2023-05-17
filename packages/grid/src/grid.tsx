import React from 'react';

import styled from 'styled-components';

import { useViewport, useViewportResponse } from '@uireact/foundation';

import { getGridTemplate } from './private';

export type GridBreakpointsDistribution = {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
};

interface GridProps {
  /** Sets the grid-auto-flow property */
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  /** Number of columns that the grid will have, default is 1 */
  cols?: number | GridBreakpointsDistribution;
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
  rows?: number | GridBreakpointsDistribution;
  /** Gap between each row */
  rowsGap?: number;
  /** Size of each row: px or % */
  rowSize?: string;
}

export type UiGridProps = GridProps & {
  children?: React.ReactNode;
};

const Div = styled.div<GridProps>`
  ${(props) => `
    display: ${props.inlineGrid ? 'inline-grid' : 'grid'};
    ${getGridTemplate(props.cols, props.colSize, 'cols')}
    ${getGridTemplate(props.rows, props.rowSize, 'rows')}
    ${props.justifyItems ? `justify-items: ${props.justifyItems};` : ''}
    ${props.colsGap ? `column-gap: ${props.colsGap}px;` : ''}
    ${props.rowsGap ? `row-gap: ${props.rowsGap}px;` : ''}
    ${props.autoFlow ? `grid-auto-flow: ${props.autoFlow};` : ''}
    ${props.gridWidth ? `width: ${props.gridWidth};` : ''}
    ${props.gridHeight ? `height: ${props.gridHeight};` : ''}
  `}
`;

const getSpanValueFromBreakpoint = (
  viewport: useViewportResponse,
  gridBreakpointsDistribution: GridBreakpointsDistribution
): number => {
  if (viewport.isSmall) {
    return gridBreakpointsDistribution.small;
  }

  if (viewport.isMedium) {
    return gridBreakpointsDistribution.medium;
  }

  if (viewport.isLarge) {
    return gridBreakpointsDistribution.large;
  }

  // istanbul ignore next
  if (viewport.isXLarge) {
    return gridBreakpointsDistribution.xlarge;
  }

  // istanbul ignore next
  return 1;
};

export const UiGrid: React.FC<UiGridProps> = (props: UiGridProps) => {
  const viewport = useViewport();
  const cols = !props.cols
    ? 1
    : typeof props.cols === 'number'
    ? props.cols
    : getSpanValueFromBreakpoint(viewport, props.cols);
  const rows = !props.rows
    ? 1
    : typeof props.rows === 'number'
    ? props.rows
    : getSpanValueFromBreakpoint(viewport, props.rows);

  return (
    <Div
      autoFlow={props.autoFlow}
      cols={cols}
      colsGap={props.colsGap}
      colSize={props.colSize}
      gridHeight={props.gridHeight}
      gridWidth={props.gridWidth}
      inlineGrid={props.inlineGrid}
      justifyItems={props.justifyItems}
      rows={rows}
      rowsGap={props.rowsGap}
      rowSize={props.rowSize}
    >
      {props.children}
    </Div>
  );
};

UiGrid.displayName = 'UiGrid';
