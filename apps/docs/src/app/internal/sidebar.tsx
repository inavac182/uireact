'use client';
import React from 'react';

import styled from 'styled-components';

import { UiText } from '@uireact/text';

const SideSection = styled.div`
  min-width: 300px;
  margin: 0 auto;
  height: 100%;
  border-right: solid 3px var(--tertiary-token_100);
`;

export const Sidebar = () => {
  return (
    <SideSection>
      <UiText>Side</UiText>
    </SideSection>
  )
};
