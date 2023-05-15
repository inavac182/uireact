import { ColorCategories } from '@uireact/foundation';
import { getColorCategory } from '../../src';

describe('getColorCategory', () => {
  it('Should get correct category when is primary', () => {
    const category = getColorCategory('primary');

    expect(category).toBe(ColorCategories.primary);
  });

  it('Should get correct category when is secondary', () => {
    const category = getColorCategory('secondary');

    expect(category).toBe(ColorCategories.secondary);
  });

  it('Should get correct category when is tertiary', () => {
    const category = getColorCategory('tertiary');

    expect(category).toBe(ColorCategories.tertiary);
  });

  it('Should get correct category when is positive', () => {
    const category = getColorCategory('positive');

    expect(category).toBe(ColorCategories.positive);
  });

  it('Should get correct category when is negative', () => {
    const category = getColorCategory('negative');

    expect(category).toBe(ColorCategories.negative);
  });

  it('Should get correct category when is error', () => {
    const category = getColorCategory('error');

    expect(category).toBe(ColorCategories.error);
  });

  it('Should get correct category when is warning', () => {
    const category = getColorCategory('warning');

    expect(category).toBe(ColorCategories.warning);
  });

  it('Should get default category when is null', () => {
    const category = getColorCategory();

    expect(category).toBe(ColorCategories.fonts);
  });

  it('Should get default category when is unrecognized', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const category = getColorCategory('XXXXX');

    expect(category).toBe(ColorCategories.fonts);
  });
});
