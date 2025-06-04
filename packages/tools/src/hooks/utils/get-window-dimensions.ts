'use client';
import { UiViewportData } from "../../contexts";

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

  // istanbul ignore next
  return {
    width: UiViewportData.large,
    height: UiViewportData.large,
  };
};
