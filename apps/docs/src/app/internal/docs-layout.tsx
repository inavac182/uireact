'use client';
import React from 'react';

import styled from 'styled-components';

import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiSpacing, UiSpacingProps, UiViewport } from '@uireact/foundation';

import { Sidebar } from './sidebar';
import { Header } from './header';

type DocsLayoutProps = {
  children?: React.ReactNode;
}

const MainSection = styled.div`
  max-width: 600px;
  text-align: justify;
  margin: 0 auto;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
`;

const MainSectionSpacing: UiSpacingProps['padding'] = { all: 'five'};

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <Container>
      <Header />
      <UiFlexGrid columnGap='four'>
        <UiViewport criteria={'l|xl'}>
          <UiFlexGridItem>
            <Sidebar />
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
    </Container>
  )
};
