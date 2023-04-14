import * as React from 'react';

import styled from 'styled-components';

import { ThemeContext, ColorCategories, ColorTokens, getThemeColor } from '@uireact/foundation';

import { privateButtonProps, UiButtonProps } from './types';

const StyledButton = styled.button<privateButtonProps>`
  ${(props) => `
    color: ${getThemeColor(props.customTheme, props.selectedTheme, ColorCategories.fonts, ColorTokens.token_100)};
    background: ${getThemeColor(
      props.customTheme,
      props.selectedTheme,
      ColorCategories.primary,
      ColorTokens.token_100
    )};
    border: ${getThemeColor(props.customTheme, props.selectedTheme, ColorCategories.primary, ColorTokens.token_50)};

    :hover {
      color: ${getThemeColor(props.customTheme, props.selectedTheme, ColorCategories.fonts, ColorTokens.token_50)};
      background: ${getThemeColor(
        props.customTheme,
        props.selectedTheme,
        ColorCategories.primary,
        ColorTokens.token_150
      )};
      border: ${getThemeColor(props.customTheme, props.selectedTheme, ColorCategories.primary, ColorTokens.token_100)};
    }

    :active {
      color: ${getThemeColor(props.customTheme, props.selectedTheme, ColorCategories.fonts, ColorTokens.token_10)};
      background: ${getThemeColor(
        props.customTheme,
        props.selectedTheme,
        ColorCategories.primary,
        ColorTokens.token_200
      )};
      border: ${getThemeColor(props.customTheme, props.selectedTheme, ColorCategories.primary, ColorTokens.token_10)};
    }

    :disabled {
      color: ${getThemeColor(props.customTheme, props.selectedTheme, ColorCategories.fonts, ColorTokens.token_10)};
      background: ${getThemeColor(
        props.customTheme,
        props.selectedTheme,
        ColorCategories.primary,
        ColorTokens.token_50
      )};
      cursor: not-allowed;
    }
  `}

  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

export const UiPrimaryButton: React.FC<UiButtonProps> = ({
  onClick,
  testId,
  className,
  disabled,
  children,
}: UiButtonProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <StyledButton
      customTheme={themeContext.theme}
      selectedTheme={themeContext.selectedTheme}
      onClick={onClick}
      data-stid={testId}
      className={className}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

UiPrimaryButton.displayName = 'UiPrimaryButton';
