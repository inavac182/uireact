import { DynamicElementStateEnum, DynamicElementType } from './dynamicElement';
import { StaticElementType } from './staticElement';

export type DynamicElementsType = {
  [key in DynamicElementStateEnum]: DynamicElementType;
};

export interface ColorsType {
  dynamicElements: DynamicElementsType;
  containers: StaticElementType;
  page: StaticElementType;
  texts: StaticElementType;
}

export enum CategoryTheme {
  TEXTS = 'texts',
  CONTAINERS = 'containers',
  PAGE = 'page',
  DYNAMIC_ELEMENTS = 'dynamicElements',
}
