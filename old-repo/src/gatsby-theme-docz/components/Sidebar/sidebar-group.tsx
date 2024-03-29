import React, { useCallback, useEffect, useState } from 'react';

import { MenuItem, useCurrentDoc } from 'docz';
import styled from 'styled-components';

import { UiLink, UiText } from '@uireact/text';
import { UiNavbar, UiNavbarItem } from '@uireact/navbar';
import { TextSize, UiSpacing, UiSpacingProps } from '@uireact/foundation';

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

const getCurrentHash = () => {
  if (typeof window === 'undefined') {
    return '';
  }
  return window.location ? decodeURI(window.location.hash) : '';
};

export const SidebarGroup = ({ menuItem }: SidebarGroupProps): React.ReactElement => {
  const currentDoc = useCurrentDoc();
  const [isExpanded, setIsExpanded] = useState(false);
  const currentHash = getCurrentHash();

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
          <UiText size={TextSize.large}>{menuItem.name}</UiText>
        ) : (
          <UiLink size="large">
            <a href={menuItem.route}>{menuItem.name}</a>
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
                    <UiLink fullWidth size="large">
                      <a href={item.route}>{item.name}</a>
                    </UiLink>
                    {item.route !== undefined && item.route === currentDoc.route && (
                      <UiNavbar category="tertiary" orientation="stacked" styling="bordered">
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/*@ts-ignore-next */}
                        {item.headings?.map((heading, index) => {
                          if (heading?.depth > 2 || index === 0) {
                            return null;
                          }

                          return (
                            <UiNavbarItem
                              key={`sidebar-submenu-nested-item-${index}`}
                              active={currentHash === `#${heading.slug}`}
                            >
                              <UiSpacing padding={nestedHeadingSpacing}>
                                <UiLink fullWidth wrap>
                                  <a href={`#${heading?.slug}`}>{heading?.value}</a>
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
