import { ColorCategories } from '@uireact/foundation';

import { getDynamicBadgeMapper } from '../../../src/theme';

describe('getDynamicBadgeMapper', () => {
  it('Should get correct categories', () => {
    const mapper = getDynamicBadgeMapper(ColorCategories.backgrounds);

    expect(mapper.normal?.background?.category).toBe(ColorCategories.backgrounds);
    expect(mapper.normal?.['border-color']?.category).toBe(ColorCategories.backgrounds);
    expect(mapper.normal?.color?.category).toBe(ColorCategories.backgrounds);
  });
});
