import React from 'react';

import styled from 'styled-components';

import { ThemeContext } from '@uireact/foundation';

import { UiNavbarProps, privateNavbarProps } from './types';
import { NavbarItemWrapper } from './private';
import { getFlexAlignment } from './utils';

const NavbarWrapper = styled.div<privateNavbarProps>`
  display: flex;

  a: hover {
    text-decoration: none;
  }

  ${(props: privateNavbarProps) => {
    return `
      flex-direction: ${props.orientation === 'stacked' ? 'column' : 'row'};
      ${getFlexAlignment(props.align, props.orientation)}
    `;
  }}
`;

export const UiNavbar: React.FC<UiNavbarProps> = ({
  align = 'start',
  category = 'primary',
  children,
  orientation = 'inline',
  roundedCorners,
}: UiNavbarProps) => {
  const themeContext = React.useContext(ThemeContext);

  const NavbarContent = React.useMemo(() => {
    const numberOfItems = React.Children.count(children);
    const elements: React.ReactElement[] = [];

    React.Children.map(children, (child, index) => {
      elements.push(
        <NavbarItemWrapper
          align={align}
          category={category}
          orientation={orientation}
          customTheme={themeContext.theme}
          selectedTheme={themeContext.selectedTheme}
          key={`navbar-item-${index}`}
          isFirst={index === 0}
          isLast={index === numberOfItems - 1}
          roundedCorners={roundedCorners}
        >
          {child}
        </NavbarItemWrapper>
      );
    });

    return elements;
  }, [children, themeContext]);

  return (
    <NavbarWrapper
      align={align}
      customTheme={themeContext.theme}
      selectedTheme={themeContext.selectedTheme}
      orientation={orientation}
    >
      <>{NavbarContent}</>
    </NavbarWrapper>
  );
};

UiNavbar.displayName = 'UiNavbar';
