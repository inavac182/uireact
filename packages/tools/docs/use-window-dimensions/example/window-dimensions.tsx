'use client';
import React from 'react';

import { useWindowDimensions } from "@uireact/tools";

export const WindowDimensionExample = () => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </>
  )
};
