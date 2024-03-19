import { Alignment, Orientation } from '../types';

export const getFlexAlignment = (alignItems?: Alignment, orientation?: Orientation): string => {
  switch (alignItems) {
    case 'start':
      if (orientation === 'stacked') {
        return 'align-items: flex-start;';
      }

      return 'justify-content: flex-start;';
    case 'center':
      if (orientation === 'stacked') {
        return 'align-items: center;';
      }

      return 'justify-content: center;';
    case 'end':
      if (orientation === 'stacked') {
        return 'align-items: flex-end;';
      }

      return 'justify-content: flex-end;';
    default:
      if (orientation === 'stacked') {
        return 'align-items: center;';
      }

      return 'justify-content: center;';
  }
};
