'use client';
import React, { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ColorTokens, ThemeColor, ThemeContext, getColorCategory, getThemeColor } from '@uireact/foundation';

import { UiIconProps, privateIconProps } from './types';
import { IconComponent } from './public';

const Span = styled(motion.span)<privateIconProps>`
  ${(props: privateIconProps) => `
    ${
      props.$coloration === 'dark'
        ? `fill: ${getThemeColor(
            props.$theme,
            ThemeColor.dark,
            getColorCategory(props.$category),
            ColorTokens.token_100
          )};`
        : ''
    }
        ${
          props.$coloration === 'light'
            ? `fill: ${getThemeColor(
                props.$theme,
                ThemeColor.light,
                getColorCategory(props.$category),
                ColorTokens.token_100
              )};`
            : ''
        }
    ${
      !props.$coloration
        ? `fill: var(--${props.$inverseColoration ? 'inverse-' : ''}${getColorCategory(props.$category)}-token_100);`
        : ''
    }
    

    ${`font-size: var(--texts-${props.$size});`}
    ${`line-height: var(--texts-${props.$size});`}
    ${`height: var(--texts-${props.$size});`}
    ${`width: var(--texts-${props.$size});`}
  `}

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
  motion
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
      {...motion}
    >
      <IconComponent icon={icon} />
    </Span>
  );
};

UiIcon.displayName = 'UiIcon';
