import * as React from 'react';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import {
  ThemeContext,
  UiReactPrivateElementProps,
  getThemeToken,
  ThemeMapperLevel,
  ThemeStyleProperty,
} from '@uireact/foundation';

import { ButtonThemeMapper } from './theme';

export interface UiButtonProps {
  /** onClick Handler */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  /** Disable button */
  disabled?: boolean;
  children?: React.ReactNode;
  /** testId attribute */
  testId?: string;
  /** className attribute */
  className?: string;
}

type privateButtonProps = UiButtonProps & UiReactPrivateElementProps;

const Button = styled.button<privateButtonProps>`
  ${(props) => `
    color: ${getThemeToken(ThemeMapperLevel.base, ThemeStyleProperty.color, props.customTheme, ButtonThemeMapper)};
    background: ${getThemeToken(
      ThemeMapperLevel.base,
      ThemeStyleProperty.background,
      props.customTheme,
      ButtonThemeMapper
    )};
    border: ${getThemeToken(ThemeMapperLevel.base, ThemeStyleProperty.border, props.customTheme, ButtonThemeMapper)};

    :hover {
      color: ${getThemeToken(ThemeMapperLevel.hover, ThemeStyleProperty.color, props.customTheme, ButtonThemeMapper)};
      background: ${getThemeToken(
        ThemeMapperLevel.hover,
        ThemeStyleProperty.background,
        props.customTheme,
        ButtonThemeMapper
      )};
    }

    :active {
      color: ${getThemeToken(ThemeMapperLevel.active, ThemeStyleProperty.color, props.customTheme, ButtonThemeMapper)};
      background: ${getThemeToken(
        ThemeMapperLevel.active,
        ThemeStyleProperty.background,
        props.customTheme,
        ButtonThemeMapper
      )};
    }

    :disabled {
      color: ${getThemeToken(
        ThemeMapperLevel.disabled,
        ThemeStyleProperty.color,
        props.customTheme,
        ButtonThemeMapper
      )};
      background: ${getThemeToken(
        ThemeMapperLevel.disabled,
        ThemeStyleProperty.background,
        props.customTheme,
        ButtonThemeMapper
      )};
      cursor: not-allowed;
    }
  `}

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
}: UiButtonProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Button
      customTheme={themeContext.theme}
      onClick={onClick}
      data-stid={testId}
      className={className}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

UiButton.displayName = 'UiButton';
