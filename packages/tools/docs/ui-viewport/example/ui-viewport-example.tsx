import React from 'react';
import { UiViewport } from "@uireact/tools";

export const UiViewportExample = () => {
  return (
    <>
      <UiViewport criteria='small'>
        <p>I render in small</p>
      </UiViewport>
      <UiViewport criteria='s|m'>
        <p>I render in small AND medium</p>
      </UiViewport>
      <UiViewport criteria='medium'>
        <p>I render in medium</p>
      </UiViewport>
      <UiViewport criteria='m|l'>
        <p>I render in medium AND large AND xlarge</p>
      </UiViewport>
      <UiViewport criteria='large'>
        <p>I render in large AND xlarge</p>
      </UiViewport>
      <UiViewport criteria='xlarge'>
        <p>I render in xlarge</p>
      </UiViewport>
    </>
  )
};
