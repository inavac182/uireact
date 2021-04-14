export const getGridTemplate = (spans = 1, size = '1fr', template: 'cols' | 'rows'): string =>
  `${template === 'cols' ? 'grid-template-columns' : 'grid-template-rows'}: repeat(${spans ? spans : 1}, ${
    size === '' ? '1fr' : size
  });`;
