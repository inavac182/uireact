import * as React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #d9d9d9;
  border-radius: 5px;
  box-shadow: inset 0px 0px 2px 5px #cccccc;
  padding: 5px;
  padding-left: 20px;
  height: 50px;
  line-height: 50px;
`;

interface UiBoxProps {
  children: React.ReactNode;
}

export const UiBox: React.FC = ({ children }: UiBoxProps) => {
  return <Div>{children}</Div>;
};

UiBox.displayName = 'UiBox';
