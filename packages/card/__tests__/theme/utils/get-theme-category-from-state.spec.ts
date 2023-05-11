import { ColorCategories } from '@uireact/foundation';
import { getCategoryFromState } from '../../../src/theme/utils';

describe('getCategoryFromState', () => {
  it('Should get correct category when is positive', () => {
    const category = getCategoryFromState('POSITIVE');

    expect(category).toBe(ColorCategories.positive);
  });
  it('Should get correct category when is negative', () => {
    const category = getCategoryFromState('NEGATIVE');

    expect(category).toBe(ColorCategories.negative);
  });
  it('Should get correct category when is error', () => {
    const category = getCategoryFromState('ERROR');

    expect(category).toBe(ColorCategories.error);
  });
  it('Should get correct category when is null', () => {
    const category = getCategoryFromState();

    expect(category).toBe(ColorCategories.backgrounds);
  });
});
