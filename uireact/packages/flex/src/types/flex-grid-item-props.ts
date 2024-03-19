export type UiFlexGridItemProps = {
  /** Flex grid item alignment */
  align?: 'auto' | 'flex-start' | 'flex-end' | 'center';
  /** Children component */
  children?: React.ReactNode;
  /** Grid item grow */
  grow?: number;
  /** Grid item order */
  order?: number;
  /** Grid item shrink */
  shrink?: number;
};

export type privateFlexGridItemProps = {
  /** Flex grid item alignment */
  $align?: 'auto' | 'flex-start' | 'flex-end' | 'center';
  /** Children component */
  children?: React.ReactNode;
  /** Grid item grow */
  $grow?: number;
  /** Grid item order */
  $order?: number;
  /** Grid item shrink */
  $shrink?: number;
};
