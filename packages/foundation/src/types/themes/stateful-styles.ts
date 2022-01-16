import { ActionableStyles } from '.';

export enum Status {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export type StatefulElements = {
  [key in Status]: ActionableStyles;
};
