import { ColorCategories } from '@uireact/foundation';
import { getCategory } from '../../../src/theme';

describe('getCategory', () => {
  it('Should get correct category when is primary', () => {
    const category = getCategory('PRIMARY');

    expect(category).toBe(ColorCategories.primary);
  });

  it('Should get correct category when is secondary', () => {
    const category = getCategory('SECONDARY');

    expect(category).toBe(ColorCategories.secondary);
  });

  it('Should get correct category when is tertiary', () => {
    const category = getCategory('TERTIARY');

    expect(category).toBe(ColorCategories.tertiary);
  });

  it('Should get correct category when is positive', () => {
    const category = getCategory('POSITIVE');

    expect(category).toBe(ColorCategories.positive);
  });

  it('Should get correct category when is negative', () => {
    const category = getCategory('NEGATIVE');

    expect(category).toBe(ColorCategories.negative);
  });

  it('Should get correct category when is error', () => {
    const category = getCategory('ERROR');

    expect(category).toBe(ColorCategories.error);
  });
});
