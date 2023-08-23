import React from 'react';

import styled from 'styled-components';

import {
  ColorCategories,
  ThemeContext,
  getColorCategory,
  getTextSizeFromSizeString,
  getThemeStyling,
} from '@uireact/foundation';

import { UiIconProps, privateIconProps } from './types';
import { getDynamicMapper } from './theme';
import { IconComponent } from './public';

const Span = styled.span<privateIconProps>`
  ${(props: privateIconProps) => `
    ${getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      getDynamicMapper(props.$category ? getColorCategory(props.$category) : ColorCategories.fonts)
    )}
    ${props.$size ? `font-size: ${getTextSizeFromSizeString(props.$customTheme, props.$size)};` : ''}
    ${props.$size ? `width: ${getTextSizeFromSizeString(props.$customTheme, props.$size)};` : ''}
    ${props.$size ? `height: ${getTextSizeFromSizeString(props.$customTheme, props.$size)};` : ''}
  `}

  vertical-align: sub;
  display: inline-block;
  justify-content: center;
`;

export const UiIcon: React.FC<UiIconProps> = ({ theme, icon, size }: UiIconProps) => {
  const themeProvided = React.useContext(ThemeContext);

  return (
    <Span
      $category={theme}
      $customTheme={themeProvided.theme}
      $selectedTheme={themeProvided.selectedTheme}
      $size={size}
    >
      <IconComponent icon={icon} />
    </Span>
  );
};

UiIcon.displayName = 'UiIcon';
