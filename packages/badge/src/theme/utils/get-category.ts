import { ColorCategories } from '@uireact/foundation';

export const getCategory = (
  category?: 'primary' | 'secondary' | 'tertiary' | 'positive' | 'negative' | 'error'
): ColorCategories => {
  switch (category) {
    case 'primary':
      return ColorCategories.primary;
    case 'secondary':
      return ColorCategories.secondary;
    case 'tertiary':
      return ColorCategories.tertiary;
    case 'positive':
      return ColorCategories.positive;
    case 'negative':
      return ColorCategories.negative;
    case 'error':
      return ColorCategories.error;
    default:
      return ColorCategories.primary;
  }
};
