import { ColorTokens } from '@uireact/foundation';
import { dynamicViewRowMapper } from '../../src/theme';

describe('dynamicViewRowMapper', () => {
  it('Setting mapper with weigth 10', () => {
    const mapper = dynamicViewRowMapper('10');

    expect(mapper.normal?.background?.token).toBe(ColorTokens.token_10);
    expect(mapper.normal?.color?.token).toBe(ColorTokens.token_50);
  });
  it('Setting mapper with weigth 50', () => {
    const mapper = dynamicViewRowMapper('50');

    expect(mapper.normal?.background?.token).toBe(ColorTokens.token_50);
    expect(mapper.normal?.color?.token).toBe(ColorTokens.token_50);
  });
  it('Setting mapper with weigth 100', () => {
    const mapper = dynamicViewRowMapper('100');

    expect(mapper.normal?.background?.token).toBe(ColorTokens.token_100);
    expect(mapper.normal?.color?.token).toBe(ColorTokens.token_100);
  });
  it('Setting mapper with weigth 150', () => {
    const mapper = dynamicViewRowMapper('150');

    expect(mapper.normal?.background?.token).toBe(ColorTokens.token_150);
    expect(mapper.normal?.color?.token).toBe(ColorTokens.token_150);
  });
  it('Setting mapper with weigth 200', () => {
    const mapper = dynamicViewRowMapper('200');

    expect(mapper.normal?.background?.token).toBe(ColorTokens.token_200);
    expect(mapper.normal?.color?.token).toBe(ColorTokens.token_200);
  });
  it('Should default to 100 if weigth is undefined', () => {
    const mapper = dynamicViewRowMapper();

    expect(mapper.normal?.background?.token).toBe(ColorTokens.token_100);
    expect(mapper.normal?.color?.token).toBe(ColorTokens.token_100);
  });
  it('Should default to 100 if weigth is not recognized', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const mapper = dynamicViewRowMapper('INCORRECT');

    expect(mapper.normal?.background?.token).toBe(ColorTokens.token_100);
    expect(mapper.normal?.color?.token).toBe(ColorTokens.token_100);
  });
});
