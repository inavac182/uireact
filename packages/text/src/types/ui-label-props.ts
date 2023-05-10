import { TextSize, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiLabelProps = {
  /* For what elements this label is */
  htmlFor?: string;
  /* Text size to be used, default is SMALL */
  size?: TextSize;
  /* State to represent from text */
  state?: 'POSITIVE' | 'NEGATIVE' | 'ERROR';
} & UiReactElementProps;

export type privateLabelProps = UiLabelProps & {
  size: TextSize;
} & UiReactPrivateElementProps;
