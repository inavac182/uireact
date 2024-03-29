import { ColorCategory } from '@uireact/foundation';

export type privateLinearChartProps = {
  /** Represents the limit value for the chart, the 100% value */
  $limitValue: number;
  /** Represents the label for the limit value */
  $limitLabel?: string;
  /** Represents the color for the limit value in the chart */
  $limitColor?: string | ColorCategory;
  /** Represents the current value of the covered possibel area  */
  $currentValue: number;
  /** Represents the label for the current value */
  $currentLabel?: string;
  /** Represents the color for the current value */
  $currentColor?: string | ColorCategory;
  /** Represents the chart's title */
  $title?: string;
};
