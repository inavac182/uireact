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

import { Alignment, NavbarStyling, Orientation } from '../types';
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
  $active?: boolean;
  $styling?: NavbarStyling;
} & UiReactPrivateElementProps;

const Div = styled.div<NavbarItemWrapperProps>`
  ${(props) => `
    ${props.$orientation === 'stacked' ? 'width: 100%;' : ''}
    ${props.$roundedCorners ? getBorderRadiusStyling(props.$orientation, props.$isFirst, props.$isLast) : ''}
    ${props.$stretchItems ? 'flex-grow: 1; text-align: center;' : ''}
  `}

  > div {
    ${(props) => `
      ${props.$roundedCorners ? getBorderRadiusStyling(props.$orientation, props.$isFirst, props.$isLast) : ''}
    `}
  }

  > div :first-child {
    transition: background 0.2s, border-left 0.2s;
    border-left: 2px solid transparent;
    padding-left: 5px;

    ${(props) => `
      ${
        props.$styling === 'bordered'
          ? `
            &:hover {
              border-${props.$orientation === 'inline' ? 'bottom' : 'left'}: 2px solid ${getThemeColor(
              props.$customTheme,
              props.$selectedTheme,
              getColorCategory(props.$category),
              ColorTokens.token_150,
              false
            )};
            }`
          : getThemeStyling(props.$customTheme, props.$selectedTheme, getNavbarItemMapper(props.$category))
      }
      ${
        props.$active
          ? props.$styling === 'bordered'
            ? `
            border-${props.$orientation === 'inline' ? 'bottom' : 'left'}: 2px solid ${getThemeColor(
                props.$customTheme,
                props.$selectedTheme,
                getColorCategory(props.$category),
                ColorTokens.token_150,
                false
              )};
            `
            : `
            background-color: ${getThemeColor(
              props.$customTheme,
              props.$selectedTheme,
              getColorCategory(props.$category),
              ColorTokens.token_100,
              false
            )}`
          : ''
      }
    `}
  }
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
  $styling,
}: NavbarItemWrapperProps) => {
  if (React.isValidElement(children)) {
    const props = children.props;

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
        $styling={$styling}
        $active={props.active}
      >
        {children}
      </Div>
    );
  }

  return null;
};
