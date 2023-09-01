import React, { useCallback, useState } from 'react';

import { UiButton } from '@uireact/button';
import { UiCard } from '@uireact/card';
import { UiSpacing } from '@uireact/foundation';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiFlexGrid } from '@uireact/flex-grid';
import { UiHeading } from '@uireact/text';
import { UiCheckbox, UiInput, UiSelect } from '@uireact/form';
import { styled } from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Forms = (): React.ReactElement => {
  const [checked, setChecked] = useState(false);

  const onChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <UiSpacing padding={{ all: 'five' }}>
      <UiHeading centered>Forms</UiHeading>
      <UiCard weight="10">
        <UiGrid colsGap={5} rowsGap={5} cols={{ small: 3, medium: 3, large: 7, xlarge: 7 }}>
          <UiButton>
            <UiSpacing padding={{ block: 'four' }}>Primary 🐣</UiSpacing>
          </UiButton>
          <UiButton theme="secondary">
            <UiSpacing padding={{ block: 'four' }}>Secondary 🦆</UiSpacing>
          </UiButton>
          <UiButton theme="tertiary">
            <UiSpacing padding={{ block: 'four' }}>Tertiary 🐝</UiSpacing>
          </UiButton>
          <UiButton theme="positive">
            <UiSpacing padding={{ block: 'four' }}>Positive 🐞</UiSpacing>
          </UiButton>
          <UiButton theme="error">
            <UiSpacing padding={{ block: 'four' }}>Error 🐍</UiSpacing>
          </UiButton>
          <UiButton theme="warning">
            <UiSpacing padding={{ block: 'four' }}>Warning 🐟</UiSpacing>
          </UiButton>
          <UiButton theme="negative">
            <UiSpacing padding={{ block: 'four' }}>Negative 🦬</UiSpacing>
          </UiButton>
        </UiGrid>
      </UiCard>
      <UiSpacing margin={{ block: 'five' }}>
        <UiCard>
          <UiGrid cols={4} colsGap={10}>
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
                <UiCheckbox label="Lorem ipsum" category="positive" onChange={onChecked} name="myCheckbox" />
              </Div>
            </UiGridItem>
            <UiGridItem>
              <UiFlexGrid columnGap="three">
                <UiButton theme="positive">
                  <UiSpacing padding={{ block: 'four' }}>Lorem 🦊</UiSpacing>
                </UiButton>
                <UiButton theme="error">
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
