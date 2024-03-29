import React from 'react';

import styled from 'styled-components';

type DialogWrapperProps = {
  className?: string;
  children?: React.ReactElement;
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
`;

export const DialogWrapper: React.FC<DialogWrapperProps> = ({ children }: DialogWrapperProps) => <Div>{children}</Div>;
