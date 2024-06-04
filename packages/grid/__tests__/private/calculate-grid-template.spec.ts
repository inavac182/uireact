import { getGridTemplate } from '../../src/private';

test('Should return correct template string when using cols', () => {
  const style = getGridTemplate(1, '10px');

  expect(style).toBe('repeat(1, 10px)');
});

test('Should return correct template string when using rows', () => {
  const style = getGridTemplate(2, '20%');

  expect(style).toBe('repeat(2, 20%)');
});

test('Should return default template string if size and or span are undefined', () => {
  const style = getGridTemplate(undefined, undefined);

  expect(style).toBe('repeat(1, 1fr)');
});

test('Should return default template string if size string is empty are undefined', () => {
  const style = getGridTemplate(undefined, '');

  expect(style).toBe('repeat(1, 1fr)');
});
