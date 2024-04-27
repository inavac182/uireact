'use client';
import React from 'react';

import { UiBadge } from '@uireact/badge';
import { UiLink } from '@uireact/text';
import { ColorCategory } from '@uireact/foundation';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

type MetadataProps = {
  packageName: string;
  packageJson: {
    version: number,
    peerDependencies: {
      [key in string]: string
    }
  }
}

type BadgeInfo = {
  text: string;
  category: ColorCategory;
}

type BadgesInfo = {
  [key in string]: BadgeInfo;
}

const badgesInfo: BadgesInfo = {
  "framer-motion": {
    text: '😈 Framer motion',
    category: 'positive'
  }
}

export const Metadata = ({ packageName, packageJson }: MetadataProps) => {
  const peers = Object.keys(packageJson.peerDependencies);
  const badges = peers.map((peer) => {
    return badgesInfo[peer] ?? null;
  });

  return (
    <UiFlexGrid columnGap='four' alignItems='center'>
      <sup>
        <UiLink>
          <a href={`https://github.com/inavac182/uireact/blob/main/packages/${packageName}/`} target="_blank">
            v{packageJson.version}
          </a>
        </UiLink>
      </sup>
      <UiFlexGridItem>
        {badges.map((badge, index) => badge && <UiBadge category={badge.category} key={`metadata-version-${index}`}>{badge.text}</UiBadge>)}
      </UiFlexGridItem>
    </UiFlexGrid>
  )
}