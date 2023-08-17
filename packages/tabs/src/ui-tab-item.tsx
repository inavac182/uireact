import React from 'react';

import styled from 'styled-components';

import { ColorCategories, ColorTokens, ThemeContext, getThemeColor, getThemeStyling } from '@uireact/foundation';

import { UiTabItemProps, privateTabItemProps } from './types';
import { TabsMapper } from './theme';

const TabItem = styled.div<privateTabItemProps>`
  ${(props) => `
    ${getThemeStyling(props.$customTheme, props.$selectedTheme, TabsMapper)}
    ${
      props.$selected
        ? `border-color: ${getThemeColor(
            props.$customTheme,
            props.$selectedTheme,
            ColorCategories.primary,
            ColorTokens.token_100
          )};
        `
        : 'border-color: transparent;'
    }
  `}

  transition: background 0.2s, border-color 0.2s;
  border-width: 0 0 2px 0;
  text-align: center;
  border-style: solid;
  flex-grow: 1;
  align-content: center;
  cursor: pointer;
  padding: 5px 0px 5px 0px;
`;

export function UiTabItem<T>({
  className,
  children,
  handleClick,
  identifier,
  selected,
}: UiTabItemProps<T>): JSX.Element {
  const theme = React.useContext(ThemeContext);

  const handleTabClick = React.useCallback(() => {
    handleClick(identifier);
  }, [identifier]);

  return (
    <TabItem
      $customTheme={theme.theme}
      $selectedTheme={theme.selectedTheme}
      className={className}
      onClick={handleTabClick}
      $selected={selected}
    >
      {children}
    </TabItem>
  );
}

UiTabItem.displayName = 'UiTabItem';
