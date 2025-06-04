import { createContext } from 'react';

export type ViewportContextData = {
  small: number,
  medium: number,
  large: number
};

export const UiViewportData: ViewportContextData = {
  small: 580,
  medium: 990,
  large: 1440
}

export const UiViewportContext = createContext<ViewportContextData>(UiViewportData);
