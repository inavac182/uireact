import React from 'react';

import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiButton } from '@uireact/button';

import { UiView } from '../../src';
import { UiViewRow } from '../../src';

export const ViewRowExample: React.FC = () => {
  const [$selectedTheme, setTheme] = React.useState<ThemeColor>(ThemeColor.light);
  const toogleTheme = () => {
    setTheme($selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light);
  };

  return (
    <UiView theme={DefaultTheme} selectedTheme={$selectedTheme}>
      <UiViewRow weight="10">
        <p>A row with weight 10</p>
      </UiViewRow>
      <UiViewRow weight="50">
        <p>A row with weight 50</p>
      </UiViewRow>
      <UiViewRow>
        <p>A row with default theme</p>
      </UiViewRow>
      <UiViewRow weight="150">
        <p>A row with weight 150</p>
      </UiViewRow>
      <UiViewRow weight="200">
        <p>A row with weight 200</p>
      </UiViewRow>
      <UiViewRow weight="200" noBackground>
        <p>A row without background color</p>
      </UiViewRow>
      <UiViewRow inverseFont category="negative">
        <p>Row with inverse font and category</p>
      </UiViewRow>
      <UiButton onClick={toogleTheme}>Toggle theme</UiButton>
    </UiView>
  );
};
