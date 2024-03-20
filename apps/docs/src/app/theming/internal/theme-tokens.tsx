'use client';
import React from 'react';

import { ColorCategories, ColorTokens } from '@uireact/foundation';

interface ThemeTokensProps {
  colors: ColorCategories;
}

export const ThemeTokens: React.FC<ThemeTokensProps> = ({ colors }: ThemeTokensProps) => {
  return (
    <div>
      <div>
        {Object.keys(colors).map((colorsKey, key) => {
          return <ThemeKeyTable key={`color-key-${key}`} keyLevel={colorsKey} tokens={colors[colorsKey]} />;
        })}
      </div>
    </div>
  );
};

interface ThemeKeyTableProps {
  tokens: ColorTokens;
  keyLevel: string;
}

const ThemeKeyTable = ({ tokens, keyLevel }: ThemeKeyTableProps) => (
  <table style={{ width: '200px', display: 'inline' }}>
    <thead>
      <tr>
        <th style={{ background: 'gray', color: 'white', fontWeight: 'bold' }}>{keyLevel}</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(tokens).map((token, key) => {
        return (
          <tr key={`color-token-${key}`}>
            <td style={{ background: `${tokens[token]}`, color: 'black', padding: '10px', textAlign: 'center' }}>
              <p style={{ margin: token === 'token_100' ? '10px' : '0px' }}>{token}</p>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
