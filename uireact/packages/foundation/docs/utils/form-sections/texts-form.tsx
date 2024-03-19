import React from 'react';

import { UiCard } from '@uireact/card';
import { UiHeading, UiText } from '@uireact/text';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiInput } from '@uireact/form';
import { TextSize, TextSizes } from '@uireact/foundation';

type TextsFormProps = {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  texts: TextSizes;
  name: string;
};

export const TextsForm: React.FC<TextsFormProps> = ({ handleChange, name, texts }: TextsFormProps) => {
  return (
    <UiCard>
      <UiHeading>Texts</UiHeading>
      <UiGrid cols={2}>
        <UiGridItem>
          <UiInput
            name={`${name}-xlarge`}
            placeholder="xlarge"
            label="xlarge"
            value={texts.xlarge}
            onChange={handleChange}
          />
          <UiInput
            name={`${name}-large`}
            placeholder="large"
            label="large"
            value={texts.large}
            onChange={handleChange}
          />
          <UiInput
            name={`${name}-regular`}
            placeholder="regular"
            label="regular"
            value={texts.regular}
            onChange={handleChange}
          />
          <UiInput
            name={`${name}-small`}
            placeholder="small"
            label="small"
            value={texts.small}
            onChange={handleChange}
          />
          <UiInput
            name={`${name}-xsmall`}
            placeholder="xsmall"
            label="xsmall"
            value={texts.xsmall}
            onChange={handleChange}
          />
        </UiGridItem>
        <UiGridItem>
          <UiText size={TextSize.xlarge}>Extra large</UiText>
          <UiText size={TextSize.large}>Large</UiText>
          <UiText size={TextSize.regular}>Regular</UiText>
          <UiText size={TextSize.small}>Small</UiText>
          <UiText size={TextSize.xsmall}>Extra small</UiText>
        </UiGridItem>
      </UiGrid>
    </UiCard>
  );
};
