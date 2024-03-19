import React from 'react';

import { UiCard } from '@uireact/card';
import { UiSpacing } from '@uireact/foundation';
import { UiGrid } from '@uireact/grid';
import { UiHeading, UiText } from '@uireact/text';

export const SupportiveColors = (): JSX.Element => (
  <UiSpacing padding={{ all: 'five' }}>
    <UiSpacing padding={{ block: 'four' }}>
      <UiHeading>Supporting colors</UiHeading>
    </UiSpacing>
    <UiSpacing padding={{ block: 'four' }}>
      <UiText>A few supporting colors to be used for informative messages</UiText>
    </UiSpacing>
    <UiGrid cols={4} colsGap="four">
      <UiCard>
        <UiSpacing margin={{ block: 'three' }}>
          <UiText>Positive</UiText>
        </UiSpacing>
        <UiCard weight="10" category="positive" squared>
          <UiText centered>10</UiText>
        </UiCard>
        <UiCard weight="50" category="positive" squared>
          <UiText centered>50</UiText>
        </UiCard>
        <UiCard weight="100" category="positive" squared>
          <UiText centered>100</UiText>
        </UiCard>
        <UiCard weight="150" category="positive" squared>
          <UiText centered>150</UiText>
        </UiCard>
        <UiCard weight="200" category="positive" squared>
          <UiText centered>200</UiText>
        </UiCard>
      </UiCard>
      <UiCard>
        <UiSpacing margin={{ block: 'three' }}>
          <UiText>Error</UiText>
        </UiSpacing>
        <UiCard weight="10" category="error" squared>
          <UiText centered>10</UiText>
        </UiCard>
        <UiCard weight="50" category="error" squared>
          <UiText centered>50</UiText>
        </UiCard>
        <UiCard weight="100" category="error" squared>
          <UiText centered>100</UiText>
        </UiCard>
        <UiCard weight="150" category="error" squared>
          <UiText centered>150</UiText>
        </UiCard>
        <UiCard weight="200" category="error" squared>
          <UiText centered>200</UiText>
        </UiCard>
      </UiCard>
      <UiCard>
        <UiSpacing margin={{ block: 'three' }}>
          <UiText>Warning</UiText>
        </UiSpacing>
        <UiCard weight="10" category="warning" squared>
          <UiText centered>10</UiText>
        </UiCard>
        <UiCard weight="50" category="warning" squared>
          <UiText centered>50</UiText>
        </UiCard>
        <UiCard weight="100" category="warning" squared>
          <UiText centered>100</UiText>
        </UiCard>
        <UiCard weight="150" category="warning" squared>
          <UiText centered>150</UiText>
        </UiCard>
        <UiCard weight="200" category="warning" squared>
          <UiText centered>200</UiText>
        </UiCard>
      </UiCard>
      <UiCard>
        <UiSpacing margin={{ block: 'three' }}>
          <UiText>Negative</UiText>
        </UiSpacing>
        <UiCard weight="10" category="negative" squared>
          <UiText centered>10</UiText>
        </UiCard>
        <UiCard weight="50" category="negative" squared>
          <UiText centered>50</UiText>
        </UiCard>
        <UiCard weight="100" category="negative" squared>
          <UiText centered>100</UiText>
        </UiCard>
        <UiCard weight="150" category="negative" squared>
          <UiText centered>150</UiText>
        </UiCard>
        <UiCard weight="200" category="negative" squared>
          <UiText centered>200</UiText>
        </UiCard>
      </UiCard>
    </UiGrid>
  </UiSpacing>
);
