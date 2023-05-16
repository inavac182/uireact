import React from 'react';

import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiButton } from '@uireact/button';

import { UiView } from '../../src';
import { UiViewRow } from '../../src';
import { useDialogController } from '../../../../src/providers/';

export const ViewRowExample: React.FC = () => {
  const dialogController = useDialogController();
  const [selectedTheme, setTheme] = React.useState<ThemeColor>(ThemeColor.light);
  const toogleTheme = () => {
    setTheme(selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light);
  };

  return (
    <UiView theme={DefaultTheme} selectedTheme={selectedTheme} dialogController={dialogController}>
      <UiViewRow weight="10">
        <p>A row with weight 10</p>
      </UiViewRow>
      <UiViewRow>
        <p>A row with default theme</p>
      </UiViewRow>
      <UiViewRow weight="200">
        <p>A row with weight 200</p>
      </UiViewRow>
      <UiButton onClick={toogleTheme}>Toggle theme</UiButton>
    </UiView>
  );
};
