'use client';
import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

type PlaygroundProps = {
  children: React.ReactElement;
}

export const Playground = ({ children }: PlaygroundProps) => {

  return (
    <>
      {children}
    </>
  )
};
