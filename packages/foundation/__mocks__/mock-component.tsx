import * as React from 'react';

import { useWindowDimensions } from '../src/hooks/use-window-dimensions';

export const MockComponent: React.FC = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </>
  );
};
