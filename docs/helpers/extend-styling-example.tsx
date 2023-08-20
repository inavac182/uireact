import React from 'react';

import styled from 'styled-components';

import { UiCard } from '@uireact/card';
import { UiHeading, UiText } from '@uireact/text';
import { UiButton } from '@uireact/button';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

const CustomUiCard = styled(UiCard)`
  border-radius: 20px 50px 20px 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const cardContentPadding: UiSpacingProps['padding'] = { all: 'six' };

export const ExtendStyleExpample = () => (
  <>
    <CustomUiCard>
      <UiSpacing padding={cardContentPadding}>
        <UiHeading>Custom card</UiHeading>
        <UiText>The styling of this card has been extended to have different radius in each corner</UiText>
        <br />
        <UiButton> Some element 🫶 </UiButton>
      </UiSpacing>
    </CustomUiCard>
  </>
);
