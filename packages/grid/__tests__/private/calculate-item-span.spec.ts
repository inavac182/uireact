import { getItemSpan, getItemEndSpan } from '../../src/private';

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

describe('getItemEndSpan', () => {
  it('Should get correct end span for cols', () => {
    const style = getItemEndSpan(3, 'cols', 2);
    expect(style).toBe('grid-column-end: 5;');
  });

  it('Should get correct end span for rows', () => {
    const style = getItemEndSpan(3, 'rows', 2);
    expect(style).toBe('grid-row-end: 5;');
  });

  it('Should get correct end span if no size is provided', () => {
    const style = getItemEndSpan(undefined, 'cols', 2);
    expect(style).toBe('grid-column-end: 3;');
  });
});
