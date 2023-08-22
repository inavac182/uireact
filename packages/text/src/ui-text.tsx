import React from 'react';

import styled from 'styled-components';

import {
  TextSize,
  ThemeColor,
  ThemeContext,
  getColorCategory,
  getTextSize,
  getThemeStyling,
} from '@uireact/foundation';

import { UiTextProps, privateTextProps } from './types';
import { TextMapper, getDynamicMapper } from './theme';

const Text = styled.p<privateTextProps>`
  ${(props) => `
    ${getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      props.$category || props.$inverseColoration
        ? getDynamicMapper(
            getColorCategory(props.$category),
            props.$selectedTheme === ThemeColor.dark,
            props.$inverseColoration
          )
        : TextMapper
    )}
    ${props.$centered ? `text-align: center;` : ``}
    ${props.$align ? `text-align: ${props.$align};` : ``}
    ${props.$inline ? `display: inline;` : ``}
    ${`font-size: ${getTextSize(props.$customTheme, props.$size)};`}
    ${props.$fontStyle === 'italic' ? `font-style: ${props.$fontStyle};` : ''}
    ${props.$fontStyle === 'bold' ? `font-weight: bold;` : ''}
    ${props.$fontStyle === 'light' ? `font-weight: 300;` : ''}
    ${props.$fontStyle === 'regular' ? `font-weight: normal;` : ''}
  `}

  padding: 0;
  margin: 0;
`;

export const UiText: React.FC<UiTextProps> = ({
  align,
  children,
  centered,
  inline,
  fontStyle,
  size = TextSize.regular,
  category,
  inverseColoration,
}: UiTextProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Text
      $category={category}
      $customTheme={themeContext.theme}
      $fontStyle={fontStyle}
      $selectedTheme={themeContext.selectedTheme}
      $size={size}
      $align={align}
      $centered={centered}
      $inline={inline}
      $inverseColoration={inverseColoration}
    >
      {children}
    </Text>
  );
};

UiText.displayName = 'UiText';
