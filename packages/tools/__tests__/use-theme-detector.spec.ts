import { renderHook } from '@testing-library/react';

import { useThemeDetector } from '../src';
import { act } from 'react';

let eventListenerFn = (obj: {
  matches: boolean
}) => {};
let eventListenerName = '';

const watchMediaStubLight = jest.fn().mockReturnValue({
  addEventListener: (name: string, fn: () => void) => {
    eventListenerFn = fn;
    eventListenerName = name;
  },
  removeEventListener: jest.fn(),
  matches: false
});
const watchMediaStubDark = jest.fn().mockReturnValue({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  matches: true
});
const matchMedia = global.matchMedia;

afterEach(() => {
  global.matchMedia = matchMedia;
})

describe('useThemeDetector', () => {
  test('useThemeDetector() returns correct theme', () => {
    global.matchMedia = watchMediaStubLight;
    const { result } = renderHook(() => useThemeDetector());

    expect(watchMediaStubLight).toHaveBeenCalled();
    expect(watchMediaStubLight).toHaveBeenCalledWith("(prefers-color-scheme: dark)");
    expect(result.current).toBe('light');
  });

  test('useThemeDetector() returns correct theme', () => {
    global.matchMedia = watchMediaStubDark;
    const { result } = renderHook(() => useThemeDetector());

    expect(watchMediaStubDark).toHaveBeenCalled();
    expect(watchMediaStubDark).toHaveBeenCalledWith("(prefers-color-scheme: dark)");
    expect(result.current).toBe('dark');
  });

    test('useThemeDetector() updates when event listener is triggered', () => {
    global.matchMedia = watchMediaStubLight;
    const { result } = renderHook(() => useThemeDetector());

    expect(watchMediaStubLight).toHaveBeenCalled();
    expect(watchMediaStubLight).toHaveBeenCalledWith("(prefers-color-scheme: dark)");

    expect(result.current).toBe('light');
    expect(eventListenerName).toBe('change');

    act(() => {
      eventListenerFn({
        matches: true
      });
    });

    expect(result.current).toBe('dark');
  });
});
