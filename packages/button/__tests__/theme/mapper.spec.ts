import { ColorCategories } from '@uireact/foundation';
import { getDynamicMapper } from '../../src/theme';

describe('getDynamicMapper', () => {
  it('should get correct mapper when is primary', () => {
    const mapper = getDynamicMapper(ColorCategories.primary);

    expect(mapper.normal?.background?.category).toEqual(ColorCategories.primary);
    expect(mapper.normal?.color?.inverse).toBeFalsy();
  });

  it('should get correct mapper when is clear', () => {
    const mapper = getDynamicMapper(ColorCategories.primary, true);

    expect(mapper.normal?.background).toBeUndefined();
    expect(mapper.normal?.['border-color']).toBeUndefined();
  });

  it('should get correct mapper when is secondary', () => {
    const mapper = getDynamicMapper(ColorCategories.secondary);

    expect(mapper.normal?.background?.category).toEqual(ColorCategories.secondary);
  });

  it('should NOT set inverse to fonts when category is tertiary', () => {
    const mapper = getDynamicMapper(ColorCategories.tertiary);

    expect(mapper.normal?.background?.category).toEqual(ColorCategories.tertiary);
    expect(mapper.normal?.color?.inverse).toBeFalsy();
  });

  it('should NOT  set inverse to fonts when category is error', () => {
    const mapper = getDynamicMapper(ColorCategories.error);

    expect(mapper.normal?.background?.category).toEqual(ColorCategories.error);
    expect(mapper.normal?.color?.inverse).toBeFalsy();
  });

  it('should NOT set inverse to fonts when category is positive', () => {
    const mapper = getDynamicMapper(ColorCategories.positive);

    expect(mapper.normal?.color?.category).toEqual(ColorCategories.fonts);
    expect(mapper.normal?.color?.inverse).toBeFalsy();
  });

  it('should NOT set inverse to fonts when category is negative', () => {
    const mapper = getDynamicMapper(ColorCategories.negative);

    expect(mapper.normal?.color?.category).toEqual(ColorCategories.fonts);
    expect(mapper.normal?.color?.inverse).toBeFalsy();
  });

  it('should NOT set inverse to fonts when category is secondary', () => {
    const mapper = getDynamicMapper(ColorCategories.secondary);

    expect(mapper.normal?.color?.category).toEqual(ColorCategories.fonts);
    expect(mapper.normal?.color?.inverse).toBeFalsy();
  });
});
