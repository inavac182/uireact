import * as React from 'react';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import {
  CategoryTheme,
  DynamicElementActionEnum,
  DynamicElementStateEnum,
  getValueFromDynamicThemeElement,
  StaticElementEnum,
  UiReactElementProp,
} from '@uireact/foundation';

interface UiButtonProps extends UiReactElementProp {
  state: DynamicElementStateEnum;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = styled.button<UiButtonProps>`
  ${(props) => `
    color: ${getValueFromDynamicThemeElement(
      CategoryTheme.DYNAMIC_ELEMENTS,
      StaticElementEnum.paragraph,
      props.state,
      DynamicElementActionEnum.NORMAL,
      props.theme.main
    )};
    background: ${getValueFromDynamicThemeElement(
      CategoryTheme.DYNAMIC_ELEMENTS,
      StaticElementEnum.background,
      props.state,
      DynamicElementActionEnum.NORMAL,
      props.theme.main
    )};

    :hover {
      color: ${getValueFromDynamicThemeElement(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.paragraph,
        props.state,
        DynamicElementActionEnum.HOVER,
        props.theme.main
      )};
      background: ${getValueFromDynamicThemeElement(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.background,
        props.state,
        DynamicElementActionEnum.HOVER,
        props.theme.main
      )};
    }

    :active {
      color: ${getValueFromDynamicThemeElement(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.paragraph,
        props.state,
        DynamicElementActionEnum.ACTIVE,
        props.theme.main
      )};
      background: ${getValueFromDynamicThemeElement(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.background,
        props.state,
        DynamicElementActionEnum.ACTIVE,
        props.theme.main
      )};
    }

    :disabled {
      color: ${getValueFromDynamicThemeElement(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.paragraph,
        props.state,
        DynamicElementActionEnum.DISABLED,
        props.theme.main
      )};
      background: ${getValueFromDynamicThemeElement(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.background,
        props.state,
        DynamicElementActionEnum.DISABLED,
        props.theme.main
      )};
      cursor: not-allowed;
    }
  `}

  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

export const UiButton: React.FC<UiButtonProps> = (props: UiButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      state={props.state}
      data-stid={props.testId}
      className={props.className}
      disabled={props.disabled}
    >
      {props?.children}
    </Button>
  );
};

UiButton.displayName = 'UiButton';
