import { ColorCategory, SizesProp, UiReactElementProps } from '@uireact/foundation';

export type UiInputTimepickerProps = {
  /** Controlled hour value */
  hour?: number;
  /** Controlled minute value */
  minute?: number;
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
  /** Label for hours heading */
  hoursLabel?: string;
  /** Label for minutes heading */
  minutesLabel?: string;
  /** Label on top of field */
  labelOnTop?: boolean;
  /** CB for when value in input changes */
  onChange: (hour?: number, minute?: number) => void;
  /** Placeholder string to render inside input field */
  placeholder?: string;
  /* React ref */
  ref?: React.Ref<HTMLInputElement>;
  /** Input field theme */
  category?: ColorCategory;
  /** Input font size */
  size?: SizesProp;
  /** If input is required */
  required?: boolean;
} & UiReactElementProps;
