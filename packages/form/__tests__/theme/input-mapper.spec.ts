import { getPadding } from '../../src/theme';

describe('getPadding', () => {
  it('Should get correct padding on small', () => {
    const result = getPadding('small');
    expect(result).toBe('5px');
  });
  it('Should get correct padding on xsmall', () => {
    const result = getPadding('xsmall');
    expect(result).toBe('5px');
  });
  it('Should get correct padding on regular', () => {
    const result = getPadding('regular');
    expect(result).toBe('5px');
  });
  it('Should get correct padding on large', () => {
    const result = getPadding('large');
    expect(result).toBe('10px');
  });
  it('Should get correct padding on xlarge', () => {
    const result = getPadding('xlarge');
    expect(result).toBe('15px');
  });
  it('Should get correct padding on unknown', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const result = getPadding('XXXX');
    expect(result).toBe('5px');
  });
});
