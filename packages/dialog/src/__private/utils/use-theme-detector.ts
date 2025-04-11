/* istanbul ignore file */
import { useCallback, useEffect, useState } from "react";

export const useThemeDetector = () => {
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
  
    return isDarkTheme;
  };
  