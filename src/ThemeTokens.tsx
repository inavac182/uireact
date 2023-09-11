import * as React from 'react';

import { ColorCategories, ColorTokens } from '../packages/foundation/src';

interface ThemeTokensProps {
  colors: ColorCategories;
}

const ThemeTokens: React.FC<ThemeTokensProps> = ({ colors }: ThemeTokensProps) => {
  return (
    <div>
      <div>
        {Object.keys(colors).map((colorsKey, key) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          const tokensValue = tokens[token] as ColorTokens;

          return <ThemeKeyTable key={`color-key-${key}`} keyLevel={colorsKey} tokens={tokensValue} />;
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const tokenValue = tokens[token] as string;

        return (
          <tr key={`color-token-${key}`}>
            <td
              style={{
                background: `${tokenValue}`,
                color: 'black',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: token === 'token_100' ? '10px' : '0px' }}>{token}</p>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default ThemeTokens;
