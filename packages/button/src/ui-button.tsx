import * as React from 'react';

import styled from 'styled-components';

import { ThemeContext, getThemeStyling, getColorCategory } from '@uireact/foundation';

import { privateButtonProps, UiButtonProps } from './types';
import { getDynamicMapper } from './theme';

const StyledButton = styled.button<privateButtonProps>`
  ${(props) => {
    const mapper = getDynamicMapper(getColorCategory(props.$theme), props.$cristal);

    return `
      ${getThemeStyling(props.$customTheme, props.$selectedTheme, mapper)}
      ${props.$fullWidth ? 'width: 100%;' : ''}
      ${props.$fullHeight ? 'height: 100%;' : ''}
      ${props.$cristal ? 'border-width: 0;' : 'border-width: 1px;'}
      ${props.$cristal ? 'background: unset;' : ''}
      ${props.disabled ? 'cursor: not-allowed;' : 'cursor: pointer;'}
      ${
        props.$rounded
          ? `
            border-radius: 15px/50%;
          `
          : 'border-radius: 3px;'
      }
      ${
        props.$iconized
          ? `
            padding: 10px;
            border-radius: 20px/50%;
            display: inline-flex;
          `
          : 'padding-left: 10px;padding-right: 10px; '
      }
    `;
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
  theme = 'primary',
  fullHeight = false,
  fullWidth = false,
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
      $cristal={cristal}
      className={className}
      disabled={disabled}
      $fullHeight={fullHeight}
      $fullWidth={fullWidth}
      type={type}
      ref={ref}
      $rounded={rounded}
    >
      {children}
    </StyledButton>
  );
};

UiButton.displayName = 'UiPrimaryButton';
