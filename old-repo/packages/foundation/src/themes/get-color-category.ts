import { ColorCategories, ColorCategory } from '../types/enums/color-categories';

export const getColorCategory = (category?: ColorCategory): ColorCategories => {
  switch (category) {
    case 'error':
      return ColorCategories.error;
    case 'warning':
      return ColorCategories.warning;
    case 'negative':
      return ColorCategories.negative;
    case 'positive':
      return ColorCategories.positive;
    case 'primary':
      return ColorCategories.primary;
    case 'secondary':
      return ColorCategories.secondary;
    case 'tertiary':
      return ColorCategories.tertiary;
    default:
      return ColorCategories.fonts;
  }
};
