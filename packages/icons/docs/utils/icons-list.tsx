import React from 'react';

import { DefaultTheme, Sizing, TextSize, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiView, UiViewRow } from '@uireact/view';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';

import { UiIcon } from '../../src';

import * as Icons from '../../src/public/svgs';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export const IconsList: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = React.useState(ThemeColor.light);

  const toogleTheme = React.useCallback(() => {
    setSelectedTheme(selectedTheme === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark);
  }, [setSelectedTheme, selectedTheme]);

  return (
    <UiView theme={DefaultTheme} selectedTheme={selectedTheme}>
      <UiViewRow>
        <UiSpacing padding={{ block: Sizing.five }}>
          <UiGrid cols={5} colsGap={10} rowsGap={10}>
            {Object.keys(Icons).map((key) => (
              <UiGridItem key={`icon-grid-item-component-${key}`}>
                <UiText size={TextSize.xlarge} centered>
                  <UiIcon icon={key} />
                  <UiText>{key}</UiText>
                </UiText>
              </UiGridItem>
            ))}
          </UiGrid>
        </UiSpacing>
        <UiButton onClick={toogleTheme}>
          <UiText>Toggle theme</UiText>
        </UiButton>
      </UiViewRow>
    </UiView>
  );
};
