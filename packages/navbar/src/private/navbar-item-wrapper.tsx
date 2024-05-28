import React from 'react';

import { styled } from 'styled-components';

import { ColorCategory, getColorCategory } from '@uireact/foundation';

import { NavbarColoration, NavbarStyling, NavbarOrientation, NavbarRounded } from '../types';
import { getBorderRadiusStyling, getColorationToken } from '../utils';

type NavbarItemWrapperProps = {
  children: React.ReactNode;
  /**  Stacked will render all options vertically - INLINE Default */
  $orientation?: NavbarOrientation;
  /** If items should be stretched, useful when navbar is rendered to cover whole width */
  $stretchItems?: boolean;
  $category: ColorCategory;
  $isFirst?: boolean;
  $isLast?: boolean;
  $active?: boolean;
  $styling?: NavbarStyling;
  $rounded?: NavbarRounded;
  $hoverColoration?: NavbarColoration;
  $noBackground?: boolean;
};

const Div = styled.div<NavbarItemWrapperProps>`
  ${(props) => `
    ${props.$orientation === 'stacked' ? 'width: 100%;' : ''}
    ${props.$rounded === 'edges' ? getBorderRadiusStyling(props.$orientation, props.$isFirst, props.$isLast) : ''}
    ${props.$rounded === 'all' ? 'border-radius: 20px;' : ''}
    ${props.$stretchItems ? 'flex-grow: 1; text-align: center;' : ''}
    ${!props.$noBackground ? `background-color: var(--${props.$category}-token_100);` : ''}
  `}

  > :first-child {
    transition: background 0.2s, border-left 0.2s;
    box-sizing: border-box;

    ${(props) => `
      ${props.$rounded === 'edges' ? getBorderRadiusStyling(props.$orientation, props.$isFirst, props.$isLast) : ''}
      ${props.$rounded === 'all' ? 'border-radius: 20px;' : ''}
      ${
        props.$styling === 'bordered'
          ? `
          border-${props.$orientation === 'inline' ? 'bottom' : 'left'}: 2px solid transparent;
          ${props.$orientation === 'stacked' ? 'padding-left: 10px;' : ''}

            &:hover {
              border-${props.$orientation === 'inline' ? 'bottom' : 'left'}: 2px solid var(--${getColorCategory(
              props.$category
            )}-${getColorationToken(props.$hoverColoration)});
            }`
          : `
            &:hover {
              background-color: var(--${getColorCategory(props.$category)}-${getColorationToken(props.$hoverColoration)});
            }
          `
      }
      ${
        props.$active
          ? props.$styling === 'bordered'
            ? `
            border-${props.$orientation === 'inline' ? 'bottom' : 'left'}: 2px solid var(--${getColorCategory(
                props.$category
              )}-${getColorationToken(props.$hoverColoration, true)});
            `
            : `
            background-color: var(--${getColorCategory(props.$category)}-${getColorationToken(props.$hoverColoration, true)});`
          : ''
      }
    `}
  }
`;

export const NavbarItemWrapper: React.FC<NavbarItemWrapperProps> = ({
  $rounded,
  $orientation,
  $category,
  children,
  $isFirst,
  $isLast,
  $stretchItems,
  $styling,
  $hoverColoration,
  $noBackground
}: NavbarItemWrapperProps) => {
  if (React.isValidElement(children)) {
    const props = children.props;

    return (
      <Div
        $rounded={$rounded}
        $category={$category}
        $orientation={$orientation}
        $isFirst={$isFirst}
        $isLast={$isLast}
        $stretchItems={$stretchItems}
        $styling={$styling}
        $active={props.active}
        $hoverColoration={$hoverColoration}
        $noBackground={$noBackground}
      >
        {children}
      </Div>
    );
  }

  return null;
};
