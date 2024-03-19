import { getPadding } from '../../src/__private';

describe('getPadding', () => {
  it('Should get correct padding for xlarge size', () => {
    const padding = getPadding('xlarge');

    expect(padding).toBe('15px');
  });

  it('Should get correct padding for large size', () => {
    const padding = getPadding('large');

    expect(padding).toBe('10px');
  });

  it('Should get correct padding for regular size', () => {
    const padding = getPadding('regular');

    expect(padding).toBe('5px');
  });

  it('Should get correct padding for small size', () => {
    const padding = getPadding('small');

    expect(padding).toBe('5px');
  });

  it('Should get correct padding for xsmall size', () => {
    const padding = getPadding('xsmall');

    expect(padding).toBe('5px');
  });

  it('Should get default padding for unknown value', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const padding = getPadding();

    expect(padding).toBe('5px');
  });
});
