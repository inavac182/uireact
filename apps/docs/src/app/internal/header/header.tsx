'use client';
import React from 'react';

import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiSpacing, UiSpacingProps, UiViewport } from '@uireact/foundation';
import { UiHeader } from '@uireact/header';
import { UiIcon } from '@uireact/icons';
import { UiLink } from '@uireact/text';

import { Logo } from '../logo';
import { HeaderNavbar } from './navbar';
import { ThemeSwitcher } from '@/app/docs/components/theme-switcher';

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
            <UiFlexGrid alignItems='center' columnGap='five'>
              <UiViewport criteria={'m|l|xl'}>
                <HeaderNavbar />
              </UiViewport>
              <UiLink>
                <a href="https://github.com/inavac182/uireact" target='_blank'>
                  <UiIcon icon='BrandsGithub' />
                </a>
              </UiLink>
              <ThemeSwitcher />
            </UiFlexGrid>
          </UiFlexGridItem>
        </UiFlexGrid>
      </UiSpacing>
    </UiHeader>
  );
};
