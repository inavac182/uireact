import React from 'react';

import { UiCard } from '@uireact/card';
import { UiInput } from '@uireact/form';
import { UiSpacing, Sizing, Tokens } from '@uireact/foundation';
import { UiHeading, UiLabel } from '@uireact/text';
import { UiGrid } from '@uireact/grid';

type TokensFormProps = {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  tokens: Tokens;
  name: string;
};

export const TokensForm: React.FC<TokensFormProps> = ({ name, handleChange, tokens }: TokensFormProps) => {
  return (
    <UiCard>
      <UiSpacing padding={{ all: Sizing.three }}>
        <UiHeading>{name}</UiHeading>
        <UiGrid cols={2} rows={5}>
          <UiInput
            name={`${name}-token_10`}
            placeholder="token 10"
            label="10"
            value={tokens.token_10}
            onChange={handleChange}
          />
          <div style={{ backgroundColor: tokens.token_10 }}></div>
          <UiInput
            name={`${name}-token_50`}
            placeholder="token 50"
            label="50"
            value={tokens.token_50}
            onChange={handleChange}
          />
          <div style={{ backgroundColor: tokens.token_50 }}></div>
          <UiInput
            name={`${name}-token_100`}
            placeholder="token 100"
            label="100"
            value={tokens.token_100}
            onChange={handleChange}
          />
          <div style={{ backgroundColor: tokens.token_100 }}></div>
          <UiInput
            name={`${name}-token_150`}
            placeholder="token 150"
            label="150"
            value={tokens.token_150}
            onChange={handleChange}
          />
          <div style={{ backgroundColor: tokens.token_150 }}></div>
          <UiInput
            name={`${name}-token_200`}
            placeholder="token 200"
            label="200"
            value={tokens.token_200}
            onChange={handleChange}
          />
          <div style={{ backgroundColor: tokens.token_200 }}></div>
        </UiGrid>
      </UiSpacing>
    </UiCard>
  );
};
