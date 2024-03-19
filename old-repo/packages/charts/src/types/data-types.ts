import { ColorCategory } from '@uireact/foundation';

export type UiLinearChartLimitData = {
  color?: string | ColorCategory;
  label?: string;
  value: number;
};

export type UiLinearChartCurrentData = {
  color?: string | ColorCategory;
  label?: string;
  value: number;
  labelStatic?: boolean;
};

export type UiLinearChartData = {
  title?: string;
  limit: UiLinearChartLimitData;
  current: UiLinearChartCurrentData;
};
