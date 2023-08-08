import React from 'react';

import { UiView, UiViewRow } from '@uireact/view';
import { UiHeading, UiText, UiLink } from '@uireact/text';
import { DefaultTheme, TextSize, Theme, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiHeader } from '@uireact/header';
import { UiCard } from '@uireact/card';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiList, UiListItem } from '@uireact/list';
import { UiBadge } from '@uireact/badge';
import { UiInput, UiSelect, UiTextArea } from '@uireact/form';
import { UiButton } from '@uireact/button';
import { UiIcon } from '@uireact/icons';

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
    <UiView theme={$customTheme || DefaultTheme} $selectedTheme={coloration}>
      <UiSpacing margin={{ left: 'three' }}>
        <UiHeading>Paste the newly created custom theme here:</UiHeading>
        <UiTextArea name="custom-theme" value={themeInput} cols={50} rows={20} onChange={handleChange} />
        <UiSpacing margin={{ bottom: 'five' }}>
          <UiButton onClick={loadTheme} theme="warning">
            <UiSpacing padding={{ block: 'four' }}>Load theme</UiSpacing>
          </UiButton>
        </UiSpacing>
        <hr />
        <br />
        <UiButton onClick={toogleColoration} theme="positive">
          <UiSpacing padding={{ block: 'four' }}>Toggle coloration</UiSpacing>
        </UiButton>
        <br />
        <br />
      </UiSpacing>
      <UiHeader>
        <UiSpacing margin={{ left: 'four' }}>
          <UiHeading level={1}>Header</UiHeading>
        </UiSpacing>
      </UiHeader>
      <UiViewRow weight="10">
        <UiSpacing padding={{ inline: 'three' }}>
          <UiSpacing padding={{ block: 'five' }}>
            <UiCard>
              <UiText size={TextSize.large}>Lorem ipsum dolor sit amet</UiText>
              <br />
              <UiText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis accumsan ex, ut condimentum
                sapien condimentum in. Aenean venenatis eu eros eu ultrices. Integer scelerisque elit id augue vehicula
                sollicitudin. Nunc quis arcu ipsum. Aenean mi turpis, interdum sit amet odio id, eleifend pellentesque
                nisi.
              </UiText>
            </UiCard>
          </UiSpacing>
        </UiSpacing>
      </UiViewRow>
      <UiViewRow weight="10">
        <UiGrid cols={{ small: 1, medium: 2, large: 6, xlarge: 6 }}>
          <UiGridItem cols={4}>
            <UiSpacing padding={{ all: 'four' }}>
              <UiCard>
                <UiText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis accumsan ex, ut condimentum
                  sapien condimentum in. Aenean venenatis eu eros eu ultrices. Integer scelerisque elit id augue
                  vehicula sollicitudin. Nunc quis arcu ipsum. Aenean mi turpis, interdum sit amet odio id, eleifend
                  pellentesque nisi. Praesent nibh nisi, consectetur at blandit sit amet, mollis ac tellus. Nulla risus
                  sem, dignissim quis tincidunt id, malesuada vel felis. Nulla porttitor neque metus, ac varius justo
                  lacinia sed. Aliquam magna nisi, porttitor elementum mollis nec, commodo ut risus. Nullam eros orci,
                  egestas vitae ligula sed, laoreet volutpat felis. Cras eleifend finibus turpis, ut varius mi semper
                  sed. In sit amet interdum urna. Morbi sit amet justo sed nunc feugiat convallis.
                </UiText>
                <br />
                <UiText>
                  Donec quis lectus vitae turpis convallis tempus facilisis id augue. Fusce semper est sem, sed
                  efficitur dolor semper in. Nam sit amet nulla ac massa consequat auctor eu ac dolor. Donec
                  sollicitudin nibh ut mollis faucibus. Quisque ac nibh nec ipsum pellentesque malesuada. Fusce eu
                  accumsan felis, id ullamcorper urna. Phasellus pulvinar, velit nec varius rutrum, enim nibh lobortis
                  ligula, id facilisis lorem elit ac dui. Morbi tellus enim, eleifend id ipsum at, lacinia venenatis
                  eros. Integer et mauris euismod, ultricies velit vel, sagittis ex.{' '}
                  <UiLink href="#">Lorem ipsum dolor sit amet</UiLink> <UiBadge category="tertiary">🐞 dolor</UiBadge>
                </UiText>
              </UiCard>
            </UiSpacing>
            <UiSpacing padding={{ all: 'four' }}>
              <UiCard>
                <UiHeading>Lorem ipsum</UiHeading>
                <hr />
                <br />
                <UiInput label="Lorem" labelOnTop placeholder="Lorem ipsum" />
                <UiSelect label="lorem" labelOnTop>
                  <option>Lorem</option>
                  <option>ipsum</option>
                </UiSelect>
                <UiTextArea label="lorem" labelOnTop placeholder="Lorem ipsum" />
                <UiButton theme="positive">
                  <UiIcon icon="Camera" /> Lorem
                </UiButton>
                <UiButton theme="negative">
                  <UiIcon icon="Folder" /> Ipsum
                </UiButton>
              </UiCard>
            </UiSpacing>
          </UiGridItem>
          <UiGridItem cols={2}>
            <UiSpacing padding={{ all: 'four' }}>
              <UiCard theme="tertiary">
                <UiList>
                  <UiListItem>
                    <UiLink href="#">Lorem ipsum dolor sit amet</UiLink> <UiBadge>🦕 Lorem</UiBadge>
                  </UiListItem>
                  <UiListItem>
                    <UiLink href="#">Lorem ipsum dolor sit amet</UiLink>{' '}
                    <UiBadge category="secondary">🐙 ipsum</UiBadge>
                  </UiListItem>
                  <UiListItem>
                    <UiLink href="#">Lorem ipsum dolor sit amet</UiLink> <UiBadge category="tertiary">🐞 dolor</UiBadge>
                  </UiListItem>
                  <UiListItem>
                    <UiLink href="#">Lorem ipsum dolor sit amet</UiLink> <UiBadge category="positive">🐥 sit</UiBadge>
                  </UiListItem>
                  <UiListItem>
                    <UiLink href="#">Lorem ipsum dolor sit amet</UiLink> <UiBadge category="error">🦄 amet</UiBadge>
                  </UiListItem>
                </UiList>
              </UiCard>
            </UiSpacing>
            <UiSpacing padding={{ all: 'four' }}>
              <UiCard theme="secondary">
                <UiText>
                  Donec quis lectus vitae turpis convallis tempus facilisis id augue. Fusce semper est sem, sed
                  efficitur dolor semper in. Nam sit amet nulla ac massa consequat auctor eu ac dolor. Donec
                  sollicitudin nibh ut mollis faucibus. Quisque ac nibh nec ipsum pellentesque malesuada. Fusce eu
                  accumsan felis, id ullamcorper urna. Phasellus pulvinar, velit nec varius rutrum, enim nibh lobortis
                  ligula, id facilisis lorem elit ac dui. Morbi tellus enim, eleifend id ipsum at, lacinia venenatis
                  eros. Integer et mauris euismod, ultricies velit vel, sagittis ex.
                </UiText>
              </UiCard>
            </UiSpacing>
          </UiGridItem>
        </UiGrid>
      </UiViewRow>
      <UiViewRow>
        <UiText centered>@UiReact</UiText>
      </UiViewRow>
    </UiView>
  );
};
