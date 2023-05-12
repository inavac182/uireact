import { ColorCategories } from '@uireact/foundation';

export const getCategory = (
  state: 'POSITIVE' | 'NEGATIVE' | 'ERROR' | 'PRIMARY' | 'SECONDARY' | 'TERTIARY'
): ColorCategories => {
  switch (state) {
    case 'ERROR':
      return ColorCategories.error;
    case 'NEGATIVE':
      return ColorCategories.negative;
    case 'POSITIVE':
      return ColorCategories.positive;
    case 'PRIMARY':
      return ColorCategories.primary;
    case 'SECONDARY':
      return ColorCategories.secondary;
    case 'TERTIARY':
      return ColorCategories.tertiary;
    default:
      return ColorCategories.fonts;
  }
};
