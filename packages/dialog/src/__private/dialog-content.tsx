import React, { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { UiDialogType, privateUiDialogProps } from '../types';

import { BorderedWrappedDiv } from './border-helpers/bordered-wrapper-div';
import { getBorderRadius } from './border-helpers/border-radius';
import { ThemeContext } from '@uireact/foundation';

const Div = styled(motion.div)<privateUiDialogProps>`
  background-color: var(--primary-token_100);
  color: var(--fonts-token_100);
  z-index: 100;
  min-width: 200px;

  ${(props) => {
    if (props.$type === UiDialogType.CENTERED) {
      return `
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        border-radius: 5px;
        position: absolute;
      `;
    }

    if (props.$type === UiDialogType.BOTTOM) {
      return `
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 5px 5px 0 0;
        position: fixed;
        min-width: 579px;
        min-height: 100px;

        @media screen and (max-width: 579px) {
          width: 100%;
          min-width: 100%;
        }
      `;
    }

    if (props.$type === UiDialogType.LEFT) {
      return `
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        top: 0%;
        left: 0%;
        position: fixed;
        height: 100%;
        min-width: 20%;
      `;
    }

    if (props.$type === UiDialogType.RIGHT) {
      return `
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
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

export const DialogContent: React.FC<privateUiDialogProps> = ({ children, motion, $type }: privateUiDialogProps) => {
  const theme = useContext(ThemeContext);

  return (
    <Div $type={$type} role="dialog" {...motion}>
      <BorderedWrappedDiv $selectedTheme={theme.selectedTheme} $type={$type}>
        <ContentDiv $type={$type} data-testid="UiDialogContent">
          {children}
        </ContentDiv>
      </BorderedWrappedDiv>
    </Div>
  );
};
