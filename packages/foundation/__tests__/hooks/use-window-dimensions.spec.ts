import { renderHook } from '@testing-library/react-hooks/server';

import { BreakpointsSizes } from '../../src/responsive/breakpoints-sizes';
import { useWindowDimensions } from '../../src/hooks/use-window-dimensions';

describe('useWindowDimensions', () => {
  test('useWindowDimensions() returns correct sizing when is hydrated', () => {
    const { result, hydrate } = renderHook(() => useWindowDimensions());

    hydrate();

    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);
  });

  test('useWindowDimensions() defaults to large size when window.innerWidth is null', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    global.window.innerWidth = null;
    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(BreakpointsSizes.l.min);
  });

  test('useWindowDimensions() defaults to large size when window.innerHeight is null', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    global.window.innerHeight = null;
    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(BreakpointsSizes.l.min);
  });

  test('useWindowDimensions() defaults to large size when window is null', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    global.window = null;
    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(BreakpointsSizes.l.min);
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
