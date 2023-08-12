import React from 'react';

import { UiHeader } from '@uireact/header';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

import { Logo } from './logo';
import { Actions } from './actions';

const headerContentSpacing: UiSpacingProps['padding'] = { all: 'four' };

export const Header = (): React.ReactElement => {
  return (
    <UiHeader>
      <UiSpacing padding={headerContentSpacing}>
        <UiFlexGrid justifyContent="space-between">
          <UiFlexGridItem>
            <Logo />
          </UiFlexGridItem>
          <UiFlexGridItem>
            <Actions />
          </UiFlexGridItem>
        </UiFlexGrid>
      </UiSpacing>
    </UiHeader>
  );
};
