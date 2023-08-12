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
  margin-left: 10px;

  font-size: 8px;
`;

const GroupHeadingDiv = styled.div`
  cursor: pointer;
`;

const nestedItemSpacing: UiSpacingProps['padding'] = { all: 'three' };
const sidebarGroupSpacing: UiSpacingProps['margin'] = { block: 'three' };
const nestedHeadingSpacing: UiSpacingProps['padding'] = { left: 'four' };

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
        {menuItem.menu && menuItem.menu.length > 0 ? (
          <UiText theme={isExpanded ? 'tertiary' : undefined}>{menuItem.name}</UiText>
        ) : (
          <UiLink href={menuItem.route}>
            <UiText>{menuItem.name}</UiText>
          </UiLink>
        )}
      </GroupHeadingDiv>
      {isExpanded && (
        <NestedMenu>
          <UiNavbar orientation="stacked">
            {menuItem.menu?.map((item, key) => (
              <UiNavbarItem
                key={`sidebar-submenu-item-${key}`}
                active={item.route !== undefined && item.route === currentDoc?.route}
              >
                <UiSpacing padding={nestedItemSpacing}>
                  <>
                    <UiLink href={item.route} fullWidth theme="tertiary">
                      {item.name}
                    </UiLink>
                    {item.route !== undefined && item.route === currentDoc.route && (
                      <UiNavbar category="secondary" orientation="stacked">
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/*@ts-ignore-next */}
                        {item.headings?.map((heading, index) => {
                          if (heading?.depth > 2 || index === 0) {
                            return null;
                          }

                          return (
                            <UiNavbarItem key={`sidebar-submenu-nested-item-${index}`}>
                              <UiSpacing padding={nestedHeadingSpacing}>
                                <UiLink href={`#${heading?.slug}`} fullWidth theme="tertiary">
                                  {heading?.value}
                                </UiLink>
                              </UiSpacing>
                            </UiNavbarItem>
                          );
                        })}
                      </UiNavbar>
                    )}
                  </>
                </UiSpacing>
              </UiNavbarItem>
            ))}
          </UiNavbar>
        </NestedMenu>
      )}
    </UiSpacing>
  );
};
