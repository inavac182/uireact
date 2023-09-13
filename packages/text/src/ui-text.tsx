import React from 'react';

import styled, { css } from 'styled-components';

import {
  TextSize,
  ThemeContext,
  getColorCategory,
  getTextSizeFromSizeString,
  getThemeStyling,
} from '@uireact/foundation';

import { UiTextProps, privateTextProps } from './types';
import { TextMapper, getDynamicMapper } from './theme';

const SharedStyle = css<privateTextProps>`
  ${(props) => `
    ${props.$centered ? `text-align: center;` : ``}
    ${props.$align ? `text-align: ${props.$align};` : ``}
    ${`font-size: ${getTextSizeFromSizeString(props.$customTheme, props.$size)};`}
    ${`line-height: ${getTextSizeFromSizeString(props.$customTheme, props.$size)};`}
    ${props.$fontStyle === 'italic' ? `font-style: ${props.$fontStyle};` : ''}
    ${props.$fontStyle === 'bold' ? `font-weight: bold;` : ''}
    ${props.$fontStyle === 'light' ? `font-weight: 300;` : ''}
    ${props.$fontStyle === 'regular' ? `font-weight: normal;` : ''}
  `}
`;

const Text = styled.p<privateTextProps>`
  ${(props) => `
    ${getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      props.$category || props.$inverseColoration
        ? getDynamicMapper(getColorCategory(props.$category), props.$selectedTheme, props.$inverseColoration)
        : TextMapper
    )}
  `}

  ${SharedStyle}
  padding: 0;
  margin: 0;
`;

const Span = styled.span<privateTextProps>`
  ${(props) => `
    ${getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      props.$category || props.$inverseColoration
        ? getDynamicMapper(getColorCategory(props.$category), props.$selectedTheme, props.$inverseColoration)
        : TextMapper
    )}
  `}

  ${SharedStyle}
  padding: 0;
  margin: 0;
`;

export const UiText: React.FC<UiTextProps> = ({
  align,
  children,
  className,
  centered,
  inline,
  fontStyle,
  size = TextSize.regular,
  category,
  inverseColoration,
}: UiTextProps) => {
  const themeContext = React.useContext(ThemeContext);

  if (inline) {
    return (
      <Span
        $category={category}
        className={className}
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
      </Span>
    );
  }

  return (
    <Text
      $category={category}
      className={className}
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
