export const getItemSpan = (size = 1, type: 'cols' | 'rows'): string =>
  `${type === 'cols' ? 'grid-column-start' : 'grid-row-start'}: span ${size};`;
