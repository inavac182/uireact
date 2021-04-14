import React from 'react';
import styled from 'styled-components';

import { getItemSpan } from './private';

interface GridItemProps {
  /** Aligns the item inside its grid block */
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
  /** Number of columns that the item will take */
  cols?: number;
  /** Justify the item inside its grid block */
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  /** Align and Justify the item inside its grid block */
  placeSelf?: 'start' | 'end' | 'center' | 'stretch';
  /** Number of rows that the item will take */
  rows?: number;
}

type UiGridItemProps = GridItemProps & {
  children?: React.ReactNode;
};

const Div = styled.div<GridItemProps>`
  ${(props) => `
    ${getItemSpan(props.cols, 'cols')}
    ${getItemSpan(props.rows, 'rows')}
    ${props.justifySelf ? `justify-self: ${props.justifySelf};` : ''}
    ${props.alignSelf ? `align-self: ${props.alignSelf};` : ''}
    ${props.placeSelf ? `place-self: ${props.placeSelf}` : ''}
  `}
`;

export const UiGridItem: React.FC<UiGridItemProps> = (props: UiGridItemProps) => <Div {...props}>{props.children}</Div>;

UiGridItem.displayName = 'UiGridItem';
