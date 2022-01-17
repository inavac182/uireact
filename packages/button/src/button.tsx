import * as React from 'react';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import { Action, Status, getDynamicColor, StyleProps, ThemeContext, UiReactElementProp } from '@uireact/foundation';

interface UiButtonProps {
  /** Button state that matches with a coloscheme from themes */
  status: Status;
  /** onClick Handler */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  testId?: string;
  className?: string;
}

type privateButtonProps = UiButtonProps & UiReactElementProp;

const Button = styled.button<privateButtonProps>`
  ${(props) => `
    color: ${getDynamicColor(props.customTheme, StyleProps.paragraph, Action.NORMAL, props.status)};
    background: ${getDynamicColor(props.customTheme, StyleProps.background, Action.NORMAL, props.status)};

    :hover {
      color: ${getDynamicColor(props.customTheme, StyleProps.paragraph, Action.HOVER, props.status)};
      background: ${getDynamicColor(props.customTheme, StyleProps.background, Action.HOVER, props.status)};
    }

    :active {
      color: ${getDynamicColor(props.customTheme, StyleProps.paragraph, Action.ACTIVE, props.status)};
      background: ${getDynamicColor(props.customTheme, StyleProps.background, Action.ACTIVE, props.status)};
    }

    :disabled {
      color: ${getDynamicColor(props.customTheme, StyleProps.paragraph, Action.DISABLED, props.status)};
      background: ${getDynamicColor(props.customTheme, StyleProps.background, Action.DISABLED, props.status)};
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
  status,
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
      status={status}
      data-stid={testId}
      className={className}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

UiButton.displayName = 'UiButton';
