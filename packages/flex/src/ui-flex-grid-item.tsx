import React from 'react';

import styled from 'styled-components';

import { UiFlexGridItemProps } from './types';

const Div = styled.div<UiFlexGridItemProps>`
  ${(props) => `
    ${props.align ? `align-self: ${props.align};` : ''}
    ${props.grow ? `flex-grow: ${props.grow};` : ''}
    ${props.order ? `order: ${props.order};` : ''}
    ${props.shrink ? `flex-shrink: ${props.shrink};` : ''}
  `}
`;

export const UiFlexGridItem: React.FC<UiFlexGridItemProps> = ({
  align,
  children,
  grow,
  order,
  shrink,
}: UiFlexGridItemProps) => {
  return (
    <Div align={align} grow={grow} order={order} shrink={shrink}>
      {children}
    </Div>
  );
};

UiFlexGridItem.displayName = 'UiFlexGridItem';
