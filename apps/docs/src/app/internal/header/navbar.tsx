'use client';
import React from 'react';

import Link from 'next/link';

import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiNavbar, UiNavbarItem } from '@uireact/navbar';
import { UiLink } from '@uireact/text';


const LinkSpacing: UiSpacingProps['padding'] = { left: 'five', top: 'four', bottom: 'four', right: 'five' };

export const HeaderNavbar = () => {
  return (
    <UiNavbar align='center' category='secondary' styling='bordered'>
      <UiNavbarItem>
        <UiLink>
          <Link href="/">
            <UiSpacing padding={LinkSpacing}>
              Home
            </UiSpacing>
          </Link>
        </UiLink>
      </UiNavbarItem>
      <UiNavbarItem>
        <UiLink>
          <Link href="/docs">
            <UiSpacing padding={LinkSpacing}>
              Docs
            </UiSpacing>
          </Link>
        </UiLink>
      </UiNavbarItem>
      <UiNavbarItem>
        <UiLink>
          <Link href="/create-theme">
            <UiSpacing padding={LinkSpacing}>
              Create theme
            </UiSpacing>
          </Link>
        </UiLink>
      </UiNavbarItem>
    </UiNavbar>
  );
};
