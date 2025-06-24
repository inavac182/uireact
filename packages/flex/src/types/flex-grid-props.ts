import { SpacingType, UiReactElementProps } from '@uireact/foundation';

export type UiFlexGridProps = {
  /** Items alignment inside flex grid */
  alignItems?: 'stretch' | 'start' | 'end' | 'center';
  /** Children component */
  children?: React.ReactNode;
  /** Spacing for columns, values gotten from the theme spacing props */
  columnGap?: SpacingType;
  /** Flex grid direction */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /** Spacing between flex items, values gotten from the theme spacing props */
  gap?: SpacingType;
  /** If the flex grid renders inline */
  inline?: boolean;
  /** Flex grid wrap */
  justifyContent?: 'start' | 'end' | 'center' | 'space-between' | 'stretch';
  /** Spacing for rows, values gotten from the theme spacing props */
  rowGap?: SpacingType;
  /** Flex grid wrap */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** If flex grid should take all height */
  fullHeight?: boolean;
} & UiReactElementProps;
