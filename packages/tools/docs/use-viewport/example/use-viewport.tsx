'use client';
import React from 'react';

import { useViewport } from "@uireact/tools";

export const UseViewportExample = () => {
  const { isSmall, isMedium, isLarge, isXLarge } = useViewport();

  return (
    <>
      <p>Small: {isSmall ? '✅' : '❌'}</p>
      <p>Medium: {isMedium ? '✅' : '❌'}</p>
      <p>Large: {isLarge ? '✅' : '❌'}</p>
      <p>XLarge: {isXLarge ? '✅' : '❌'}</p>
    </>
  )
};
