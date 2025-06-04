import React from 'react';
import { useThemeDetector } from "@uireact/tools";

export const ThemeDetectorExample = () => {
  const theme = useThemeDetector();

  return (
    <p>Theme: {theme}</p>
  )
};
