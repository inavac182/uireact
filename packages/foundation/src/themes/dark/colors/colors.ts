import { success, error, info, warning } from './states';
import { ColorsType, DynamicElementsType } from '../../../types/themes/colors';

const dynamicElements: DynamicElementsType = {
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
    background: '#006bb3',
    border: '#0099ff',
    contrast: '#66ff66',
    font: '#f2f2f2',
    shadows: '#0d0d0d',
    softBackground: '#f2f2f2',
  },
  page: {
    background: '#1a1a1a',
    softBackground: '#404040',
    strongBackground: '#000000',
  },
  dynamicElements,
};
