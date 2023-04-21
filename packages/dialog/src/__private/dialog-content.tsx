import React from 'react';

import styled from 'styled-components';

import { privateUiDialogProps } from '../types';
import { mapper } from '../theme';
import { getThemeStyling } from '@uireact/foundation';

const Div = styled.div<privateUiDialogProps>`
  ${(props) => getThemeStyling(props.customTheme, props.selectedTheme, mapper)}

  z-index: 2;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 5px;
`;

export const DialogContent: React.FC<privateUiDialogProps> = ({
  children,
  customTheme,
  selectedTheme,
}: privateUiDialogProps) => (
  <Div customTheme={customTheme} selectedTheme={selectedTheme} role="dialog">
    {children}
  </Div>
);
