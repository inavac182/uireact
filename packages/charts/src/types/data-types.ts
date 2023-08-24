import { ThemedColor } from '.';

export type UiLinearChartLimitData = {
  color?: string | ThemedColor;
  label?: string;
  value: number;
};

export type UiLinearChartCurrentData = {
  color?: string | ThemedColor;
  label?: string;
  value: number;
  labelStatic?: boolean;
};

export type UiLinearChartData = {
  title?: string;
  limit: UiLinearChartLimitData;
  current: UiLinearChartCurrentData;
};
