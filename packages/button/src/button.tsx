import * as React from 'react';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import {
  CategoryTheme,
  getValueFromStaticThemeElement,
  UiReactElementProp,
  StaticElementEnum,
  getValueFromDynamicThemeElement,
  DynamicElementStateEnum,
  DynamicElementActionEnum,
} from '@ui-react/foundation';

interface UiButtonProps extends UiReactElementProp {
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

const Button = styled.button<UiButtonProps>`
  ${(props: UiButtonProps) => `
    ${
      props.theme?.main &&
      `color: ${getValueFromDynamicThemeElement(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.paragraph,
        DynamicElementStateEnum.INFO,
        DynamicElementActionEnum.NORMAL,
        props.theme.main
      )};
      background-color: ${getValueFromDynamicThemeElement(
        CategoryTheme.DYNAMIC_ELEMENTS,
        StaticElementEnum.background,
        DynamicElementStateEnum.INFO,
        DynamicElementActionEnum.NORMAL,
        props.theme.main
      )};`
    }
  `}

  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

export const UiButton: React.FC = (props: UiButtonProps) => {
  return <Button onClick={props.onClick}>{props?.children}</Button>;
};

UiButton.displayName = 'UiButton';
