import { renderHook } from '@testing-library/react-hooks/server';

import { breakpointsSizes } from '../../src/responsive/breakpoints-sizes';
import { useWindowDimensions } from '../../src/hooks/use-window-dimensions';

test('useWindowDimensions() returns correct sizing when is hydrated', () => {
  const { result, hydrate } = renderHook(() => useWindowDimensions());

  hydrate();

  expect(result.current.width).toBe(window.innerWidth);
  expect(result.current.height).toBe(window.innerHeight);
});

test('useWindowDimensions() returns correct size when is NOT hydrated', () => {
  const { result } = renderHook(() => useWindowDimensions());

  expect(result.current.width).toBe(breakpointsSizes.l.min);
});

test('useWindowDimensions() call window.addEventListener when hydrated', () => {
  const addEventListener = global.addEventListener;
  global.addEventListener = jest.fn();
  const { hydrate } = renderHook(() => useWindowDimensions());

  hydrate();

  expect(global.addEventListener).toHaveBeenCalled();
  global.addEventListener = addEventListener;
});
