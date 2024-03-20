'use client';
import React from 'react';

import Link from 'next/link';

import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiNavbar, UiNavbarItem } from '@uireact/navbar';
import { UiLink } from '@uireact/text';


const LinkSpacing: UiSpacingProps['padding'] = { left: 'five', top: 'four', bottom: 'four', right: 'five' };

export const HeaderNavbar = () => {
  return (
    <UiNavbar align='center' category='secondary'>
      <UiNavbarItem>
        <UiLink>
          <Link href="/">
            <UiSpacing padding={LinkSpacing}>
              About
            </UiSpacing>
          </Link>
        </UiLink>
      </UiNavbarItem>
      <UiNavbarItem>
        <UiLink>
          <Link href="/usage">
            <UiSpacing padding={LinkSpacing}>
              Usage
            </UiSpacing>
          </Link>
        </UiLink>
      </UiNavbarItem>
      <UiNavbarItem>
        <UiLink>
          <Link href="/theming">
            <UiSpacing padding={LinkSpacing}>
              Theming
            </UiSpacing>
          </Link>
        </UiLink>
      </UiNavbarItem>
    </UiNavbar>
  );
};
