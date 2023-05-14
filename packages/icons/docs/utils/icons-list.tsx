import React from 'react';

import { DefaultTheme, Sizing, TextSize, ThemeColor, UiSpacing } from '@uireact/foundation';
import { UiView, UiViewRow } from '@uireact/view';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiText } from '@uireact/text';

import { UiIcon } from '../../src';

import * as Icons from '../../src/public/svgs';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export const IconsList: React.FC = () => (
  <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
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
    </UiViewRow>
  </UiView>
);
