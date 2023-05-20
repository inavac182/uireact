import React from 'react';

import { UiCard } from '@uireact/card';
import { UiSpacing, Sizing, ColorTokens, Spacing } from '@uireact/foundation';
import { UiInput } from '@uireact/form';
import { UiHeading, UiText } from '@uireact/text';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

type SpacingFormProps = {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  spacing: Spacing;
  name: string;
};

export const SpacingForm: React.FC<SpacingFormProps> = ({ spacing, name, handleChange }: SpacingFormProps) => {
  return (
    <>
      <UiSpacing margin={{ all: Sizing.four }}>
        <UiCard weight={ColorTokens.token_200}>
          <UiHeading>Spacing</UiHeading>
        </UiCard>
      </UiSpacing>
      <UiSpacing margin={{ all: Sizing.four }}>
        <UiCard>
          <UiFlexGrid columnGap={Sizing.four}>
            <UiFlexGridItem>
              <UiText>All values are used in pixels</UiText>
              <UiInput placeholder="one" name={`${name}-one`} label="1" value={spacing.one} onChange={handleChange} />
              <UiInput placeholder="two" name={`${name}-two`} label="2" value={spacing.two} onChange={handleChange} />
              <UiInput
                placeholder="three"
                name={`${name}-three`}
                label="3"
                value={spacing.three}
                onChange={handleChange}
              />
              <UiInput
                placeholder="four"
                name={`${name}-four`}
                label="4"
                value={spacing.four}
                onChange={handleChange}
              />
              <UiInput
                placeholder="five"
                name={`${name}-five`}
                label="5"
                value={spacing.five}
                onChange={handleChange}
              />
              <UiInput placeholder="six" name={`${name}-six`} label="6" value={spacing.six} onChange={handleChange} />
              <UiInput
                placeholder="seven"
                name={`${name}-sevn`}
                label="7"
                value={spacing.seven}
                onChange={handleChange}
              />
            </UiFlexGridItem>
            <UiFlexGridItem grow={1}>
              <UiText>Spacing used as margin between the inner and outer card:</UiText>
              <UiCard theme="primary">
                <UiSpacing margin={{ all: Sizing.one }}>
                  <UiCard theme="secondary">
                    <UiText>One</UiText>
                  </UiCard>
                </UiSpacing>
              </UiCard>
              <br />
              <UiCard theme="primary">
                <UiSpacing margin={{ all: Sizing.two }}>
                  <UiCard theme="secondary">
                    <UiText theme="negative">Two</UiText>
                  </UiCard>
                </UiSpacing>
              </UiCard>
              <br />
              <UiCard theme="primary">
                <UiSpacing margin={{ all: Sizing.three }}>
                  <UiCard theme="secondary">
                    <UiText>Three</UiText>
                  </UiCard>
                </UiSpacing>
              </UiCard>
              <br />
              <UiCard theme="primary">
                <UiSpacing margin={{ all: Sizing.four }}>
                  <UiCard theme="secondary">
                    <UiText>Four</UiText>
                  </UiCard>
                </UiSpacing>
              </UiCard>
              <br />
              <UiCard theme="primary">
                <UiSpacing margin={{ all: Sizing.five }}>
                  <UiCard theme="secondary">
                    <UiText>Five</UiText>
                  </UiCard>
                </UiSpacing>
              </UiCard>
              <br />
              <UiCard theme="primary">
                <UiSpacing margin={{ all: Sizing.six }}>
                  <UiCard theme="secondary">
                    <UiText>Six</UiText>
                  </UiCard>
                </UiSpacing>
              </UiCard>
              <br />
              <UiCard theme="primary">
                <UiSpacing margin={{ all: Sizing.seven }}>
                  <UiCard theme="secondary">
                    <UiText>Seven</UiText>
                  </UiCard>
                </UiSpacing>
              </UiCard>
            </UiFlexGridItem>
          </UiFlexGrid>
        </UiCard>
      </UiSpacing>
    </>
  );
};
