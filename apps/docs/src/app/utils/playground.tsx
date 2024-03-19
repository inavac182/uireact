'use client';
import React from 'react';
import styled from 'styled-components';

import reactElementToJSXString from 'react-element-to-jsx-string';
import nodeToString from 'hast-util-to-string';


import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

type PlaygroundProps = {
  children: React.ReactElement;
  scope?: Record<string, unknown>;
}

const defScope = { styled };

export const Playground = ({ children, scope }: PlaygroundProps) => {
  const code = reactElementToJSXString(<>{children}</>, {
    displayName: (element) => {
      if (element?.type?._payload?.value[2]) { 
        return element?.type?._payload?.value[2];
      }

      return '';
    }
  });

  return (
    <LiveProvider code={code} scope={{ ...defScope, scope }}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
};
