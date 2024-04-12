import { useContext } from "react"

import { ThemeColor } from "@uireact/foundation";

import { DocsThemeContext } from '../providers';

export const useDocsTheme = (): ThemeColor => { 
  const { selectedTheme } = useContext(DocsThemeContext);
  return selectedTheme;
}