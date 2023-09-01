import React from 'react';

import { UiView, UiViewRow } from '@uireact/view';
import { UiHeading, UiText, UiLink, UiLabel } from '@uireact/text';
import { DefaultTheme, TextSize, Theme, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiHeader } from '@uireact/header';
import { UiCard } from '@uireact/card';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiList, UiListItem } from '@uireact/list';
import { UiBadge } from '@uireact/badge';
import { UiInput, UiSelect, UiTextArea } from '@uireact/form';
import { UiButton } from '@uireact/button';
import { UiIcon } from '@uireact/icons';
import { UiBubblesSeparator, UiSeparator } from '@uireact/separator';

import { MainColors } from './theme-tester/main-colors';
import { SupportiveColors } from './theme-tester/supportive-colors';
import { Texts } from './theme-tester/texts';
import { Forms } from './theme-tester/forms';
import { TableExample } from './theme-tester/table';
import { UiFlexGrid } from '@uireact/flex-grid';

export const TestTheme: React.FC = () => {
  const [$customTheme, set$customTheme] = React.useState<Theme>(DefaultTheme);
  const [themeInput, setThemeInput] = React.useState(JSON.stringify(DefaultTheme));
  const [coloration, setColoration] = React.useState<ThemeColor>(ThemeColor.dark);

  const handleChange = React.useCallback(
    (e: React.FormEvent<HTMLTextAreaElement>) => {
      setThemeInput(e.currentTarget.value);
    },
    [set$customTheme]
  );

  const toogleColoration = React.useCallback(() => {
    setColoration((coloration) => (coloration === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark));
  }, [setColoration]);

  const loadTheme = React.useCallback(() => {
    try {
      const theme = JSON.parse(themeInput);
      set$customTheme(theme);
    } catch {
      alert('The theme object is malformed');
    }
  }, [themeInput, set$customTheme]);

  return (
    <UiView theme={$customTheme || DefaultTheme} selectedTheme={coloration}>
      <UiViewRow>
        <UiSpacing padding={{ all: 'five' }}>
          <UiGrid cols={3} rows={2} colsGap={10} rowsGap={10}>
            <UiGridItem cols={2} rows={2}>
              <UiTextArea value={themeInput} onChange={handleChange} rows={5} />
            </UiGridItem>
            <UiGridItem rows={1}>
              <UiButton onClick={loadTheme} theme="secondary" fullWidth>
                <UiSpacing padding={{ block: 'five' }}>✨ Load theme ✨</UiSpacing>
              </UiButton>
            </UiGridItem>
            <UiGridItem rows={1}>
              <UiButton onClick={toogleColoration} theme="tertiary" fullWidth>
                <UiSpacing padding={{ block: 'five' }}>✨ Toogle theme ✨</UiSpacing>
              </UiButton>
            </UiGridItem>
          </UiGrid>
        </UiSpacing>
      </UiViewRow>
      <UiSeparator from="primary" to="secondary" />
      <UiViewRow category="secondary">
        <MainColors />
      </UiViewRow>
      <UiSeparator from="primary" to="secondary" inverse />
      <UiViewRow>
        <SupportiveColors />
      </UiViewRow>
      <UiBubblesSeparator to="secondary" from="primary" />
      <UiViewRow category="secondary">
        <Texts />
      </UiViewRow>
      <UiBubblesSeparator to="tertiary" from="secondary" />
      <UiViewRow category="tertiary">
        <Forms />
      </UiViewRow>
      <UiBubblesSeparator to="tertiary" from="secondary" inverse />
      <UiViewRow category="secondary">
        <TableExample />
      </UiViewRow>
      <UiViewRow weight="10">
        <UiHeading centered>Badges</UiHeading>
        <UiSpacing padding={{ left: 'three' }}>
          <UiFlexGrid columnGap="three">
            <UiBadge category="primary">Lorem 🍎</UiBadge>
            <UiBadge category="secondary">Lorem 🍊</UiBadge>
            <UiBadge category="tertiary">Lorem 🍋</UiBadge>
            <UiBadge category="positive">Lorem 🍉</UiBadge>
            <UiBadge category="error">Lorem 🍇</UiBadge>
            <UiBadge category="warning">Lorem 🍆</UiBadge>
            <UiBadge category="negative">Lorem 🌶️</UiBadge>
          </UiFlexGrid>
        </UiSpacing>
      </UiViewRow>
    </UiView>
  );
};
