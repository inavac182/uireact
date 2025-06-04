import { renderHook } from '@testing-library/react';

import { useViewport } from '../src';

describe('useViewport', () => {
  it('returns isSmall truthy when is small breakpoint', () => {
    global.innerWidth = 350;

    const { result } = renderHook(() => useViewport());

    expect(result.current.isSmall).toBeTruthy();
    expect(result.current.isMedium).toBeFalsy();
    expect(result.current.isLarge).toBeFalsy();
    expect(result.current.isXLarge).toBeFalsy();
  });

  it('returns isMedium truthy when is medium breakpoint', () => {
    global.innerWidth = 500;

    const { result } = renderHook(() => useViewport());

    expect(result.current.isSmall).toBeTruthy();
    expect(result.current.isMedium).toBeFalsy();
    expect(result.current.isLarge).toBeFalsy();
    expect(result.current.isXLarge).toBeFalsy();
  });

  it('returns isLarge truthy when is large breakpoint', () => {
    global.innerWidth = 1000;

    const { result } = renderHook(() => useViewport());

    expect(result.current.isSmall).toBeFalsy();
    expect(result.current.isMedium).toBeFalsy();
    expect(result.current.isLarge).toBeTruthy();
    expect(result.current.isXLarge).toBeFalsy();
  });

  it('returns isXLarge truthy when is xlarge breakpoint', () => {
    global.innerWidth = 1450;

    const { result } = renderHook(() => useViewport());

    expect(result.current.isSmall).toBeFalsy();
    expect(result.current.isMedium).toBeFalsy();
    expect(result.current.isLarge).toBeTruthy();
    expect(result.current.isXLarge).toBeTruthy();
  });
});
