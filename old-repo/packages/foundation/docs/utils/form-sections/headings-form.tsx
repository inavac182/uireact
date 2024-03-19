import React from 'react';

import { UiCard } from '@uireact/card';
import { UiHeading } from '@uireact/text';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiInput } from '@uireact/form';
import { HeadingSizes } from '@uireact/foundation';

type HeadingsFormProps = {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  headings: HeadingSizes;
  name: string;
};

export const HeadingsForm: React.FC<HeadingsFormProps> = ({ handleChange, headings, name }: HeadingsFormProps) => {
  return (
    <UiCard>
      <UiHeading>Headings</UiHeading>
      <UiGrid cols={2}>
        <UiGridItem>
          <UiInput
            name={`${name}-level1`}
            placeholder="level 1"
            label="1"
            value={headings.level1}
            onChange={handleChange}
          />
          <UiInput
            name={`${name}-level2`}
            placeholder="level 2"
            label="2"
            value={headings.level2}
            onChange={handleChange}
          />
          <UiInput
            name={`${name}-level3`}
            placeholder="level 3"
            label="3"
            value={headings.level3}
            onChange={handleChange}
          />
          <UiInput
            name={`${name}-level4`}
            placeholder="level 4"
            label="4"
            value={headings.level4}
            onChange={handleChange}
          />
          <UiInput
            name={`${name}-level5`}
            placeholder="level 5"
            label="5"
            value={headings.level5}
            onChange={handleChange}
          />
          <UiInput
            name={`${name}-level6`}
            placeholder="level 6"
            label="6"
            value={headings.level6}
            onChange={handleChange}
          />
        </UiGridItem>
        <UiGridItem>
          <UiHeading level={1}>Heading 1</UiHeading>
          <UiHeading level={2}>Heading 2</UiHeading>
          <UiHeading level={3}>Heading 3</UiHeading>
          <UiHeading level={4}>Heading 4</UiHeading>
          <UiHeading level={5}>Heading 5</UiHeading>
          <UiHeading level={6}>Heading 6</UiHeading>
        </UiGridItem>
      </UiGrid>
    </UiCard>
  );
};
