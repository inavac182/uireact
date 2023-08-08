import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getColorCategory, getTextSize, getThemeStyling } from '@uireact/foundation';

import { UiTextProps, privateTextProps } from './types';
import { TextMapper, getDynamicMapper } from './theme';

const Text = styled.p<privateTextProps>`
  ${(props) => `
    ${getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      props.category ? getDynamicMapper(getColorCategory(props.category)) : TextMapper
    )}
    ${props.centered ? `text-align: center;` : ``}
    ${props.inline ? `display: inline;` : ``}
    ${`font-size: ${getTextSize(props.$customTheme, props.size)};`}
    ${props.fontStyle === 'italic' ? `font-style: ${props.fontStyle};` : ''}
    ${props.fontStyle === 'bold' ? `font-weight: bold;` : ''}
    ${props.fontStyle === 'light' ? `font-weight: 300;` : ''}
    ${props.fontStyle === 'regular' ? `font-weight: normal;` : ''}
  `}

  padding: 0;
  margin: 0;
`;

export const UiText: React.FC<UiTextProps> = ({
  children,
  centered,
  inline,
  fontStyle,
  size = TextSize.regular,
  theme,
}: UiTextProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Text
      category={theme}
      $customTheme={themeContext.theme}
      fontStyle={fontStyle}
      $selectedTheme={themeContext.selectedTheme}
      size={size}
      centered={centered}
      inline={inline}
    >
      {children}
    </Text>
  );
};

UiText.displayName = 'UiText';
