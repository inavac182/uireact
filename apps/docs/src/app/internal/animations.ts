import { keyframes } from 'styled-components';
import type { Keyframes } from 'styled-components/dist/types';

const getIndexesOrder = (startingIndex: number): number[] => {
  const indexes: number[] = [];

  while (startingIndex <= 8) {
    indexes.push(startingIndex);
    startingIndex++;
  }

  if (indexes.length <= 8) {
    let index = 1;

    while (indexes.length <= 8) {
      indexes.push(index);
      index++;
    }
  }

  return indexes;
};

export const getColorValue = (index: number): string => {
  switch (index) {
    case 1:
      return '#F08B31';
    case 2:
      return '#7CE91B';
    case 3:
      return '#1BE9D9';
    case 4:
      return '#E91BE0';
    case 5:
      return '#EDF031';
    case 6:
      return '#31F051';
    case 7:
      return '#F0314E';
    case 8:
      return '#31F096';
    default:
      return '#F08B31';
  }
};

export const getAnimation = (index: number): Keyframes => keyframes`
  0% {
    color: ${getColorValue(getIndexesOrder(index)[0])};
  }
  10% {
    color: ${getColorValue(getIndexesOrder(index)[1])};
  }
  25% {
    color: ${getColorValue(getIndexesOrder(index)[2])};
  }
  40% {
    color: ${getColorValue(getIndexesOrder(index)[3])};
  }
  53% {
    color: ${getColorValue(getIndexesOrder(index)[4])};
  }
  68% {
    color: ${getColorValue(getIndexesOrder(index)[5])};
  }
  85% {
    color: ${getColorValue(getIndexesOrder(index)[6])};
  }
  100% {
    color: ${getColorValue(getIndexesOrder(index)[7])};
  }
`;
