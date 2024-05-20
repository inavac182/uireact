'use client';
import React, { useContext } from 'react';

import { styled } from 'styled-components';

import { ColorTokens, ThemeColor, ThemeContext, getColorCategory, getSpacingStyle, getThemeColor } from '@uireact/foundation';

import { UiLabelProps, privateLabelProps } from './types';

const Label = styled.label<privateLabelProps>`
  ${(props) => `
    ${
      props.$coloration === 'dark'
        ? `color: ${getThemeColor(
            props.$theme,
            ThemeColor.dark,
            getColorCategory(props.$category),
            ColorTokens.token_100
          )};`
        : ''
    }
    ${
      props.$coloration === 'light'
        ? `color: ${getThemeColor(
            props.$theme,
            ThemeColor.light,
            getColorCategory(props.$category),
            ColorTokens.token_100
          )};`
        : ''
    }
    ${!props.$coloration ? `color: var(--${getColorCategory(props.$category)}-token_100);` : ''}
    ${`font-size: var(--texts-${props.$size});`}
    ${`line-height: var(--texts-${props.$size});`}
    ${props.$padding ? `padding: ${getSpacingStyle(props.$padding)};` : ''}
    ${props.$margin ? `margin: ${getSpacingStyle(props.$margin)};` : ''}
  `}
`;

export const UiLabel: React.FC<UiLabelProps> = ({
  children,
  coloration,
  htmlFor,
  size = 'small',
  category,
  margin,
  padding
}: UiLabelProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Label $size={size} $coloration={coloration} $category={category} htmlFor={htmlFor} $theme={theme} $margin={margin} $padding={padding}>
      {children}
    </Label>
  );
};

UiLabel.displayName = 'UiLabel';
