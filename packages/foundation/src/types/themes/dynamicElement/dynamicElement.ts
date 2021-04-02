import { StaticElementType } from '../staticElement';

export enum DynamicElementStateEnum {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export enum DynamicElementActionEnum {
  NORMAL = 'normal',
  ACTIVE = 'active',
  HOVER = 'hover',
  DISABLED = 'disabled',
}

export type DynamicElementType = {
  [key in DynamicElementActionEnum]: StaticElementType;
};
