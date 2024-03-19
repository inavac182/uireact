export const getItemSpan = (size = 1, type: 'cols' | 'rows'): string =>
  `${type === 'cols' ? 'grid-column-start' : 'grid-row-start'}: span ${size};`;

export const getItemEndSpan = (size = 1, type: 'cols' | 'rows', startingPoint: number): string =>
  `${type === 'cols' ? 'grid-column-end' : 'grid-row-end'}: ${startingPoint + size};`;
