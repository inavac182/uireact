import { ColorCategories } from '@uireact/foundation';

export const getCategory = (state: 'POSITIVE' | 'NEGATIVE' | 'ERROR'): ColorCategories => {
  switch (state) {
    case 'ERROR':
      return ColorCategories.error;
    case 'NEGATIVE':
      return ColorCategories.negative;
    case 'POSITIVE':
      return ColorCategories.positive;
    default:
      return ColorCategories.fonts;
  }
};
