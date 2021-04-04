import * as React from 'react';
import styled from 'styled-components';

import {
  CategoryTheme,
  getValueFromStaticThemeElement,
  UiReactElementProp,
  StaticElementEnum,
} from '@uireact/foundation';

interface UiCardProps extends UiReactElementProp {
  children?: React.ReactNode;
}

const Div = styled.div<UiCardProps>`
  ${(props: UiCardProps) => `
    ${
      props.theme?.main &&
      `color: ${getValueFromStaticThemeElement(
        CategoryTheme.CONTAINERS,
        StaticElementEnum.paragraph,
        props.theme.main
      )};
      background-color: ${getValueFromStaticThemeElement(
        CategoryTheme.CONTAINERS,
        StaticElementEnum.background,
        props.theme.main
      )};`
    }
  `}
  border-radius: 3px;
  border: 1px solid purple;
  padding: 5px;
`;

export const UiCard: React.FC = (props: UiCardProps) => {
  return <Div>{props?.children}</Div>;
};

UiCard.displayName = 'UiCard';
