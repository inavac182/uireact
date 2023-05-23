import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, UiSpacing, UiSpacingProps, getTextSize } from '@uireact/foundation';

import { UiListItemProps, privateListItemProps } from './types';

const ListItem = styled.li<privateListItemProps>`
  ${(props) => `
    font-size: ${getTextSize(props.customTheme, TextSize.regular)};
  `}
`;

const UiListItemSpacing: UiSpacingProps = {
  margin: { all: 'three' },
};

export const UiListItem: React.FC<UiListItemProps> = ({ children, className }: UiListItemProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <UiSpacing margin={UiListItemSpacing.margin}>
      <ListItem customTheme={theme.theme} selectedTheme={theme.selectedTheme} className={className}>
        {children}
      </ListItem>
    </UiSpacing>
  );
};

UiListItem.displayName = 'UiListItem';
