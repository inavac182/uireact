export type UiFlexGridItemProps = {
  /** Flex grid item alignment */
  align?: 'auto' | 'flex-start' | 'flex-end' | 'center';
  /** Class name to be passed to flex item */
  className?: string;
  /** Children component */
  children?: React.ReactNode;
  /** Grid item grow */
  grow?: number;
  /** Grid item order */
  order?: number;
  /** Grid item shrink */
  shrink?: number;
  /** Test id for testing purposes */
  testId?: string;
};
