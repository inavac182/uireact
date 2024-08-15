'use client';
import React from 'react';

import Link from 'next/link';

import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiNavbar, UiNavbarItem } from '@uireact/navbar';
import { UiLink } from '@uireact/text';

const LinkSpacing: UiSpacingProps['padding'] = { block: 'two', inline: 'three' };

export const HeaderNavbar = () => {
  return (
    <UiNavbar category='tertiary' styling='bordered' noBackground>
      <UiNavbarItem>
        <UiLink category='fonts' fontStyle='bold' padding={LinkSpacing}>
          <Link href="/">
            Home
          </Link>
        </UiLink>
      </UiNavbarItem>
      <UiNavbarItem>
        <UiLink category='fonts' fontStyle='bold' padding={LinkSpacing}>
          <Link href="/docs">
            Docs
          </Link>
        </UiLink>
      </UiNavbarItem>
      <UiNavbarItem>
        <UiLink category='fonts' fontStyle='bold' padding={LinkSpacing}>
          <Link href="/create-theme">
            Create theme
          </Link>
        </UiLink>
      </UiNavbarItem>
    </UiNavbar>
  );
};
