import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getTextSize, getThemeStyling } from '@uireact/foundation';

import { UiLabelProps, privateLabelProps } from './types';
import { LabelMapper, getCategory, getLabelDynamicMapper } from './theme';

const Label = styled.label<privateLabelProps>`
  ${(props) => `
    ${getThemeStyling(
      props.customTheme,
      props.selectedTheme,
      props.state ? getLabelDynamicMapper(getCategory(props.state)) : LabelMapper
    )}
    ${`font-size: ${getTextSize(props.customTheme, props.size)};`}
  `}

  padding: 0;
  margin: 0;
`;

export const UiLabel: React.FC<UiLabelProps> = ({ children, htmlFor, size = TextSize.small, state }: UiLabelProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Label customTheme={theme.theme} selectedTheme={theme.selectedTheme} size={size} state={state} htmlFor={htmlFor}>
      {children}
    </Label>
  );
};

UiLabel.displayName = 'UiLabel';
