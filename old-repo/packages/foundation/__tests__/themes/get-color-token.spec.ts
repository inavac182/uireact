import { ColorTokens, getColorTokenValue } from '../../src';

describe('getColorTokenValue', () => {
  it('Should get token 10 ', () => {
    const result = getColorTokenValue('10');
    expect(result).toBe(ColorTokens.token_10);
  });

  it('Should get token 50 ', () => {
    const result = getColorTokenValue('50');
    expect(result).toBe(ColorTokens.token_50);
  });

  it('Should get token 100 ', () => {
    const result = getColorTokenValue('100');
    expect(result).toBe(ColorTokens.token_100);
  });

  it('Should get token 150 ', () => {
    const result = getColorTokenValue('150');
    expect(result).toBe(ColorTokens.token_150);
  });

  it('Should get token 200 ', () => {
    const result = getColorTokenValue('200');
    expect(result).toBe(ColorTokens.token_200);
  });

  it('Should get token 100 when unrecognized value is provided ', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const result = getColorTokenValue('XXX');
    expect(result).toBe(ColorTokens.token_100);
  });
});
