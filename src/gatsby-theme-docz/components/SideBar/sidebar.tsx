import React from 'react';

import { useMenus } from 'docz';
import { styled } from 'styled-components';

import { UiFlexGrid } from '@uireact/flex';
import { UiSpacing, UiSpacingProps, UiViewport } from '@uireact/foundation';
import { UiViewRow } from '@uireact/view';

import { SidebarGroup } from './sidebar-group';

const SidebarSpacing: UiSpacingProps['margin'] = { left: 'six', top: 'six' };

const SidebarDiv = styled.div`
  position: sticky;
  top: 0;
  min-width: 0;
  max-height: 100vh;
  border-right: 2px solid lightgray;
`;

export const Sidebar = React.forwardRef((): React.ReactElement => {
  const [query, setQuery] = React.useState('');
  const menus = useMenus({ query });

  return (
    <SidebarDiv>
      <UiViewRow>
        <UiViewport criteria={'m|l|xl'}>
          <UiSpacing margin={SidebarSpacing}>
            <UiFlexGrid direction="column">
              {menus?.map((menuItem, index) => (
                <SidebarGroup key={`navbar-group-${index}`} menuItem={menuItem} />
              ))}
            </UiFlexGrid>
          </UiSpacing>
        </UiViewport>
      </UiViewRow>
    </SidebarDiv>
  );
});
