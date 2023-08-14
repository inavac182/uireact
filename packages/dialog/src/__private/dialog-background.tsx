import React from 'react';

import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
  z-index: 50;
`;

type DialogBackgroundProps = {
  onClick: () => void;
};

export const DialogBackground: React.FC<DialogBackgroundProps> = ({ onClick }: DialogBackgroundProps) => (
  <Div onClick={onClick} data-testid="dialog-background" />
);

DialogBackground.displayName = 'DialogBackground';
