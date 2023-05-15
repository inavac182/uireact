import { ColorCategory, TextSize, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

export type UiLinkProps = {
  /* Represents the theme to use for the link, default PRIMARY */
  theme?: ColorCategory;
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

export type privateLinkProps = Omit<UiLinkProps, 'theme'> & {
  category: ColorCategory;
} & UiReactPrivateElementProps;
