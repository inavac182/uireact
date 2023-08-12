import React from 'react';

import { useMenus } from 'docz';
import { styled } from 'styled-components';

import { UiFlexGrid } from '@uireact/flex';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiViewRow } from '@uireact/view';

import { SidebarGroup } from './sidebar-group';

const SidebarSpacing: UiSpacingProps['margin'] = { left: 'six', top: 'six' };

const SidebarDiv = styled.div`
  position: sticky;
  top: 85px;
  min-width: 0;
  max-height: 90vh;
  border-right: 2px solid #3e3e3e;
  overflow: auto;
`;

const SideBarContentDiv = styled.div`
  @media only screen and (max-width: 920px) {
    display: none;
  }
`;

export const Sidebar = React.forwardRef((): React.ReactElement => {
  const [query, setQuery] = React.useState('');
  const menus = useMenus({ query });

  return (
    <SidebarDiv>
      <UiViewRow>
        <SideBarContentDiv>
          <UiSpacing margin={SidebarSpacing}>
            <UiFlexGrid direction="column">
              {menus?.map((menuItem, index) => (
                <SidebarGroup key={`navbar-group-${index}`} menuItem={menuItem} />
              ))}
            </UiFlexGrid>
          </UiSpacing>
        </SideBarContentDiv>
      </UiViewRow>
    </SidebarDiv>
  );
});
