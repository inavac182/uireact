'use client';
import { UiViewportData } from "contexts";

export interface UiWindowDimensions {
  width: number;
  height: number;
}

export const getUiWindowDimensions = (): UiWindowDimensions => {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;

    return {
      width,
      height,
    };
  }

  return {
    width: UiViewportData.large.min,
    height: UiViewportData.large.max,
  };
};
