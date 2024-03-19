import { SpacingType, UiReactElementProps } from '@uireact/foundation';

export type UiFlexGridProps = {
  /** Items alignment inside flex grid */
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center';
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
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  /** Spacing for rows, values gotten from the theme spacing props */
  rowGap?: SpacingType;
  /** Flex grid wrap */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
} & UiReactElementProps;

export type privateFlexGridProps = {
  /** Items alignment inside flex grid */
  $alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center';
  /** Children component */
  children?: React.ReactNode;
  $columnGap?: SpacingType;
  /** Class name */
  className?: string;
  /** Flex grid direction */
  $direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  $gap?: SpacingType;
  $inline?: boolean;
  /** Flex grid wrap */
  $justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  $rowGap?: SpacingType;
  /** Flex grid wrap */
  $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};
