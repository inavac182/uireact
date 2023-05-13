import React from 'react';

import styled from 'styled-components';

import { ColorCategories, TextSize, ThemeContext, getTextSize, getThemeStyling } from '@uireact/foundation';

import { UiIconProps, privateIconProps } from './types';
import { getDynamicMapper } from './theme';

import click from './public/svgs/Click';
import picture from './public/svgs/040Picture';
import rightArrow from './public/svgs/RightArrow';

const Span = styled.span<privateIconProps>`
  ${(props) => `
    ${getThemeStyling(
      props.customTheme,
      props.selectedTheme,
      getDynamicMapper(props.category || ColorCategories.fonts)
    )}

    img {
      width: ${getTextSize(props.customTheme, props.size || TextSize.small)};
    }
  `}
`;

const getIcon = (id: string) => {
  //istanbul ignore next
  switch (id) {
    case 'click':
      return click;
    case 'picture':
      return picture;
    case 'right-arrow':
      return rightArrow;
    default:
      return '';
  }
};

export const UiIcon: React.FC<UiIconProps> = ({ category, id, size }: UiIconProps) => {
  const theme = React.useContext(ThemeContext);
  const IconComponent = getIcon(id);

  return (
    <Span category={category} customTheme={theme.theme} selectedTheme={theme.selectedTheme} size={size}>
      {IconComponent != '' ? <IconComponent /> : <></>}
    </Span>
  );
};

UiIcon.displayName = 'UiIcon';
