import { ColorTokens, getNextColorToken } from '../../src';

describe('getNextColorToken', () => {
  it('Gets correct next token when is token 10', () => {
    const nextToken = getNextColorToken(ColorTokens.token_10);
    expect(nextToken).toBe(ColorTokens.token_50);
  });
  it('Gets correct next token when is token 50', () => {
    const nextToken = getNextColorToken(ColorTokens.token_50);
    expect(nextToken).toBe(ColorTokens.token_100);
  });
  it('Gets correct next token when is token 100', () => {
    const nextToken = getNextColorToken(ColorTokens.token_100);
    expect(nextToken).toBe(ColorTokens.token_150);
  });
  it('Gets correct next token when is token 150', () => {
    const nextToken = getNextColorToken(ColorTokens.token_150);
    expect(nextToken).toBe(ColorTokens.token_200);
  });
  it('Gets correct next token when is token 200', () => {
    const nextToken = getNextColorToken(ColorTokens.token_200);
    expect(nextToken).toBe(ColorTokens.token_200);
  });

  it('Defaults to token 100 when token is unrecognized', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const nextToken = getNextColorToken('XXXX');
    expect(nextToken).toBe(ColorTokens.token_100);
  });
});
