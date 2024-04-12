"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";

import { ThemeColor } from "@uireact/foundation";
import { UiView } from "@uireact/view";

import { DocsTheme } from "./custom-theme";
import { DocsThemeContext } from "@/app/providers";

type ViewWrapperProps = {
  children: React.ReactNode;
};

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const mqListener = useCallback((e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
  }, []);

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    darkThemeMq.addEventListener("change", mqListener);

    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, [mqListener]);

  useEffect(() => {
    setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return isDarkTheme;
};

export const ViewWrapper = ({ children }: ViewWrapperProps) => {
  const { selectTheme, selectedTheme } = useContext(DocsThemeContext);
  const isDarkTheme = useThemeDetector();

  useEffect(() => {
    selectTheme(isDarkTheme ? ThemeColor.dark : ThemeColor.light);
  }, [isDarkTheme, selectTheme]);

  return (
    <UiView theme={DocsTheme} selectedTheme={selectedTheme} noBackground className="viewWrapper">
      {children}
    </UiView>
  );
};
