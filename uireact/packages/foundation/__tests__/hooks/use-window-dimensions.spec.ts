import { renderHook } from '@testing-library/react';

import { useWindowDimensions } from '../../src/hooks/use-window-dimensions';

describe('useWindowDimensions', () => {
  test('useWindowDimensions() returns correct sizing when is hydrated', () => {
    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);
  });

  test('useWindowDimensions() call window.addEventListener when hydrated', () => {
    const addEventListener = global.addEventListener;
    global.addEventListener = jest.fn();
    renderHook(() => useWindowDimensions());

    expect(global.addEventListener).toHaveBeenCalled();
    global.addEventListener = addEventListener;
  });
});
