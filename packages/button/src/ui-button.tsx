import * as React from 'react';

import styled from 'styled-components';

import {
  ThemeContext,
  getThemeStyling,
  getColorCategory,
  getSpacingDistributionStyle,
  getThemeColor,
  ColorTokens,
  ColorCategories,
} from '@uireact/foundation';

import { privateButtonProps, UiButtonProps } from './types';
import { getDynamicMapper } from './theme';

const StyledButton = styled.button<privateButtonProps>`
  ${(props) => {
    const mapper = getDynamicMapper(getColorCategory(props.$theme), props.$cristal);
    let styles = `
      ${getThemeStyling(props.$customTheme, props.$selectedTheme, mapper)}
      ${props.$fullWidth ? 'width: 100%;' : ''}
      ${props.$fullHeight ? 'height: 100%;' : ''}
      ${props.disabled ? 'cursor: not-allowed;' : 'cursor: pointer;'}
      ${props.$rounded ? 'border-radius: 15px/50%;' : 'border-radius: 3px;'}
    `;

    if (props.$cristal) {
      styles = `
        ${styles}
        padding: 0px 10px 0px 10px;
        border-width: 0;
        background: unset;
      `;
    } else if (props.$outlined) {
      styles = `
        ${styles}
        padding: 5px 10px 5px 10px;
        background: unset;
        color: ${getThemeColor(
          props.$customTheme,
          props.$selectedTheme,
          getColorCategory(props.$theme),
          ColorTokens.token_100
        )} !important;

        p, span {
          color: ${getThemeColor(
            props.$customTheme,
            props.$selectedTheme,
            getColorCategory(props.$theme),
            ColorTokens.token_100
          )} !important;
          fill: ${getThemeColor(
            props.$customTheme,
            props.$selectedTheme,
            getColorCategory(props.$theme),
            ColorTokens.token_100
          )} !important;
        }

        &: hover {
          p, span {
          color: ${getThemeColor(
            props.$customTheme,
            props.$selectedTheme,
            ColorCategories.fonts,
            ColorTokens.token_100
          )} !important;
          fill: ${getThemeColor(
            props.$customTheme,
            props.$selectedTheme,
            ColorCategories.fonts,
            ColorTokens.token_100
          )} !important;
        }
        }
      `;
    } else if (props.$iconized) {
      styles = `
        ${styles}
        padding: 10px;
        border-radius: 20px/50%;
        display: inline-flex;
        border-width: 0px;
      `;
    } else {
      styles = `
        ${styles}
        padding-left: 10px;
        padding-right: 10px;
        border-width: 1px;
      `;
    }

    styles = `
      ${styles}
      ${props.$padding ? `padding: ${getSpacingDistributionStyle(props.$padding, props.$customTheme)};` : ''}
    `;

    return styles;
  }}

  font-weight: bold;
  border-style: solid;
`;

export const UiButton: React.FC<UiButtonProps> = ({
  onClick,
  testId,
  className,
  disabled = false,
  children,
  cristal = false,
  iconized = false,
  id,
  theme = 'primary',
  fullHeight = false,
  fullWidth = false,
  outlined = false,
  padding,
  type = 'button',
  ref,
  rounded = false,
}: UiButtonProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <StyledButton
      $customTheme={themeContext.theme}
      $selectedTheme={themeContext.selectedTheme}
      $theme={theme}
      onClick={onClick}
      data-testid={testId}
      $iconized={iconized}
      id={id}
      $cristal={cristal}
      className={className}
      disabled={disabled}
      $fullHeight={fullHeight}
      $fullWidth={fullWidth}
      $outlined={outlined}
      $padding={padding}
      type={type}
      ref={ref}
      $rounded={rounded}
    >
      {children}
    </StyledButton>
  );
};

UiButton.displayName = 'UiPrimaryButton';
