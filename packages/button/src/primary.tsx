import * as React from 'react';

import styled from 'styled-components';

import { getThemeToken, MapperLevel, MapperStyleProperty, ThemeContext } from '@uireact/foundation';

import { PrimaryButtonThemeMapper } from './theme';
import { privateButtonProps, UiButtonProps } from './types';

const StyledButton = styled.button<privateButtonProps>`
  ${(props) => `
    color: ${getThemeToken(
      MapperLevel.default,
      MapperStyleProperty.color,
      props.customTheme,
      PrimaryButtonThemeMapper
    )};
    background: ${getThemeToken(
      MapperLevel.default,
      MapperStyleProperty.background,
      props.customTheme,
      PrimaryButtonThemeMapper
    )};
    border: ${getThemeToken(
      MapperLevel.default,
      MapperStyleProperty.border,
      props.customTheme,
      PrimaryButtonThemeMapper
    )};

    :hover {
      color: ${getThemeToken(
        MapperLevel.hover,
        MapperStyleProperty.color,
        props.customTheme,
        PrimaryButtonThemeMapper
      )};
      background: ${getThemeToken(
        MapperLevel.hover,
        MapperStyleProperty.background,
        props.customTheme,
        PrimaryButtonThemeMapper
      )};
    }

    :active {
      color: ${getThemeToken(
        MapperLevel.active,
        MapperStyleProperty.color,
        props.customTheme,
        PrimaryButtonThemeMapper
      )};
      background: ${getThemeToken(
        MapperLevel.active,
        MapperStyleProperty.background,
        props.customTheme,
        PrimaryButtonThemeMapper
      )};
    }

    :disabled {
      color: ${getThemeToken(
        MapperLevel.disabled,
        MapperStyleProperty.color,
        props.customTheme,
        PrimaryButtonThemeMapper
      )};
      background: ${getThemeToken(
        MapperLevel.disabled,
        MapperStyleProperty.background,
        props.customTheme,
        PrimaryButtonThemeMapper
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
