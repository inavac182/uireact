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

import { UiNavbarProps } from '../types';
import { getNavbarItemMapper } from '../theme';
import { getBorderRadiusStyling } from '../utils';

type NavbarItemWrapperProps = UiNavbarProps & {
  category: ColorCategory;
  isFirst?: boolean;
  isLast?: boolean;
} & UiReactPrivateElementProps;

const Div = styled.div<NavbarItemWrapperProps>`
  ${(props) => `
    ${props.orientation === 'stacked' ? 'width: 100%;' : ''}
    ${getThemeStyling(props.customTheme, props.selectedTheme, getNavbarItemMapper(props.category))}
    ${props.roundedCorners ? getBorderRadiusStyling(props.orientation, props.isFirst, props.isLast) : ''}
  `}

  div {
    ${(props) => `
      ${props.roundedCorners ? getBorderRadiusStyling(props.orientation, props.isFirst, props.isLast) : ''}
      background: ${getThemeColor(
        props.customTheme,
        props.selectedTheme,
        getColorCategory(props.category),
        ColorTokens.token_150,
        false
      )};
    `}
  }

  transition: background 0.2s;
`;

export const NavbarItemWrapper: React.FC<NavbarItemWrapperProps> = ({
  align,
  orientation,
  category,
  children,
  customTheme,
  isFirst,
  isLast,
  roundedCorners,
  selectedTheme,
}: NavbarItemWrapperProps) => {
  if (React.isValidElement(children)) {
    return (
      <Div
        align={align}
        category={category}
        customTheme={customTheme}
        selectedTheme={selectedTheme}
        orientation={orientation}
        roundedCorners={roundedCorners}
        isFirst={isFirst}
        isLast={isLast}
      >
        {children}
      </Div>
    );
  }

  return null;
};
