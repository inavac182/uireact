'use client';
import React from 'react';

import styled from 'styled-components';

import { UiTabItemProps, privateTabItemProps } from './types';

const TabItem = styled.div<privateTabItemProps>`
  &:hover {
    background-color: var(--primary-token_100);
    color: var(--fonts-token_100);
  }

  ${(props) => `
    ${props.$selected ? 'border-color: var(--primary-token_100);' : 'border-color: transparent;'}
  `}

  transition: background 0.2s, border-color 0.2s;
  border-width: 0 0 2px 0;
  text-align: center;
  border-style: solid;
  flex-grow: 1;
  align-content: center;
  cursor: pointer;
  padding: 5px 0px 5px 0px;
`;

export function UiTabItem<T>({
  className,
  children,
  handleClick,
  identifier,
  selected,
}: UiTabItemProps<T>): JSX.Element {
  const handleTabClick = React.useCallback(() => {
    handleClick(identifier);
  }, [identifier]);

  return (
    <TabItem className={className} onClick={handleTabClick} $selected={selected}>
      {children}
    </TabItem>
  );
}

UiTabItem.displayName = 'UiTabItem';
