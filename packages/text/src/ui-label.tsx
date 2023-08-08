import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getColorCategory, getTextSize, getThemeStyling } from '@uireact/foundation';

import { UiLabelProps, privateLabelProps } from './types';
import { LabelMapper, getLabelDynamicMapper } from './theme';

const Label = styled.label<privateLabelProps>`
  ${(props) => `
    ${getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      props.$category ? getLabelDynamicMapper(getColorCategory(props.$category)) : LabelMapper
    )}
    ${`font-size: ${getTextSize(props.$customTheme, props.$size)};`}
  `}

  padding: 0;
  margin: 0;
`;

export const UiLabel: React.FC<UiLabelProps> = ({ children, htmlFor, size = TextSize.small, theme }: UiLabelProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Label
      $customTheme={themeContext.theme}
      $selectedTheme={themeContext.selectedTheme}
      $size={size}
      $category={theme}
      $htmlFor={htmlFor}
    >
      {children}
    </Label>
  );
};

UiLabel.displayName = 'UiLabel';
