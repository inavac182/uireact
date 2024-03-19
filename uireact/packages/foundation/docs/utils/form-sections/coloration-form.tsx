import React from 'react';

import { UiSpacing, Coloration } from '@uireact/foundation';
import { UiHeading } from '@uireact/text';
import { UiGrid } from '@uireact/grid';
import { TokensForm } from '.';
import { UiCard } from '@uireact/card';

type ColorationFormProps = {
  coloration: Coloration;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  type: string;
};

export const ColorationForm: React.FC<ColorationFormProps> = ({
  type,
  handleChange,
  coloration,
}: ColorationFormProps) => {
  return (
    <>
      <UiSpacing margin={{ all: 'four' }}>
        <UiCard category="tertiary">
          <UiHeading>{type}</UiHeading>
        </UiCard>
      </UiSpacing>

      <UiSpacing margin={{ all: 'four' }}>
        <UiSpacing padding={{ block: 'four' }}>
          <UiHeading>General colorations</UiHeading>
        </UiSpacing>
        <UiGrid cols={{ small: 1, medium: 2, large: 2, xlarge: 2 }} colsGap="four" rowsGap="four">
          <TokensForm name={`${type}-fonts`} tokens={coloration.fonts} handleChange={handleChange} />
        </UiGrid>
      </UiSpacing>

      <UiSpacing margin={{ all: 'four' }}>
        <UiSpacing padding={{ block: 'four' }}>
          <UiHeading>Level colorations</UiHeading>
        </UiSpacing>
        <UiGrid cols={{ small: 1, medium: 2, large: 2, xlarge: 2 }} colsGap="four" rowsGap="four">
          <TokensForm name={`${type}-primary`} tokens={coloration.primary} handleChange={handleChange} />
          <TokensForm name={`${type}-secondary`} tokens={coloration.secondary} handleChange={handleChange} />
          <TokensForm name={`${type}-tertiary`} tokens={coloration.tertiary} handleChange={handleChange} />
        </UiGrid>
      </UiSpacing>

      <UiSpacing margin={{ all: 'four' }}>
        <UiSpacing padding={{ block: 'four' }}>
          <UiHeading>State colorations</UiHeading>
        </UiSpacing>
        <UiGrid cols={{ small: 1, medium: 2, large: 2, xlarge: 2 }} colsGap="four" rowsGap="four">
          <TokensForm name={`${type}-positive`} tokens={coloration.positive} handleChange={handleChange} />
          <TokensForm name={`${type}-negative`} tokens={coloration.negative} handleChange={handleChange} />
          <TokensForm name={`${type}-error`} tokens={coloration.error} handleChange={handleChange} />
          <TokensForm name={`${type}-warning`} tokens={coloration.warning} handleChange={handleChange} />
        </UiGrid>
      </UiSpacing>
    </>
  );
};
