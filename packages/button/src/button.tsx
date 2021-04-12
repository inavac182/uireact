import * as React from 'react';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import {
  CategoryTheme,
  DynamicElementActionEnum,
  DynamicElementStateEnum,
  getDynamicColor,
  StaticElementEnum,
  ThemeContext,
  UiReactElementProp,
} from '@uireact/foundation';

interface UiButtonProps extends UiReactElementProp {
  /** Button state that matches with a coloscheme from themes */
  state: DynamicElementStateEnum;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = styled.button<UiButtonProps>`
  ${(props) => `
    color: ${getDynamicColor(
      CategoryTheme.DYNAMIC_ELEMENTS,
      StaticElementEnum.paragraph,
      props.state,
      DynamicElementActionEnum.NORMAL,
      props.customTheme
    )};
    background: ${getDynamicColor(
      CategoryTheme.DYNAMIC_ELEMENTS,
      StaticElementEnum.background,
      props.state,
      DynamicElementActionEnum.NORMAL,
      props.customTheme
    )};

    :hover {
      color: ${getDynamicColor(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.paragraph,
        props.state,
        DynamicElementActionEnum.HOVER,
        props.customTheme
      )};
      background: ${getDynamicColor(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.background,
        props.state,
        DynamicElementActionEnum.HOVER,
        props.customTheme
      )};
    }

    :active {
      color: ${getDynamicColor(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.paragraph,
        props.state,
        DynamicElementActionEnum.ACTIVE,
        props.customTheme
      )};
      background: ${getDynamicColor(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.background,
        props.state,
        DynamicElementActionEnum.ACTIVE,
        props.customTheme
      )};
    }

    :disabled {
      color: ${getDynamicColor(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.paragraph,
        props.state,
        DynamicElementActionEnum.DISABLED,
        props.customTheme
      )};
      background: ${getDynamicColor(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.background,
        props.state,
        DynamicElementActionEnum.DISABLED,
        props.customTheme
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
  state,
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
      state={state}
      data-stid={testId}
      className={className}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

UiButton.displayName = 'UiButton';
