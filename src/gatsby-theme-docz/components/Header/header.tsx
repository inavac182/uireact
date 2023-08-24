import React from 'react';

import { UiHeader } from '@uireact/header';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex-grid';

import { Logo } from './logo';
import { Actions } from './actions';

const headerContentSpacing: UiSpacingProps['padding'] = { left: 'six', right: 'six', top: 'four', bottom: 'four' };

export const Header = (): React.ReactElement => (
  <UiHeader fixed className="main-header">
    <UiSpacing padding={headerContentSpacing}>
      <UiFlexGrid justifyContent="space-between" alignItems="center">
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
