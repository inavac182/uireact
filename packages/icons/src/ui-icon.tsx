'use client';
import React, { useContext } from 'react';

import styled from 'styled-components';

import { ColorTokens, ThemeColor, ThemeContext, getColorCategory, getThemeColor } from '@uireact/foundation';

import { UiIconProps, privateIconProps } from './types';
import { IconComponent } from './public';

const Span = styled.span<privateIconProps>`
  ${(props: privateIconProps) => `
    ${
      props.$coloration === 'dark'
        ? `stroke: ${getThemeColor(
            props.$theme,
            ThemeColor.dark,
            getColorCategory(props.$category),
            ColorTokens.token_100
          )};`
        : ''
    }
        ${
          props.$coloration === 'light'
            ? `stroke: ${getThemeColor(
                props.$theme,
                ThemeColor.light,
                getColorCategory(props.$category),
                ColorTokens.token_100
              )};`
            : ''
        }
    ${
      !props.$coloration
        ? `stroke: var(--${props.$inverseColoration ? 'inverse-' : ''}${getColorCategory(props.$category)}-token_100);`
        : ''
    }

    ${`font-size: var(--texts-${props.$size});`}
    ${`line-height: var(--texts-${props.$size});`}
    ${`height: var(--texts-${props.$size});`}
    ${`width: var(--texts-${props.$size});`}
  `}

  fill: none;
  vertical-align: sub;
  display: inline-block;
  justify-content: center;
`;

export const UiIcon: React.FC<UiIconProps> = ({
  category,
  coloration,
  icon,
  size = 'regular',
  testId,
  inverseColoration,
  motionSvg,
  motionPath
}: UiIconProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Span
      $category={category}
      $size={size}
      $inverseColoration={inverseColoration}
      data-testid={testId}
      $theme={theme}
      $coloration={coloration}
    >
      <IconComponent icon={icon} motionSvg={motionSvg} motionPath={motionPath} />
    </Span>
  );
};

UiIcon.displayName = 'UiIcon';
