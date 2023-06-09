import { Orientation } from '../types';

export const getBorderRadiusStyling = (orientation?: Orientation, isFirst?: boolean, isLast?: boolean): string => {
  let topLeft = '0';
  let topRight = '0';
  let bottomLeft = '0';
  let bottomRight = '0';

  if (orientation === 'inline') {
    if (isFirst) {
      topLeft = '5px';
      bottomLeft = '5px';
    }

    if (isLast) {
      topRight = '5px';
      bottomRight = '5px';
    }
  }

  if (orientation === 'stacked') {
    if (isFirst) {
      topLeft = '5px';
      topRight = '5px';
    }

    if (isLast) {
      bottomLeft = '5px';
      bottomRight = '5px';
    }
  }

  return `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`;
};
