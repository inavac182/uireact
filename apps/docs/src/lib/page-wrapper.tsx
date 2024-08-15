"use client";

import React, { useContext } from "react";

import { UiView } from "@uireact/view";

import { DocsThemeContext } from "@/app/providers";

type ViewWrapperProps = {
  children: React.ReactNode;
};

export const ViewWrapper = ({ children }: ViewWrapperProps) => {
  const { selectedTheme } = useContext(DocsThemeContext);

  return (
    <UiView selectedTheme={selectedTheme} className="viewWrapper" weight="50">
      {children}
    </UiView>
  );
};
