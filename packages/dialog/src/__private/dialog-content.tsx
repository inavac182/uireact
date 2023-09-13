import React from 'react';

import styled from 'styled-components';

import { ColorCategories, ColorTokens, getThemeColor, getThemeStyling } from '@uireact/foundation';

import { UiDialogType, privateUiDialogProps } from '../types';
import { mapper } from '../theme';
import { BorderedWrappedDiv } from './border-helpers/bordered-wrapper-div';
import { getBorderRadius } from './border-helpers/border-radius';

const Div = styled.div<privateUiDialogProps>`
  ${(props) => getThemeStyling(props.$customTheme, props.$selectedTheme, mapper)}
  z-index: 100;
  min-width: 200px;

  ${(props) =>
    `box-shadow: 0px 0 5px ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      ColorCategories.primary,
      ColorTokens.token_200
    )};
    `}

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
  ${(props) => `
    background-color: ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      ColorCategories.primary,
      ColorTokens.token_100
    )};
    border-radius: ${getBorderRadius(props.$type)};
    padding: 5px;
    height: 100%;
  `}
`;

export const DialogContent: React.FC<privateUiDialogProps> = ({
  children,
  $customTheme,
  $selectedTheme,
  $type,
}: privateUiDialogProps) => (
  <Div $customTheme={$customTheme} $selectedTheme={$selectedTheme} $type={$type} role="dialog">
    <BorderedWrappedDiv $customTheme={$customTheme} $selectedTheme={$selectedTheme} $type={$type}>
      <ContentDiv $customTheme={$customTheme} $selectedTheme={$selectedTheme} $type={$type}>
        {children}
      </ContentDiv>
    </BorderedWrappedDiv>
  </Div>
);
