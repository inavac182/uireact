import React from 'react';

import styled from 'styled-components';

import { ColorCategory, getColorCategory } from '@uireact/foundation';

import { Alignment, NavbarStyling, Orientation } from '../types';
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
};

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

    transition: background 0.2s, border-left 0.2s;
    border-left: 2px solid transparent;

    ${(props) => `
      ${
        props.$styling === 'bordered'
          ? `
          border-${props.$orientation === 'inline' ? 'bottom' : 'left'}: 2px solid transparent;
          padding-left: 10px;

            &:hover {
              border-${props.$orientation === 'inline' ? 'bottom' : 'left'}: 2px solid var(--${getColorCategory(
              props.$category
            )}-token_100);
            }`
          : `
            &:hover {
              background-color: var(--${getColorCategory(props.$category)}-token_50);
            }
          `
      }
      ${
        props.$active
          ? props.$styling === 'bordered'
            ? `
            border-${props.$orientation === 'inline' ? 'bottom' : 'left'}: 2px solid var(--${getColorCategory(
                props.$category
              )}-token_150);
            `
            : `
            background-color: var(--${getColorCategory}-token_10);`
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
  $isFirst,
  $isLast,
  $roundedCorners,
  $stretchItems,
  $styling,
}: NavbarItemWrapperProps) => {
  if (React.isValidElement(children)) {
    const props = children.props;

    return (
      <Div
        $align={$align}
        $category={$category}
        $orientation={$orientation}
        $roundedCorners={$roundedCorners}
        $isFirst={$isFirst}
        $isLast={$isLast}
        $stretchItems={$stretchItems}
        $styling={$styling}
        // eslint-disable-next-line react/prop-types
        $active={props.active}
      >
        {children}
      </Div>
    );
  }

  return null;
};
