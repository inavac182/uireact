import { ColorCategory } from '@uireact/foundation';

export const getCategoryClass = (value?: string) => {
  switch (value) {
    case 'error':
      return 'bg-error-100';
    case 'warning':
      return 'bg-warning-100';
    case 'negative':
      return 'bg-negative-100';
    case 'positive':
      return 'bg-positive-100';
    case 'primary':
      return 'bg-primary-100';
    case 'secondary':
      return 'bg-secondary-100';
    case 'tertiary':
      return 'bg-tertiary-100';
    default:
      return null;
  }
};
