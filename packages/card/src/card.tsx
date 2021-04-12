import * as React from 'react';
import styled from 'styled-components';

import { CategoryTheme, getColor, UiReactElementProp, StaticElementEnum, ThemeContext } from '@uireact/foundation';

interface UiCardProps {
  children?: React.ReactNode;
}

type privateCardProps = UiCardProps & UiReactElementProp;

const Div = styled.div<privateCardProps>`
  ${(props) => `
    color: ${getColor(CategoryTheme.CONTAINERS, StaticElementEnum.paragraph, props.customTheme)};
    background-color: ${getColor(CategoryTheme.CONTAINERS, StaticElementEnum.background, props.customTheme)};
  `}

  border-radius: 3px;
  border: 1px solid purple;
  padding: 5px;
`;

export const UiCard: React.FC = (props: UiCardProps) => {
  const themeContext = React.useContext(ThemeContext);

  return <Div customTheme={themeContext.theme}>{props?.children}</Div>;
};

UiCard.displayName = 'UiCard';
