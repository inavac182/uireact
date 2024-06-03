'use client';
import React from 'react';

import { UiBadge } from '@uireact/badge';
import { UiIcon } from '@uireact/icons';
import { UiHeading, UiLink, UiText } from '@uireact/text';
import { ColorCategory, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiFlexGrid } from '@uireact/flex';
import { UiCard } from '@uireact/card';

type MetadataProps = {
  packageName: string;
  packageJson: {
    version: string,
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
  beta: {
    text: '‼️ Beta',
    category: 'warning'
  },
  "framer-motion": {
    text: '😈 Framer motion',
    category: 'positive'
  },
  "styled-components": {
    text: 'Styled components',
    category: 'error'
  }
}

const MetadaSpacing: UiSpacingProps['padding'] = { block: 'four' };

export const Metadata = ({ packageName, packageJson }: MetadataProps) => {
  const peers = Object.keys(packageJson.peerDependencies);
  const version = packageJson.version;
  const badges = [];
  if (parseInt(version) < 1) {
    badges.push(badgesInfo.beta);
  };

  badges.push(...peers.map((peer) => {
    return badgesInfo[peer] ?? null;
  }));

  return (
    <UiSpacing padding={MetadaSpacing}>
      <UiFlexGrid columnGap='four' alignItems='center'>
        <sup>
          <UiLink>
            <a href={`https://github.com/inavac182/uireact/blob/main/packages/${packageName}/`} target="_blank">
                <UiIcon icon='BrandsGithub' size='large' />{' '}
                v{packageJson.version}
            </a>
          </UiLink>
        </sup>
        {badges.map((badge, index) => badge && <UiBadge category={badge.category} key={`metadata-version-${index}`}>{badge.text}</UiBadge>)}
      </UiFlexGrid>
      <br />
      {badges.map((badge, index) => {
        if (badge?.text === 'Styled components') {
          return (
            <UiCard padding={{ all: 'four'}} key={`messages-${index}`} category='warning'>
              <UiHeading level={5}>CSS-in-JS</UiHeading>
              <UiText size='small'>
                This component uses styled components, we are moving away from it in favor of SCSS modules. Stay tuned as this component will be migrated soon.
              </UiText>
            </UiCard>
          );
        }

        return null;
      })}
      
    </UiSpacing>
  )
}