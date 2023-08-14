import { UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiTabItemProps = {
  /** Tab identifier to be shared when clicked */
  identifier: string | number;
  /** Selected state for tab item */
  selected?: boolean;
  /** On click CB for tab item */
  handleClick: (identifier: string | number) => void;
} & UiReactElementProps;

export type privateTabItemProps = {
  /** Tab identifier to be shared when clicked */
  $identifier: string | number;
  /** Selected state for tab item */
  $selected?: boolean;
  /** On click CB for tab item */
} & UiReactPrivateElementProps;
