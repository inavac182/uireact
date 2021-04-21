import React from 'react';
import styled from 'styled-components';

export interface UiNavbarProps {
  children?: React.ReactNode;
}

const Div = styled.div`
  width: 100%;
`;

export const UiNavbar: React.FC<UiNavbarProps> = ({ children }: UiNavbarProps) => {
  return <Div>{children}</Div>;
};

UiNavbar.displayName = 'UiNavbar';
