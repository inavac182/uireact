"use client";

import React, { useContext } from "react";

import { UiView } from "@uireact/view";

import { DocsTheme } from "./custom-theme";
import { DocsThemeContext } from "@/app/providers";

type ViewWrapperProps = {
  children: React.ReactNode;
};

export const ViewWrapper = ({ children }: ViewWrapperProps) => {
  const { selectedTheme } = useContext(DocsThemeContext);

  return (
    <UiView theme={DocsTheme} selectedTheme={selectedTheme} noBackground className="viewWrapper">
      {children}
    </UiView>
  );
};
