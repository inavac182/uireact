import React from 'react';

import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiButton } from '@uireact/button';

import { UiView } from '../../src';

type ViewExampleProps = {
  centeredContent?: boolean;
};

export const ViewExample: React.FC<ViewExampleProps> = ({ centeredContent }: ViewExampleProps) => {
  const [selectedTheme, setTheme] = React.useState<ThemeColor>(ThemeColor.light);
  const toogleTheme = () => {
    setTheme(selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light);
  };

  return (
    <UiView theme={DefaultTheme} selectedTheme={selectedTheme} centeredContent={centeredContent}>
      <p>All the react tree should render inside here</p>
      <UiButton onClick={toogleTheme}>Toggle theme</UiButton>
    </UiView>
  );
};
