'use client';
import React, { useCallback, useState } from 'react';
import { styled } from 'styled-components';

import { UiButton } from '@uireact/button';
import { UiCard } from '@uireact/card';
import { UiSpacing } from '@uireact/foundation';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiFlexGrid } from '@uireact/flex';
import { UiHeading } from '@uireact/text';
import { UiSwitch, UiInput, UiSelect } from '@uireact/form';

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Forms = (): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const onChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <UiSpacing padding={{ all: 'five' }}>
      <UiSpacing padding={{ block: 'four' }}>
        <UiHeading centered>Forms</UiHeading>
      </UiSpacing>
      <UiCard weight="10">
        <UiGrid colsGap="three" rowsGap="three" cols={{ small: 3, medium: 3, large: 7, xlarge: 7 }}>
          <UiButton>
            <UiSpacing padding={{ block: 'four' }}>Primary 🐣</UiSpacing>
          </UiButton>
          <UiButton category="secondary">
            <UiSpacing padding={{ block: 'four' }}>Secondary 🦆</UiSpacing>
          </UiButton>
          <UiButton category="tertiary">
            <UiSpacing padding={{ block: 'four' }}>Tertiary 🐝</UiSpacing>
          </UiButton>
          <UiButton category="positive">
            <UiSpacing padding={{ block: 'four' }}>Positive 🐞</UiSpacing>
          </UiButton>
          <UiButton category="error">
            <UiSpacing padding={{ block: 'four' }}>Error 🐍</UiSpacing>
          </UiButton>
          <UiButton category="warning">
            <UiSpacing padding={{ block: 'four' }}>Warning 🐟</UiSpacing>
          </UiButton>
          <UiButton category="negative">
            <UiSpacing padding={{ block: 'four' }}>Negative 🦬</UiSpacing>
          </UiButton>
        </UiGrid>
      </UiCard>
      <UiSpacing margin={{ block: 'five' }}>
        <UiCard>
          <UiGrid cols={4} colsGap="five">
            <UiGridItem>
              <UiSelect>
                <option>Lorem</option>
                <option>Ipsum</option>
              </UiSelect>
            </UiGridItem>
            <UiGridItem>
              <UiInput placeholder="Lorem ipsum" />
            </UiGridItem>
            <UiGridItem>
              <Div>
                <UiSwitch label="Lorem ipsum" category="positive" onChange={onChecked} name="myCheckbox" />
              </Div>
            </UiGridItem>
            <UiGridItem>
              <UiFlexGrid columnGap="three">
                <UiButton category="positive">
                  <UiSpacing padding={{ block: 'four' }}>Lorem 🦊</UiSpacing>
                </UiButton>
                <UiButton category="error">
                  <UiSpacing padding={{ block: 'four' }}>Lorem 🐸</UiSpacing>
                </UiButton>
              </UiFlexGrid>
            </UiGridItem>
          </UiGrid>
        </UiCard>
      </UiSpacing>
    </UiSpacing>
  );
};
