'use client';
import React from 'react';

import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiText } from '@uireact/text';
import { UiSpacing, UiSpacingProps, UiViewport } from '@uireact/foundation';

import styled from 'styled-components';

type DocsLayoutProps = {
  children?: React.ReactNode;
}

const MainSection = styled.div`
  max-width: 600px;
  text-align: justify;
  margin: 0 auto;
`;

const SideSection = styled.div`
  min-width: 300px;
  margin: 0 auto;
  height: 100%;
  border-right: solid 3px var(--tertiary-token_100);
`;


const MainSectionSpacing: UiSpacingProps['padding'] = { all: 'five'};

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <UiFlexGrid columnGap='four'>
      <UiViewport criteria={'l|xl'}>
        <UiFlexGridItem>
          <SideSection>
            <UiText>Side</UiText>
          </SideSection>
        </UiFlexGridItem>
      </UiViewport>
      <UiFlexGridItem grow={1}>
        <UiSpacing padding={MainSectionSpacing}>
          <MainSection>
            {children}
          </MainSection>
        </UiSpacing>
      </UiFlexGridItem>
    </UiFlexGrid>
  )
};
