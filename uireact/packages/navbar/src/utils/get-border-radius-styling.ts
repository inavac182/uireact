import { Orientation } from '../types';

export const getBorderRadiusStyling = (orientation?: Orientation, isFirst?: boolean, isLast?: boolean): string => {
  let topLeft = '0';
  let topRight = '0';
  let bottomLeft = '0';
  let bottomRight = '0';

  if (orientation === 'inline') {
    if (isFirst) {
      topLeft = '3px';
      bottomLeft = '3px';
    }

    if (isLast) {
      topRight = '3px';
      bottomRight = '3px';
    }
  }

  if (orientation === 'stacked') {
    if (isFirst) {
      topLeft = '3px';
      topRight = '3px';
    }

    if (isLast) {
      bottomLeft = '3px';
      bottomRight = '3px';
    }
  }

  return `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
};
