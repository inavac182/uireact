import React from 'react';

import { ColorCategory, TextSize, UiSpacing } from '@uireact/foundation';
import { UiViewRow } from '@uireact/view';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiText } from '@uireact/text';
import { UiSelect } from '@uireact/form';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

import { UiIcon } from '../../src';

import * as Icons from '../../src/public/svgs';

export const IconsList: React.FC = () => {
  const [category, setCategory] = React.useState<ColorCategory>();

  const handleCategoryChange = React.useCallback(
    (value?: string) => {
      setCategory(value as ColorCategory);
    },
    [setCategory]
  );

  return (
    <UiViewRow weight="10">
      <UiSpacing padding={{ all: 'four' }}>
        <UiFlexGrid alignItems="center" gap={'five'} justifyContent="center">
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
                <UiIcon icon={key} size="xlarge" category={category} />
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
