import { ColorCategory, SizesProp, SpacingDistribution, UiReactElementProps } from '@uireact/foundation';
import { AriaAttributes } from 'react';

export type UiRangeInputTick = {
  value: number;
  label?: string;
}

export type UiRangeInputProps = {
  /** Input field disabled state */
  disabled?: boolean;
  /** Error label for input field */
  error?: string;
  /** An icon element to be rendered inside the input */
  icon?: React.ReactElement;
  /** Input name for form submittion */
  name: string;
  /** Label for input field */
  label?: string;
  /** Label on top of field */
  labelOnTop?: boolean;
  /** CB for when value in input changes */
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  /* React ref */
  ref?: React.Ref<HTMLInputElement>;
  /** Input field theme */
  category?: ColorCategory;
  /** Prefix to display on value labels */
  prefix?: string;
  /** Min value in range */
  min: number;
  /** Max value in range */
  max: number;
  /** The value of each step in the rage */
  step?: number;
  /** Renders the min and max values as labels */
  showRangeLabels?: boolean;
  /** Input field value */
  value: number;
  /** To override the default input padding */
  padding?: SpacingDistribution;
  /** If input is required */
  required?: boolean;
  /** The ticks information to render in the range */
  ticks?: UiRangeInputTick[];
  /** If a text input should be rendered next to the range to type in the value */
  showTextInput?: boolean;
} & UiReactElementProps & AriaAttributes;
