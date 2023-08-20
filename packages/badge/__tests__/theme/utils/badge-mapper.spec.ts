import { ColorCategories } from '@uireact/foundation';

import { getDynamicBadgeMapper } from '../../../src/theme';

describe('getDynamicBadgeMapper', () => {
  it('Should get correct categories', () => {
    const mapper = getDynamicBadgeMapper(ColorCategories.primary);

    expect(mapper.normal?.background?.category).toBe(ColorCategories.primary);
    expect(mapper.normal?.['border-color']?.category).toBe(ColorCategories.primary);
    expect(mapper.normal?.color?.category).toBe(ColorCategories.primary);
  });
});
