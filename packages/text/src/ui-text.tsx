import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getTextSize } from '@uireact/foundation';

import { UiTextProps, privateTextProps } from './types';

const Text = styled.p<privateTextProps>`
  ${(props) => `
    ${props.centered ? `text-align: center;` : ``}
    ${props.inline ? `display: inline;` : ``}
    ${`font-size: ${getTextSize(props.customTheme, props.size)};`}
  `}

  padding: 0;
  margin: 0;
`;

export const UiText: React.FC<UiTextProps> = ({ children, centered, inline, size = TextSize.regular }: UiTextProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Text customTheme={theme.theme} selectedTheme={theme.selectedTheme} size={size} centered={centered} inline={inline}>
      {children}
    </Text>
  );
};

UiText.displayName = 'UiText';
