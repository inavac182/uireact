import { HTMLAttributeReferrerPolicy } from 'react';

import { ColorCategory, TextSize, UiReactElementProps, UiReactPrivateElementProps } from '@uireact/foundation';

import { FontStyle } from './ui-text-props';

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
  referrerpolicy?: HTMLAttributeReferrerPolicy;
  /** Link size, default REGULAR */
  size?: TextSize;
  /** Link target */
  target?: string;
  /** If uses react router dome link, YOU HAVE TO PROVIDE A HREF */
  useReactLink?: boolean;
  /** If link should take the whole link, useful for rendering links as Navbar items */
  fullWidth?: boolean;
  /** Font style */
  fontStyle?: FontStyle;
} & UiReactElementProps;

export type privateLinkProps = Omit<UiLinkProps, 'theme'> & {
  category: ColorCategory;
  to?: string;
} & UiReactPrivateElementProps;
