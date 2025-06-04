import { createContext } from 'react';

export type UiViewportContextData = {
  small: number,
  medium: number,
  large: number
};

export const UiViewportData: UiViewportContextData = {
  small: 580,
  medium: 990,
  large: 1440
}

export const UiViewportContext = createContext<UiViewportContextData>(UiViewportData);
