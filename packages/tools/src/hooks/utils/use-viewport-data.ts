import { useContext } from "react";

import { UiViewportContext } from "../../contexts";


export const useViewportData = () => {
  const context = useContext(UiViewportContext);

  return context;
}