import { ColorCategory } from '@uireact/foundation';
import { ThemedColor } from '.';

export type UiLinearChartLimitData = {
  color?: string | ThemedColor | ColorCategory;
  label?: string;
  value: number;
};

export type UiLinearChartCurrentData = {
  color?: string | ThemedColor | ColorCategory;
  label?: string;
  value: number;
  labelStatic?: boolean;
};

export type UiLinearChartData = {
  title?: string;
  limit: UiLinearChartLimitData;
  current: UiLinearChartCurrentData;
};
