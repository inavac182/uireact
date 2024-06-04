import React, { CSSProperties, useEffect, useMemo, useState } from 'react';

import { useViewport, useViewportResponse } from '@uireact/foundation';

import { getGridClasses, getGridTemplate } from './private';
import { GridBreakpointsDistribution, UiGridProps } from './types';

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
  const styles = useMemo((): CSSProperties => {
    const colsTemplate = getGridTemplate(cols, props.colSize);
    const rowsTemplate = getGridTemplate(rows, props.rowSize);

    return {
      gridTemplateColumns: colsTemplate,
      gridTemplateRows: rowsTemplate
    }
  }, [cols, props.colSize, props.rowSize, rows]);

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
    <div className={getGridClasses(props)} style={styles} data-testid={props.testId}>
      {props.children} 
    </div>
  );
};

UiGrid.displayName = 'UiGrid';
