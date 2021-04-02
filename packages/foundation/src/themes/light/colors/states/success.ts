import { DynamicElementType } from '../../../../types/themes/dynamicElement';
import { StaticElementType } from '../../../../types/themes/staticElement';

const normal: StaticElementType = {
  background: '#009933',
  border: '#006622',
  paragraph: '#ffffff',
  heading: '#000000',
  shadows: '#000000',
};

const active: StaticElementType = {
  background: '#248f24',
  border: '#006622',
  paragraph: '#ffffff',
  heading: '#000000',
  shadows: '#000000',
};

const disabled: StaticElementType = {
  background: '#d6f5d6',
  border: '#006622',
  paragraph: '#ffffff',
  heading: '#000000',
  shadows: '#000000',
};

const hover: StaticElementType = {
  background: '#33cc33',
  border: '#006622',
  paragraph: '#ffffff',
  heading: '#000000',
  shadows: '#000000',
};

export const success: DynamicElementType = {
  normal,
  active,
  disabled,
  hover,
};
