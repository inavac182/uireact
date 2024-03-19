import { renderHook } from '@testing-library/react-hooks/server';

import { useWindowDimensions } from '../../src/hooks/use-window-dimensions';

describe('useWindowDimensions', () => {
  test('useWindowDimensions() returns correct sizing when is hydrated', () => {
    const { result, hydrate } = renderHook(() => useWindowDimensions());

    hydrate();

    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);
  });

  test('useWindowDimensions() call window.addEventListener when hydrated', () => {
    const addEventListener = global.addEventListener;
    global.addEventListener = jest.fn();
    const { hydrate } = renderHook(() => useWindowDimensions());

    hydrate();

    expect(global.addEventListener).toHaveBeenCalled();
    global.addEventListener = addEventListener;
  });
});
