import { TextSize, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiLinkProps = {
  /* Category to represent from text, default PRIMARY */
  category?: 'POSITIVE' | 'NEGATIVE' | 'ERROR' | 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  /** URL to be opened */
  href?: string;
  /** Handle link click */
  handleClick?: () => void;
  /** React ref */
  ref?: React.Ref<HTMLAnchorElement>;
  /** referrer policy */
  referrerpolicy?: string;
  /** Link size, default REGULAR */
  size?: TextSize;
  /** Link target */
  target?: string;
} & UiReactElementProps;

export type privateLinkProps = UiLinkProps & {
  category: 'POSITIVE' | 'NEGATIVE' | 'ERROR' | 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
} & UiReactPrivateElementProps;
