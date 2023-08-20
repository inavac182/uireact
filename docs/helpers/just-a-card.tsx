import React from 'react';

import { UiCard } from '@uireact/card';
import { UiHeading, UiText } from '@uireact/text';
import { UiButton } from '@uireact/button';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

const cardContentPadding: UiSpacingProps['padding'] = { all: 'six' };

export const JustACard = () => (
  <>
    <UiCard>
      <UiSpacing padding={cardContentPadding}>
        <UiHeading>Custom card</UiHeading>
        <UiText>The styling of this card has been extended to have different radius in each corner</UiText>
        <br />
        <UiButton> Some element 🫶 </UiButton>
      </UiSpacing>
    </UiCard>
  </>
);
