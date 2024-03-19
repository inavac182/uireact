import { ColorCategory, SizesProp, UiReactElementProps } from '@uireact/foundation';

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
  /** If input is required */
  required?: boolean;
} & UiReactElementProps;

export type privateInputProps = {
  /** Input field disabled state */
  $disabled?: boolean;
  /** Error label for input field */
  error?: string;
  /** Input name for form submittion */
  name?: string;
  /** Label for input field */
  $label?: string;
  /** Label on top of field */
  $labelOnTop?: boolean;
  /** CB for when value in input changes */
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  /** Placeholder string to render inside input field */
  placeholder?: string;
  /* React ref */
  ref?: React.Ref<HTMLInputElement>;
  /** Input field theme */
  $category?: ColorCategory;
  /** Input field type */
  type?: HTMLInputElement['type'];
  /** Input field value */
  value?: HTMLInputElement['value'];
  $size?: SizesProp;
  required?: boolean;
  $withIcon?: boolean;
};
