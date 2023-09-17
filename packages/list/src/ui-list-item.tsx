import React from 'react';

import styled from 'styled-components';

import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

import { UiListItemProps, privateListItemProps } from './types';

const ListItem = styled.li<privateListItemProps>`
  font-size: var(--texts-regular);
`;

const UiListItemSpacing: UiSpacingProps = {
  margin: { all: 'three' },
};

export const UiListItem: React.FC<UiListItemProps> = ({ children, className }: UiListItemProps) => (
  <UiSpacing margin={UiListItemSpacing.margin}>
    <ListItem className={className}>{children}</ListItem>
  </UiSpacing>
);

UiListItem.displayName = 'UiListItem';
