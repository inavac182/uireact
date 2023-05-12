import React from 'react';

import styled from 'styled-components';

import { ThemeContext } from '@uireact/foundation';

import { UiTabsProps, privateTabsProps } from './types';

const TabDiv = styled.div<privateTabsProps>`
  display: flex;
`;

export const UiTabs: React.FC<UiTabsProps> = ({ children, className }: UiTabsProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <TabDiv customTheme={theme.theme} selectedTheme={theme.selectedTheme} className={className}>
      {children}
    </TabDiv>
  );
};

UiTabs.displayName = 'UiTabs';
