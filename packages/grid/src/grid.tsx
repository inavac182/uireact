import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useViewport, useViewportResponse } from '@uireact/foundation';

import { getGridTemplate } from './private';
import { GridBreakpointsDistribution, UiGridProps, privateGridProps } from './types';

const Div = styled.div<privateGridProps>`
  ${(props) => `
    display: ${props.$inlineGrid ? 'inline-grid' : 'grid'};
    ${getGridTemplate(props.$cols, props.$colSize, 'cols')}
    ${getGridTemplate(props.$rows, props.$rowSize, 'rows')}
    ${props.$justifyItems ? `justify-items: ${props.$justifyItems};` : ''}
    ${props.$colsGap ? `column-gap: ${props.$colsGap}px;` : ''}
    ${props.$rowsGap ? `row-gap: ${props.$rowsGap}px;` : ''}
    ${props.$autoFlow ? `grid-auto-flow: ${props.$autoFlow};` : ''}
    ${props.$gridWidth ? `width: ${props.$gridWidth};` : ''}
    ${props.$gridHeight ? `height: ${props.$gridHeight};` : ''}
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

const getSsrValue = (value: number | GridBreakpointsDistribution): number => {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'object') {
    return value.large;
  }

  return 1;
};

export const UiGrid: React.FC<UiGridProps> = (props: UiGridProps) => {
  const viewport = useViewport();
  const [cols, setCols] = useState<number>(getSsrValue(props.cols || 1));

  const [rows, setRows] = useState<number>(getSsrValue(props.rows || 1));

  useEffect(() => {
    if (props.cols && typeof props.cols === 'object') {
      const value = getSpanValueFromBreakpoint(viewport, props.cols);
      setCols(value);
    }
  }, [viewport, props.cols]);

  useEffect(() => {
    if (props.rows && typeof props.rows === 'object') {
      const value = getSpanValueFromBreakpoint(viewport, props.rows);
      setRows(value);
    }
  }, [viewport, props.rows]);

  return (
    <Div
      $autoFlow={props.autoFlow}
      className={props.className}
      $cols={cols}
      $colsGap={props.colsGap}
      $colSize={props.colSize}
      $gridHeight={props.gridHeight}
      $gridWidth={props.gridWidth}
      $inlineGrid={props.inlineGrid}
      $justifyItems={props.justifyItems}
      $rows={rows}
      $rowsGap={props.rowsGap}
      $rowSize={props.rowSize}
    >
      {props.children}
    </Div>
  );
};

UiGrid.displayName = 'UiGrid';
