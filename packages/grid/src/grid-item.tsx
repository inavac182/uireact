import React, { CSSProperties, useMemo } from 'react';

import { UiReactElementProps } from '@uireact/foundation';
import { getGridItemClasses } from './private';

export type UiGridItemProps = {
  /** Aligns the item inside its grid block */
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
  /** Number of columns that the item will take */
  cols?: number;
  /** The starting column for the grid item */
  startingCol?: number;
  /** The starting row for the grid item */
  startingRow?: number;
  /** Justify the item inside its grid block */
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  /** Align and Justify the item inside its grid block */
  placeSelf?: 'start' | 'end' | 'center' | 'stretch';
  /** Number of rows that the item will take */
  rows?: number;
  /** Test id used for testing purposes */
  testId?: string;
} & UiReactElementProps;

export const UiGridItem: React.FC<UiGridItemProps> = (props: UiGridItemProps) => {
  const styles = useMemo((): CSSProperties => {
    const cols = props.cols || 1;
    const rows = props.rows || 1;

    return {
      gridColumnStart: `span ${cols}`,
      gridColumnEnd: props.startingCol ? props.startingCol + cols : undefined,
      gridRowStart: `span ${rows}`,
      gridRowEnd: props.startingRow ? props.startingRow + rows : undefined
    }
  }, [props.cols, props.rows, props.startingCol, props.startingRow]);

  return (
    <div className={getGridItemClasses(props)} data-testid={props.testId} style={styles}>
      {props.children}
    </div>
  );
};

UiGridItem.displayName = 'UiGridItem';
