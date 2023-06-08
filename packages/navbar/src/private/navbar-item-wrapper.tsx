import React from 'react';

import styled from 'styled-components';

import { ColorCategory, UiReactPrivateElementProps, getThemeStyling } from '@uireact/foundation';

import { UiNavbarItemProps, UiNavbarProps } from '../types';
import { getNavbarItemMapper } from '../theme';

type NavbarItemWrapperProps = UiNavbarProps & {
  category: ColorCategory;
} & UiReactPrivateElementProps;

const Div = styled.div<NavbarItemWrapperProps>`
  ${(props) => `
    ${props.orientation === 'stacked' ? 'width: 100%;' : ''}
    ${getThemeStyling(props.customTheme, props.selectedTheme, getNavbarItemMapper(props.category))}
  `}

  transition: background 0.2s;
`;

export const NavbarItemWrapper: React.FC<NavbarItemWrapperProps> = ({
  align,
  orientation,
  category,
  children,
  customTheme,
  selectedTheme,
}: NavbarItemWrapperProps) => {
  if (React.isValidElement(children)) {
    const content = React.cloneElement<UiNavbarItemProps>(children as React.ReactElement<UiNavbarItemProps>, {
      category: category,
    });

    return (
      <Div
        align={align}
        category={category}
        customTheme={customTheme}
        selectedTheme={selectedTheme}
        orientation={orientation}
      >
        {content}
      </Div>
    );
  }

  return null;
};
