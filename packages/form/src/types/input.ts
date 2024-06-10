import { ColorCategory, SizesProp, SpacingDistribution, UiReactElementProps } from '@uireact/foundation';
import { AriaAttributes } from 'react';

export type UiInputProps = {
  /** Input field disabled state */
  disabled?: boolean;
  /** Error label for input field */
  error?: string;
  /** An icon element to be rendered inside the input */
  icon?: React.ReactElement;
  /** Input name for form submittion */
  name?: string;
  /** Label for input field */
  label?: string;
  /** Label on top of field */
  labelOnTop?: boolean;
  /** CB for when value in input changes */
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  /** Placeholder string to render inside input field */
  placeholder?: string;
  /* React ref */
  ref?: React.Ref<HTMLInputElement>;
  /** Input field theme */
  category?: ColorCategory;
  /** Input field type */
  type?: HTMLInputElement['type'];
  /** Input field value */
  value?: HTMLInputElement['value'];
  /** Input font size */
  size?: SizesProp;
  /** To override the default input padding */
  padding?: SpacingDistribution;
  /** If input is required */
  required?: boolean;
} & UiReactElementProps & AriaAttributes;
