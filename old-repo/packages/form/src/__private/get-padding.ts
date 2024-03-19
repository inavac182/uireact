import { SizesProp } from '@uireact/foundation';

export const getPadding = (textSize: SizesProp): string => {
  switch (textSize) {
    case 'xsmall':
    case 'small':
    case 'regular':
      return '5px';
    case 'large':
      return '10px';
    case 'xlarge':
      return '15px';
    default:
      return '5px';
  }
};
