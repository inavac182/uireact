import { getItemSpan } from '../../src/private';

test('Should return correct item span string when using cols', () => {
  const style = getItemSpan(3, 'cols');

  expect(style).toBe('grid-column-start: span 3;');
});

test('Should return default style if size is undefined', () => {
  const style = getItemSpan(undefined, 'cols');

  expect(style).toBe('grid-column-start: span 1;');
});

test('Should return correct item span string when using rows', () => {
  const style = getItemSpan(2, 'rows');

  expect(style).toBe('grid-row-start: span 2;');
});