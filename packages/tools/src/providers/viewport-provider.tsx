import React from 'react';

import { UiViewportContext, ViewportContextData } from '../contexts';

export type UiViewportContextProviderProps = {
  data: ViewportContextData;
  children: React.ReactNode
}

export const UiViewportProvider = ({ children, data }: UiViewportContextProviderProps) => {
    return (
    <UiViewportContext.Provider value={data}>
      {children}
    </UiViewportContext.Provider>
  )
};
