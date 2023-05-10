import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiInputProps = {
  /** Error label for input field */
  error?: string;
  /** Input name for form submittion */
  name?: string;
  /** Label for input field */
  label?: string;
  /** Label on top of field */
  labelOnTop?: boolean;
  /** CB for when value in input changes */
  onChange?: () => void;
  /** Placeholder string to render inside input field */
  placeholder?: string;
  /* React ref */
  ref?: React.Ref<HTMLInputElement>;
} & UiReactElementProps;

export type privateInputProps = UiInputProps & UiReactPrivateElementProps;
