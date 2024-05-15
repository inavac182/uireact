'use client';
import React from 'react';
import { styled } from 'styled-components';

import { getItemEndSpan, getItemSpan } from './private';
import { UiReactElementProps } from '@uireact/foundation';

type UiGridItemProps = {
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
} & UiReactElementProps;

type privateGridItemProps = {
  /** Aligns the item inside its grid block */
  $alignSelf?: 'start' | 'end' | 'center' | 'stretch';
  /** Number of columns that the item will take */
  $cols?: number;
  /** The starting column for the grid item */
  $startingCol?: number;
  /** The starting row for the grid item */
  $startingRow?: number;
  /** Justify the item inside its grid block */
  $justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  /** Align and Justify the item inside its grid block */
  $placeSelf?: 'start' | 'end' | 'center' | 'stretch';
  /** Number of rows that the item will take */
  $rows?: number;
} & UiReactElementProps;

const Div = styled.div<privateGridItemProps>`
  ${(props) => `
    ${getItemSpan(props.$cols, 'cols')}
    ${props.$startingCol ? getItemEndSpan(props.$cols, 'cols', props.$startingCol) : ''}
    ${props.$startingRow ? getItemEndSpan(props.$rows, 'rows', props.$startingRow) : ''}
    ${getItemSpan(props.$rows, 'rows')}
    ${props.$justifySelf ? `justify-self: ${props.$justifySelf};` : ''}
    ${props.$alignSelf ? `align-self: ${props.$alignSelf};` : ''}
    ${props.$placeSelf ? `place-self: ${props.$placeSelf}` : ''}
  `}
`;

export const UiGridItem: React.FC<UiGridItemProps> = (props: UiGridItemProps) => (
  <Div
    $alignSelf={props.alignSelf}
    $cols={props.cols}
    className={props.className}
    $justifySelf={props.justifySelf}
    $placeSelf={props.placeSelf}
    $rows={props.rows}
    data-testid={props.testId}
    $startingCol={props.startingCol}
    $startingRow={props.startingRow}
  >
    {props.children}
  </Div>
);

UiGridItem.displayName = 'UiGridItem';
