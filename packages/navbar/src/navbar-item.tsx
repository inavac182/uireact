import React from 'react';

import { ThemeContext } from '@uireact/foundation';

import styled from 'styled-components';

import { UiNavbarItemProps, privateNavbarItemProps } from './types';

const Div = styled.div<privateNavbarItemProps>`
  ${(props) => `
    ${!props.active ? 'background: transparent !important;' : ''}
  `}
`;

export const UiNavbarItem: React.FC<UiNavbarItemProps> = ({ active, children }: UiNavbarItemProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Div active={active} $customTheme={themeContext.theme} $selectedTheme={themeContext.selectedTheme}>
      {children}
    </Div>
  );
};

UiNavbarItem.displayName = 'UiNavbarItem';
