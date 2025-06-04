import { useCallback, useEffect, useState } from "react";

type UseThemeDetectorResponse = 'dark' | 'light';

/**
 * This React hook checks the user's preferences and return the
 * correct theme that is enabled on the device.
 * 
 * As this is client side, use with caution as during SSR this 
 * will always default to "Dark", this because during SSR we
 * don't have access to the window object.
 * 
 * @returns "dark" | "light"
 */
export const useThemeDetector = (): UseThemeDetectorResponse => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const mqListener = useCallback((e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
  }, []);

  useEffect(() => {
      if (typeof window !== undefined && typeof window.matchMedia === 'function') {
          const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
          darkThemeMq.addEventListener("change", mqListener);

          return () => darkThemeMq.removeEventListener("change", mqListener);
      }
    
  }, [mqListener]);

  useEffect(() => {
      if (typeof window !== undefined && typeof window.matchMedia === 'function') {
          setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
  }, []);

  return isDarkTheme ? 'dark' : 'light';
};
