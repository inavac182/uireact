export const getGridTemplate = (spans = 1, size = '1fr'): string =>
  `repeat(${spans}, ${
    size === '' ? '1fr' : size
  })`;
