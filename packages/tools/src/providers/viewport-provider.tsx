import React from 'react';

import { UiViewportContext, ViewportContextData } from '../contexts';

type ViewportContextProviderProps = {
  data: ViewportContextData;
  children: React.ReactNode
}

export const ViewportProvider = ({ children, data }: ViewportContextProviderProps) => {
    return (
    <UiViewportContext.Provider value={data}>
      {children}
    </UiViewportContext.Provider>
  )
};
