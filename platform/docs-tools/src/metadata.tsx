'use client';
import React from 'react';

import { UiBadge } from '@uireact/badge';
import { UiIcon } from '@uireact/icons';
import { UiLink, UiText } from '@uireact/text';
import { ColorCategory, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiFlexGrid } from '@uireact/flex';
import { UiExpandoCard } from '@uireact/expando';
import { UiList, UiListItem } from '@uireact/list';

import { CustomBlockquote } from './custom-block';
import { DocSubHeading } from './doc-subheading';

type MetadataProps = {
  description: string;
  includeInformation: boolean;
  deprecated?: boolean;
  packageName: string;
  packageJson: {
    version: string,
    description: string,
    private?: boolean,
    name: string,
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
  private: {
    text: '‼️ Unreleased - WIP',
    category: 'tertiary'
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

export const Metadata = ({ packageName, packageJson, includeInformation, description, deprecated }: MetadataProps) => {
  const peers = Object.keys(packageJson.peerDependencies);
  const version = packageJson.version;
  const badges = [];
  if (parseInt(version) < 1) {
    badges.push(badgesInfo.beta);
  };

  if (packageJson.private) {
    badges.push(badgesInfo.private);
  }

  badges.push(...peers.map((peer) => {
    return badgesInfo[peer] ?? null;
  }));

  return (
    <UiFlexGrid direction='column' gap='four'>
      <UiText>Package: <UiText fontStyle='bold' inline>{packageJson.name}</UiText></UiText>
      <UiFlexGrid columnGap='four' alignItems='center'>
        <sup>
          <UiLink>
            <a href={`https://github.com/inavac182/uireact/blob/main/packages/${packageName}/`} target="_blank">
              <UiFlexGrid alignItems='center' gap='two'>
                <UiIcon icon='BrandsGithub' size='large' />{' '}
                v{packageJson.version}
              </UiFlexGrid>
            </a>
          </UiLink>
        </sup>
        {badges.map((badge, index) => badge && <UiBadge category={badge.category} key={`metadata-version-${index}`}>{badge.text}</UiBadge>)}
        {deprecated && <UiBadge category='warning' >⚠️ Deprecated</UiBadge>}
      </UiFlexGrid>
      {includeInformation && (
        <>
          {description && (
            <CustomBlockquote>
              <UiText>{description}</UiText>
            </CustomBlockquote>
          )}
          <DocSubHeading>Installation ⚙️</DocSubHeading>
            <UiText>1. Make sure you install peer dependencies first:</UiText>
            <UiExpandoCard collapseLabel='Collapse peer dependencies' expandLabel='Expand peer dependencies' >
              <UiSpacing padding={{left: 'three', top: 'three'}}>
                <UiList type='BULLETED'>
                  {Object.keys(packageJson.peerDependencies).map((index, deep) => (<UiListItem key={`component-peer-${index}`}><UiText>{`${index}: ${packageJson.peerDependencies[index]}`}</UiText></UiListItem>))}
                </UiList>
              </UiSpacing>
            </UiExpandoCard>
            <UiText>2. Install package:</UiText>
            <CustomBlockquote>
              <UiText> npm i -S {packageJson.name}</UiText>
            </CustomBlockquote>
        </>
      )}
    </UiFlexGrid>
  )
}