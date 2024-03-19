import React, { useContext } from 'react';

import styled from 'styled-components';

import { UiDialogType, privateUiDialogProps } from '../types';

import { BorderedWrappedDiv } from './border-helpers/bordered-wrapper-div';
import { getBorderRadius } from './border-helpers/border-radius';
import { ThemeContext } from '@uireact/foundation';

const Div = styled.div<privateUiDialogProps>`
  background-color: var(--primary-token_100);
  color: var(--fonts-token_100);
  z-index: 100;
  min-width: 200px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  ${(props) => {
    if (props.$type === UiDialogType.CENTERED) {
      return `
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      border-radius: 5px;
      position: absolute;
    `;
    }

    if (props.$type === UiDialogType.BOTTOM) {
      return `
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 5px 5px 0 0;
        position: fixed;
      `;
    }

    if (props.$type === UiDialogType.LEFT) {
      return `
        top: 0%;
        left: 0%;
        position: fixed;
        height: 100%;
        min-width: 20%;
      `;
    }

    if (props.$type === UiDialogType.RIGHT) {
      return `
        top: 0%;
        right: 0%;
        position: fixed;
        height: 100%;
        min-width: 20%;
      `;
    }

    return `
        top: 0%;
        right: 0%;
        position: fixed;
        height: 100%;
        width: 100%;
      `;
  }}
`;

const ContentDiv = styled.div<privateUiDialogProps>`
  background-color: var(--primary-token_100);
  color: var(--fonts-token_100);
  padding: 5px;
  height: 100%;
  border-radius: ${(props) => getBorderRadius(props.$type)};
`;

export const DialogContent: React.FC<privateUiDialogProps> = ({ children, $type }: privateUiDialogProps) => {
  const theme = useContext(ThemeContext);

  return (
    <Div $type={$type} role="dialog">
      <BorderedWrappedDiv $selectedTheme={theme.selectedTheme} $type={$type}>
        <ContentDiv $type={$type} data-testid="UiDialogContent">
          {children}
        </ContentDiv>
      </BorderedWrappedDiv>
    </Div>
  );
};
