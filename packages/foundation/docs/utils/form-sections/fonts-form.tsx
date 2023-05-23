import React from 'react';

import { UiCard } from '@uireact/card';
import { UiInput } from '@uireact/form';
import { UiSpacing, Sizing, ColorTokens, Texts } from '@uireact/foundation';
import { UiHeading, UiText } from '@uireact/text';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

type FontsFormProps = {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  texts: Texts;
  name: string;
};

export const FontsForm: React.FC<FontsFormProps> = ({ handleChange, texts, name }: FontsFormProps) => {
  return (
    <>
      <UiSpacing margin={{ all: 'four' }}>
        <UiCard weight={ColorTokens.token_200}>
          <UiHeading>Fonts</UiHeading>
        </UiCard>
      </UiSpacing>
      <UiSpacing margin={{ all: 'four' }}>
        <UiCard>
          <UiFlexGrid columnGap={Sizing.five}>
            <UiFlexGridItem>
              <UiInput placeholder="font-family" value={texts.font} name={`${name}-font`} onChange={handleChange} />
            </UiFlexGridItem>
            <UiFlexGridItem>
              <UiText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu metus a ligula gravida pretium ac sit
                amet nisl. Suspendisse nec orci dapibus, sagittis urna non, egestas nulla. Phasellus vulputate tellus
                eget orci fermentum, sit amet gravida urna pulvinar. Nulla facilisi. Mauris sed magna ipsum.
              </UiText>
            </UiFlexGridItem>
          </UiFlexGrid>
        </UiCard>
      </UiSpacing>
    </>
  );
};
