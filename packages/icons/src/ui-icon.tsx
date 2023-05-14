import React from 'react';

import styled from 'styled-components';

import { ColorCategories, ThemeContext, getThemeStyling } from '@uireact/foundation';

import { UiIconProps, privateIconProps } from './types';
import { getDynamicMapper } from './theme';
import { IconComponent } from './public';

const Span = styled.span<privateIconProps>`
  ${(props) => `
    ${getThemeStyling(
      props.customTheme,
      props.selectedTheme,
      getDynamicMapper(props.category || ColorCategories.fonts)
    )}
  `}
`;

export const UiIcon: React.FC<UiIconProps> = ({ category, icon, size }: UiIconProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Span category={category} customTheme={theme.theme} selectedTheme={theme.selectedTheme} size={size}>
      <IconComponent icon={icon} />
    </Span>
  );
};

UiIcon.displayName = 'UiIcon';
