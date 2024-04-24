import React from 'react';

import { UiCard } from '@uireact/card';
import { UiSpacing } from '@uireact/foundation';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiHeading, UiText } from '@uireact/text';

export const MainColors = (): JSX.Element => (
  <UiSpacing padding={{ all: 'five' }}>
    <UiGrid cols={3} colsGap="six">
      <UiGridItem cols={2}>
        <UiSpacing padding={{ block: 'three' }}>
          <UiHeading>Neutral Colors</UiHeading>
        </UiSpacing>
        <UiSpacing margin={{ block: 'three' }}>
          <UiText size="small">This colors should be very neutral as they are used mainly for backgrounds</UiText>
        </UiSpacing>
        <UiGrid cols={2} colsGap="six">
          <UiCard>
            <UiSpacing margin={{ block: 'three' }}>
              <UiText>Primary</UiText>
            </UiSpacing>
            <UiCard weight="10" category="primary" squared>
              <UiText centered>10</UiText>
            </UiCard>
            <UiCard weight="50" category="primary" squared>
              <UiText centered>50</UiText>
            </UiCard>
            <UiCard weight="100" category="primary" squared>
              <UiText centered>100</UiText>
            </UiCard>
            <UiCard weight="150" category="primary" squared>
              <UiText centered>150</UiText>
            </UiCard>
            <UiCard weight="200" category="primary" squared>
              <UiText centered>200</UiText>
            </UiCard>
          </UiCard>
          <UiCard>
            <UiSpacing margin={{ block: 'three' }}>
              <UiText>Secondary</UiText>
            </UiSpacing>
            <UiCard weight="10" category="secondary" squared>
              <UiText centered>10</UiText>
            </UiCard>
            <UiCard weight="50" category="secondary" squared>
              <UiText centered>50</UiText>
            </UiCard>
            <UiCard weight="100" category="secondary" squared>
              <UiText centered>100</UiText>
            </UiCard>
            <UiCard weight="150" category="secondary" squared>
              <UiText centered>150</UiText>
            </UiCard>
            <UiCard weight="200" category="secondary" squared>
              <UiText centered>200</UiText>
            </UiCard>
          </UiCard>
        </UiGrid>
      </UiGridItem>
      <UiGridItem>
        <UiSpacing padding={{ block: 'three' }}>
          <UiHeading>Brand Color</UiHeading>
        </UiSpacing>
        <UiSpacing margin={{ block: 'three' }}>
          <UiText size="small">Also known as the tertiary color</UiText>
        </UiSpacing>
        <UiCard>
          <UiSpacing margin={{ block: 'three' }}>
            <UiText>Tertiary</UiText>
          </UiSpacing>
          <UiCard weight="10" category="tertiary" squared>
            <UiText centered>10</UiText>
          </UiCard>
          <UiCard weight="50" category="tertiary" squared>
            <UiText centered>50</UiText>
          </UiCard>
          <UiCard weight="100" category="tertiary" squared>
            <UiText centered>100</UiText>
          </UiCard>
          <UiCard weight="150" category="tertiary" squared>
            <UiText centered>150</UiText>
          </UiCard>
          <UiCard weight="200" category="tertiary" squared>
            <UiText centered>200</UiText>
          </UiCard>
        </UiCard>
      </UiGridItem>
    </UiGrid>
  </UiSpacing>
);
