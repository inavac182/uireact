import React from 'react';

import { ColorCategory, DefaultTheme, TextSize, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiView, UiViewRow } from '@uireact/view';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { UiSelect } from '@uireact/form';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

import { UiIcon } from '../../src';

import * as Icons from '../../src/public/svgs';

export const IconsList: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = React.useState(ThemeColor.dark);
  const [category, setCategory] = React.useState<ColorCategory>();

  const toogleTheme = React.useCallback(() => {
    setSelectedTheme(selectedTheme === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark);
  }, [setSelectedTheme, selectedTheme]);

  const handleCategoryChange = React.useCallback(
    (value?: string) => {
      setCategory(value as ColorCategory);
    },
    [setCategory]
  );

  return (
    <UiView theme={DefaultTheme} selectedTheme={selectedTheme}>
      <UiViewRow>
        <UiSpacing padding={{ all: 'four' }}>
          <UiFlexGrid alignItems="center" gap={'five'} justifyContent="center">
            <UiFlexGridItem grow={1}>
              <UiButton onClick={toogleTheme} fullWidth>
                <UiSpacing padding={{ block: 'four' }}>
                  <UiText>Toggle theme</UiText>
                </UiSpacing>
              </UiButton>
            </UiFlexGridItem>
            <UiFlexGridItem>
              <UiSelect onChange={handleCategoryChange} label="Theme category">
                <option value="">Normal</option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="tertiary">Tertiary</option>
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
                <option value="error">Error</option>
                <option value="warning">Warning</option>
              </UiSelect>
            </UiFlexGridItem>
          </UiFlexGrid>
        </UiSpacing>
        <UiSpacing padding={{ block: 'five' }}>
          <UiGrid cols={5} colsGap={10} rowsGap={10}>
            {Object.keys(Icons).map((key) => (
              <UiGridItem key={`icon-grid-item-component-${key}`}>
                <UiText size={TextSize.xlarge} theme={category} centered>
                  <UiIcon icon={key} theme={category} />
                  <br />
                  {key}
                </UiText>
              </UiGridItem>
            ))}
          </UiGrid>
        </UiSpacing>
      </UiViewRow>
    </UiView>
  );
};
