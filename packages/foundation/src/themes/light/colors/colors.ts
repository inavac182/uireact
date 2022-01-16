import { success, error, info, warning } from './states';
import { ColorsType } from '../../../types/themes/colors';
import { StatefulElements } from '../../../types/themes/stateful-styles';

const statefulElements: StatefulElements = {
  success,
  error,
  info,
  warning,
};

export const colors: ColorsType = {
  texts: {
    heading: '#000000',
    paragraph: '#0d0d0d',
  },
  containers: {
    background: '#f2f2f2',
    border: '#e6e6e6',
    contrast: '#66ff66',
    paragraph: '#0d0d0d',
    shadows: '#cccccc',
    softBackground: '#cccccc',
  },
  page: {
    background: '#ffffff',
    softBackground: '#f2f2f2',
    strongBackground: '#b3b3b3',
  },
  statefulElements,
};
