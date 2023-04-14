import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../providers';
import { UiReactPrivateElementProps } from '../types';

const Div = styled.div<UiReactPrivateElementProps>`
  background: '#000';
  color: #fff;
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

  return (
    <Div customTheme={themeContext.theme} selectedTheme={themeContext.selectedTheme}>
      {children}
    </Div>
  );
};

UiBox.displayName = 'UiBox';
