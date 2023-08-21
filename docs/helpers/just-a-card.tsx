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
        <UiHeading>Normal card</UiHeading>
        <UiText>This is a normal card without any modification</UiText>
        <br />
        <UiButton> Some element 🫶 </UiButton>
      </UiSpacing>
    </UiCard>
  </>
);
