'use client';
import React from 'react';

import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiLink, UiText } from '@uireact/text';
import { UiSpacing, UiSpacingProps, UiViewport } from '@uireact/foundation';
import { UiHeader } from '@uireact/header';

import styled from 'styled-components';
import { Logo } from './logo';
import { UiIcon } from '@uireact/icons';

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

const Container = styled.div`
  position: absolute;
  width: 100%;
`;

const HeaderSpacing: UiSpacingProps['padding'] = { inline: 'six' };
const MainSectionSpacing: UiSpacingProps['padding'] = { all: 'five'};

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <Container>
      <UiHeader fixed>
        <UiSpacing padding={HeaderSpacing}>
          <UiFlexGrid alignItems='center' justifyContent='space-between'>
            <UiFlexGridItem>
              <Logo />
            </UiFlexGridItem>
            <UiFlexGridItem>
              <UiLink>
                <a href="https://uireact.io">
                  <UiIcon icon='BrandsGithub' />
                </a>
              </UiLink>
            </UiFlexGridItem>
          </UiFlexGrid>
        </UiSpacing>
      </UiHeader>
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
    </Container>
  )
};
