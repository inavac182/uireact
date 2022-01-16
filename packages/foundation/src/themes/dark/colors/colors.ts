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
    heading: '#ffffff',
    paragraph: '#f2f2f2',
  },
  containers: {
    background: '#333333',
    border: '#0099ff',
    contrast: '#66ff66',
    paragraph: '#f2f2f2',
    shadows: '#0d0d0d',
    softBackground: '#f2f2f2',
  },
  page: {
    background: '#1a1a1a',
    softBackground: '#404040',
    strongBackground: '#000000',
  },
  statefulElements,
};
