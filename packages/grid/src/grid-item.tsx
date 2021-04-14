import React from 'react';
import styled from 'styled-components';

import { getItemSpan } from './private';

interface GridItemProps {
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
  cols?: number;
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  placeSelf?: 'start' | 'end' | 'center' | 'stretch';
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
