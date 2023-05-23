import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getTextSize, getThemeStyling, UiSpacing } from '@uireact/foundation';

import { getDynamicBadgeMapper } from './theme';
import { UiBadgeProps, privateBadgeProps } from './types';

const BadgeDiv = styled.div<privateBadgeProps>`
  ${(props) => `
    ${getThemeStyling(props.customTheme, props.selectedTheme, getDynamicBadgeMapper(props.category))}
    font-size: ${getTextSize(props.customTheme, props.size || TextSize.small)};
    border-radius: ${getTextSize(props.customTheme, props.size || TextSize.small)};
    font-weight: bold;
  `}

  border-width: 2px;
  border-style: solid;
  display: inline-block;
`;

export const UiBadge: React.FC<UiBadgeProps> = ({ category, className, children, size }: UiBadgeProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <BadgeDiv
      customTheme={theme.theme}
      selectedTheme={theme.selectedTheme}
      category={category}
      className={className}
      size={size}
    >
      <UiSpacing padding={{ inline: 'three' }}>{children}</UiSpacing>
    </BadgeDiv>
  );
};

UiBadge.displayName = 'UiBadge';
