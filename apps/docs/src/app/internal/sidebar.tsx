'use client';
import React from 'react';

import styled from 'styled-components';

import { UiLink } from '@uireact/text';
import { UiNavbar, UiNavbarItem } from '@uireact/navbar';

const SideSection = styled.div`
  min-width: 300px;
  margin: 0 auto;
  height: 100%;
  border-right: solid 3px var(--tertiary-token_100);
`;

export const Sidebar = () => {
  return (
    <SideSection>
      <UiNavbar>
        <UiNavbarItem>
          <UiLink>
            <a href="#">
                Side bar
            </a>
          </UiLink>
        </UiNavbarItem>
      </UiNavbar>
    </SideSection>
  )
};
