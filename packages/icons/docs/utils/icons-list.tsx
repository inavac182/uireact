import React from 'react';

import { ColorCategory, DefaultTheme, TextSize, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiView, UiViewRow } from '@uireact/view';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';
import { UiSelect } from '@uireact/form';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex-grid';

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
        <UiGrid cols={{ small: 2, medium: 3, large: 4, xlarge: 5 }} colsGap="three" rowsGap="five">
          {Object.keys(Icons).map((key) => (
            <UiGridItem key={`icon-grid-item-component-${key}`}>
              <UiText size={TextSize.xsmall} category={category} centered>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <UiIcon icon={key} size="xlarge" theme={category} />
                <br />
                <br />
                {key}
              </UiText>
            </UiGridItem>
          ))}
        </UiGrid>
      </UiSpacing>
    </UiViewRow>
  );
};
