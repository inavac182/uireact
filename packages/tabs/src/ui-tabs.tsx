import React from 'react';

import styled from 'styled-components';

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

export const UiTabs: React.FC<UiTabsProps> = ({ children, className, rounded }: UiTabsProps) => (
  <TabDiv className={className} $rounded={rounded}>
    {children}
  </TabDiv>
);

UiTabs.displayName = 'UiTabs';
