import * as React from 'react';

import styled from 'styled-components';

import { ThemeContext, ColorCategories, getColorTokens, Tokens } from '@uireact/foundation';

import { privateButtonProps, UiButtonProps } from './types';
import { getFontColor } from './utils';

const StyledButton = styled.button<privateButtonProps>`
  ${(props) => {
    const buttonType = props.buttonType ?? 'primary';

    const fontSelectedTheme = getFontColor(props.selectedTheme, buttonType);
    const fontTokens: Tokens = getColorTokens(props.customTheme, fontSelectedTheme, ColorCategories.fonts);
    const colorCategory = ColorCategories[buttonType];
    const tokens: Tokens = getColorTokens(props.customTheme, props.selectedTheme, colorCategory);

    return `
      color: ${fontTokens.token_100};
      background: ${tokens.token_100};
      border: ${tokens.token_50};

      :hover {
        color: ${fontTokens.token_50};
        background: ${tokens.token_150};
        border: ${tokens.token_100};
      }

      :active {
        color: ${fontTokens.token_10};
        background: ${tokens.token_200};
        border: ${tokens.token_10};
      }

      :disabled {
        color: ${fontTokens.token_10};
        background: ${tokens.token_50};
        cursor: not-allowed;
      }
    `;
  }}

  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

export const UiButton: React.FC<UiButtonProps> = ({
  onClick,
  testId,
  className,
  disabled,
  children,
  buttonType,
}: UiButtonProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <StyledButton
      customTheme={themeContext.theme}
      selectedTheme={themeContext.selectedTheme}
      buttonType={buttonType}
      onClick={onClick}
      data-testid={testId}
      className={className}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

UiButton.displayName = 'UiPrimaryButton';
