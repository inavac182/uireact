import { ColorCategory } from '@uireact/foundation';

export const getColor = (value: ColorCategory | string): string => {
  switch (value) {
    case 'error':
      return `var(--error-token_100)`;
    case 'warning':
      return `var(--warning-token_100)`;
    case 'negative':
      return `var(--negative-token_100)`;
    case 'positive':
      return `var(--positive-token_100)`;
    case 'primary':
      return `var(--primary-token_100)`;
    case 'secondary':
      return `var(--secondary-token_100)`;
    case 'tertiary':
      return `var(--tertiary-token_100)`;
    default:
      return value;
  }
};
