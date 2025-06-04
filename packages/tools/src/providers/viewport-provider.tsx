import React from 'react';

import { UiViewportContext, UiViewportContextData } from '../contexts';

export type UiViewportContextProviderProps = {
  data: UiViewportContextData;
  children: React.ReactNode
}

export const UiViewportProvider = ({ children, data }: UiViewportContextProviderProps) => {
    return (
    <UiViewportContext.Provider value={data}>
      {children}
    </UiViewportContext.Provider>
  )
};
