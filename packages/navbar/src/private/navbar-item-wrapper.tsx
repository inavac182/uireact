import React from 'react';

import styled from 'styled-components';

import {
  ColorCategory,
  ColorTokens,
  UiReactPrivateElementProps,
  getColorCategory,
  getThemeColor,
  getThemeStyling,
} from '@uireact/foundation';

import { Alignment, Orientation } from '../types';
import { getNavbarItemMapper } from '../theme';
import { getBorderRadiusStyling } from '../utils';

type NavbarItemWrapperProps = {
  children: React.ReactNode;
  /**  Stacked will render all options vertically - INLINE Default */
  $orientation?: Orientation;
  /** Navbar alignment */
  $align?: Alignment;
  /** If top and bottom item render rounded corners, useful for rendering navbar inside cards */
  $roundedCorners?: boolean;
  /** If items should be stretched, useful when navbar is rendered to cover whole width */
  $stretchItems?: boolean;
  $category: ColorCategory;
  $isFirst?: boolean;
  $isLast?: boolean;
} & UiReactPrivateElementProps;

const Div = styled.div<NavbarItemWrapperProps>`
  ${(props) => `
    ${props.$orientation === 'stacked' ? 'width: 100%;' : ''}
    ${getThemeStyling(props.$customTheme, props.$selectedTheme, getNavbarItemMapper(props.$category))}
    ${props.$roundedCorners ? getBorderRadiusStyling(props.$orientation, props.$isFirst, props.$isLast) : ''}
    ${props.$stretchItems ? 'flex-grow: 1; text-align: center;' : ''}
  `}

  > div {
    ${(props) => `
      ${props.$roundedCorners ? getBorderRadiusStyling(props.$orientation, props.$isFirst, props.$isLast) : ''}
      background: ${getThemeColor(
        props.$customTheme,
        props.$selectedTheme,
        getColorCategory(props.$category),
        ColorTokens.token_150,
        false
      )};
    `}
  }

  transition: background 0.2s;
`;

export const NavbarItemWrapper: React.FC<NavbarItemWrapperProps> = ({
  $align,
  $orientation,
  $category,
  children,
  $customTheme,
  $isFirst,
  $isLast,
  $roundedCorners,
  $selectedTheme,
  $stretchItems,
}: NavbarItemWrapperProps) => {
  if (React.isValidElement(children)) {
    return (
      <Div
        $align={$align}
        $category={$category}
        $customTheme={$customTheme}
        $selectedTheme={$selectedTheme}
        $orientation={$orientation}
        $roundedCorners={$roundedCorners}
        $isFirst={$isFirst}
        $isLast={$isLast}
        $stretchItems={$stretchItems}
      >
        {children}
      </Div>
    );
  }

  return null;
};
