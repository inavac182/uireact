'use client';
import React from 'react';

import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiHeader } from '@uireact/header';
import { UiIcon } from '@uireact/icons';
import { UiLink } from '@uireact/text';

import { Logo } from './logo';

const HeaderSpacing: UiSpacingProps['padding'] = { inline: 'six' };

export const Header = () => {
  return (
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
  );
};
