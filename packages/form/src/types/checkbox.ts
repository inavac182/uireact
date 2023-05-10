import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiCheckboxProps = {
  /** If checkbox is checked */
  checked?: boolean;
  /** Checkbox name used to identify it */
  name?: string;
  /** Label to render next to checkbox */
  label?: string;
  /** On change CB to handle checked state */
  onChange?: () => void;
} & UiReactElementProps;

export type privateCheckboxProps = UiCheckboxProps & UiReactPrivateElementProps;
