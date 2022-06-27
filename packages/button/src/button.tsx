import * as React from 'react';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import { ThemeContext, UiReactPrivateElementProps } from '@uireact/foundation';

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
    color: ${props.customTheme.colors.fonts.token_100};
    background: ${props.customTheme.colors.primary.token_100};
    border: ${props.customTheme.colors.primary.token_100};

    :hover {
      color: ${props.customTheme.colors.fonts.token_150};
      background: ${props.customTheme.colors.primary.token_150};
    }

    :active {
      color: ${props.customTheme.colors.fonts.token_50};
      background: ${props.customTheme.colors.primary.token_200};
    }

    :disabled {
      color: ${props.customTheme.colors.fonts.token_200};
      background: ${props.customTheme.colors.primary.token_50};
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
