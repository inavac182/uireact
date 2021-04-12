import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';

import { getColor } from '../themes';
import { ThemeContext } from '../providers';
import { CategoryTheme, StaticElementEnum, UiReactElementProp } from '../types';

const Div = styled.div<UiReactElementProp>`
  ${(props) => `
    background: ${getColor(CategoryTheme.CONTAINERS, StaticElementEnum.background, props.customTheme)};
    color: ${getColor(CategoryTheme.TEXTS, StaticElementEnum.paragraph, props.customTheme)};
  `}

  border-radius: 5px;
  box-shadow: inset 0px 0px 2px 5px #cccccc;
  padding: 5px;
  padding-left: 20px;
  line-height: 50px;
`;

interface UiBoxProps {
  children: React.ReactNode;
}

export const UiBox: React.FC = ({ children }: UiBoxProps) => {
  const themeContext = useContext(ThemeContext);

  return <Div customTheme={themeContext.theme}>{children}</Div>;
};

UiBox.displayName = 'UiBox';
