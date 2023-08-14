import React from 'react';

import styled from 'styled-components';

import { ThemeContext } from '@uireact/foundation';

import { UiTabsProps, privateTabsProps } from './types';

const TabDiv = styled.div<privateTabsProps>`
  display: flex;

  ${(props) => `
    ${
      props.$rounded
        ? ` 
          > :first-child { border-radius: 3px 0px 0px 0px; }
          > :last-child { border-radius: 0px 3px 0px 0px; }`
        : ''
    }
  `}
`;

export const UiTabs: React.FC<UiTabsProps> = ({ children, className, rounded }: UiTabsProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <TabDiv $customTheme={theme.theme} $selectedTheme={theme.selectedTheme} className={className} $rounded={rounded}>
      {children}
    </TabDiv>
  );
};

UiTabs.displayName = 'UiTabs';
