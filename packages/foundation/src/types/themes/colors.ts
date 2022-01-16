import { StatefulElements } from './stateful-styles';
import { StaticStyles } from './static-styles';

export interface ColorsType {
  containers: StaticStyles;
  page: StaticStyles;
  texts: StaticStyles;
  statefulElements: StatefulElements;
}

export enum CategoryTheme {
  TEXTS = 'texts',
  CONTAINERS = 'containers',
  PAGE = 'page',
  STATEFUL_ELEMENTS = 'statefulElements',
}
