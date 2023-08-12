import React, { useCallback, useEffect, useState } from 'react';

import { MenuItem, useCurrentDoc } from 'docz';
import styled from 'styled-components';

import { UiLink, UiText } from '@uireact/text';
import { UiNavbar, UiNavbarItem } from '@uireact/navbar';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

type SidebarGroupProps = {
  menuItem: MenuItem;
};

type NestedMenuProps = {
  $isVisible?: boolean;
};

const NestedMenu = styled.div<NestedMenuProps>`
  margin-top: 10px;
  margin-left: 30px;

  ${(props) => `
    ${props.$isVisible ? 'display: block; height: auto;' : 'display: none; height: 0;'}
  `}

  transition: height 1s, display 1s;
`;

const GroupHeadingDiv = styled.div`
  cursor: pointer;
`;

const nestedItemSpacing: UiSpacingProps['padding'] = { all: 'three' };
const sidebarGroupSpacing: UiSpacingProps['margin'] = { block: 'three' };

export const SidebarGroup = ({ menuItem }: SidebarGroupProps): React.ReactElement => {
  const currentDoc = useCurrentDoc();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let isSelected = false;

    if (menuItem.route !== undefined) {
      isSelected = menuItem.route === currentDoc?.route;
    } else if (menuItem.menu && menuItem.menu.length > 0) {
      isSelected = menuItem.menu?.filter((item) => item.route && item.route === currentDoc?.route).length > 0;
    }

    setIsExpanded(isSelected);
  }, [currentDoc, menuItem]);

  const onClick = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded, setIsExpanded]);

  return (
    <UiSpacing margin={sidebarGroupSpacing}>
      <GroupHeadingDiv onClick={onClick}>
        <UiText theme={isExpanded ? 'tertiary' : undefined}>{menuItem.name}</UiText>
      </GroupHeadingDiv>
      <NestedMenu $isVisible={isExpanded}>
        <UiNavbar orientation="stacked">
          {menuItem.menu?.map((item, key) => (
            <UiNavbarItem
              key={`sidebar-submenu-item-${key}`}
              active={item.route !== undefined && item.route === currentDoc?.route}
            >
              <UiSpacing padding={nestedItemSpacing}>
                <UiLink href={item.route} fullWidth theme="tertiary">
                  {item.name}
                </UiLink>
              </UiSpacing>
            </UiNavbarItem>
          ))}
        </UiNavbar>
      </NestedMenu>
    </UiSpacing>
  );
};
