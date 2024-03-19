import React from 'react';

import { UiCard } from '@uireact/card';
import { UiSpacing, TextSize } from '@uireact/foundation';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiHeading, UiText, UiLink, UiLabel } from '@uireact/text';
import { UiIcon } from '@uireact/icons';

export const Texts = () => (
  <UiSpacing padding={{ all: 'five' }}>
    <UiGrid cols={3} colsGap="four">
      <UiGridItem>
        <UiSpacing padding={{ block: 'four' }}>
          <UiHeading>Texts</UiHeading>
        </UiSpacing>
        <UiCard category="primary">
          <UiText size={TextSize.xlarge}>Lorem ipsum</UiText>
          <UiText size={TextSize.large}>Lorem ipsum</UiText>
          <UiText size={TextSize.regular}>Lorem ipsum</UiText>
          <UiText size={TextSize.small}>Lorem ipsum</UiText>
          <UiText size={TextSize.xsmall}>Lorem ipsum</UiText>
        </UiCard>
      </UiGridItem>
      <UiGridItem>
        <UiSpacing padding={{ block: 'four' }}>
          <UiHeading>Headings</UiHeading>
        </UiSpacing>
        <UiCard category="primary">
          <UiHeading level={1}>Lorem ipsum</UiHeading>
          <UiHeading level={2}>Lorem ipsum</UiHeading>
          <UiHeading level={3}>Lorem ipsum</UiHeading>
          <UiHeading level={4}>Lorem ipsum</UiHeading>
          <UiHeading level={5}>Lorem ipsum</UiHeading>
          <UiHeading level={6}>Lorem ipsum</UiHeading>
        </UiCard>
      </UiGridItem>
      <UiGridItem>
        <UiSpacing padding={{ block: 'four' }}>
          <UiHeading>Link</UiHeading>
        </UiSpacing>
        <UiCard category="primary">
          <UiLink>
            <a href="#">Lorem ipsum</a>
          </UiLink>
        </UiCard>
        <UiSpacing padding={{ block: 'four' }}>
          <UiHeading>Label</UiHeading>
        </UiSpacing>
        <UiCard category="primary">
          <UiLabel>Lorem ipsum</UiLabel>
        </UiCard>
        <UiSpacing padding={{ block: 'four' }}>
          <UiHeading>Icon</UiHeading>
        </UiSpacing>
        <UiCard category="primary">
          <UiIcon icon="Airplay" size="xlarge" /> <UiIcon icon="Airplay" size="large" />{' '}
          <UiIcon icon="Airplay" size="regular" /> <UiIcon icon="Airplay" size="small" />{' '}
          <UiIcon icon="Airplay" size="xsmall" />
        </UiCard>
      </UiGridItem>
    </UiGrid>
  </UiSpacing>
);
