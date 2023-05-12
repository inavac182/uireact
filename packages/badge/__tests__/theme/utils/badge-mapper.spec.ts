import { ColorCategories } from '@uireact/foundation';
import { getCategory } from '../../../src/theme/utils';

describe('getCategory', () => {
  it('Should get primary when primary category is used', () => {
    const category = getCategory('primary');

    expect(category).toBe(ColorCategories.primary);
  });

  it('Should get primary when secondary category is used', () => {
    const category = getCategory('secondary');

    expect(category).toBe(ColorCategories.secondary);
  });

  it('Should get primary when tertiary category is used', () => {
    const category = getCategory('tertiary');

    expect(category).toBe(ColorCategories.tertiary);
  });

  it('Should get primary when positive category is used', () => {
    const category = getCategory('positive');

    expect(category).toBe(ColorCategories.positive);
  });

  it('Should get primary when negative category is used', () => {
    const category = getCategory('negative');

    expect(category).toBe(ColorCategories.negative);
  });

  it('Should get primary when error category is used', () => {
    const category = getCategory('error');

    expect(category).toBe(ColorCategories.error);
  });

  it('Should get primary when error category is null', () => {
    const category = getCategory();

    expect(category).toBe(ColorCategories.primary);
  });
});
