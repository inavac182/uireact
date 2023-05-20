import React from 'react';

import { UiButton } from '@uireact/button';
import { UiCard } from '@uireact/card';
import { ColorTokens, DefaultTheme, Sizing, TextSize, Theme, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiView, UiViewRow } from '@uireact/view';
import { UiHeading, UiLink, UiText } from '@uireact/text';

import { ColorationForm, FontsForm, HeadingsForm, TextsForm, SpacingForm } from './form-sections';
import { UiIcon } from '@uireact/icons';

export const CreateTheme: React.FC = () => {
  const [customTheme, setCustomTheme] = React.useState<Theme>(DefaultTheme);
  const [themeVisible, setThemeVisible] = React.useState(false);

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      setThemeVisible(true);
      e.preventDefault();
    },
    [customTheme]
  );

  const handleChange = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const keys = e.currentTarget.name.split('-');

      if (keys[2]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        customTheme[keys[0]][keys[1]][keys[2]] = e.currentTarget.value;
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        customTheme[keys[0]][keys[1]] = e.currentTarget.value;
      }

      setCustomTheme({ ...customTheme });
    },
    [customTheme, setCustomTheme]
  );

  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(JSON.stringify(customTheme, null, 4)).then(() => {
      alert('Theme copied!');
    });
  }, [customTheme]);

  return (
    <UiView theme={DefaultTheme} selectedTheme={ThemeColor.dark}>
      <UiViewRow weight="10">
        <form onSubmit={handleSubmit}>
          <>
            <UiGrid cols={{ small: 1, medium: 4, large: 10, xlarge: 10 }}>
              <UiGridItem cols={10}>
                <UiSpacing margin={{ all: Sizing.four }}>
                  <UiCard weight={ColorTokens.token_200}>
                    <UiHeading>Colorations</UiHeading>
                    <UiText>
                      For a detailed explanation on each coloration usage and tips, you should check{' '}
                      <UiLink href="./create-theme#colorations-" theme="secondary">
                        this doc
                      </UiLink>
                      .
                    </UiText>
                  </UiCard>
                </UiSpacing>
                <ColorationForm type="light" coloration={customTheme.light} handleChange={handleChange} />
                <ColorationForm type="dark" coloration={customTheme.dark} handleChange={handleChange} />
              </UiGridItem>
              <UiGridItem cols={10}>
                <UiSpacing margin={{ all: Sizing.four }}>
                  <UiCard weight={ColorTokens.token_200}>
                    <UiHeading>Sizes</UiHeading>
                  </UiCard>
                </UiSpacing>
                <UiSpacing margin={{ all: Sizing.four }}>
                  <UiGrid cols={2} colsGap={10}>
                    <HeadingsForm
                      headings={customTheme.sizes.headings}
                      handleChange={handleChange}
                      name="sizes-headings"
                    />
                    <TextsForm texts={customTheme.sizes.texts} handleChange={handleChange} name="sizes-texts" />
                  </UiGrid>
                </UiSpacing>
              </UiGridItem>
              <UiGridItem cols={10}>
                <FontsForm texts={customTheme.texts} handleChange={handleChange} name="texts" />
              </UiGridItem>
              <UiGridItem cols={10}>
                <SpacingForm spacing={customTheme.spacing} handleChange={handleChange} name="spacing" />
              </UiGridItem>
            </UiGrid>
            <UiSpacing padding={{ all: Sizing.four }}>
              <UiButton type="submit" fullWidth theme="positive">
                <UiSpacing margin={{ block: Sizing.four }}>
                  <UiText size={TextSize.xlarge}>Generate theme</UiText>
                </UiSpacing>
              </UiButton>
            </UiSpacing>
          </>
        </form>
      </UiViewRow>
      {themeVisible && (
        <UiViewRow>
          <UiSpacing padding={{ all: Sizing.four }}>
            <pre>{`${JSON.stringify(customTheme, null, 4)}`}</pre>
          </UiSpacing>
          <UiSpacing padding={{ all: Sizing.four }}>
            <UiButton fullWidth onClick={copyToClipboard} theme="warning">
              <UiSpacing margin={{ all: Sizing.four }}>Copy to clipboard</UiSpacing>
            </UiButton>
          </UiSpacing>
        </UiViewRow>
      )}
    </UiView>
  );
};
