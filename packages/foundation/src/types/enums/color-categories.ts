export enum ColorCategories {
  fonts = 'fonts',
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  positive = 'positive',
  negative = 'negative',
  error = 'error',
  warning = 'warning',
}

/**
 * The intention of this type is that we can use it to set props from components that can have
 * different colorations. E.G.
 *
 * <UiBadge theme="primary" /> where `theme` prop could be typed as ColorCategory.
 */
export type ColorCategory = 'primary' | 'secondary' | 'tertiary' | 'positive' | 'negative' | 'error' | 'warning' | 'fonts';
