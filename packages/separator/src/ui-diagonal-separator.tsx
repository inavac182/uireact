'use client';
import React from 'react';

import { styled } from 'styled-components';

import { ColorCategory, UiReactElementProps, getColorCategory } from '@uireact/foundation';

import { privateSeparatorProps } from './types';

const ContainerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
`;

const InitialBgDiv = styled.div<privateSeparatorProps>`
  width: 150%;
  height: 100px;
  position: absolute;

  ${(props) => `
    background-color: var(--${getColorCategory(props.$from)}-token_100);
  `}
`;

const TransitionDiv = styled.div<privateSeparatorProps>`
  width: 150%;
  height: 150px;
  opacity: 0.5;
  position: absolute;
  top: 50px;
  left: -50px;

  ${(props) => `
    transform: rotate(${props.$inverse ? '-3deg' : '3deg'});
    top: ${props.$inverse ? '-110px' : '60px'};
    background-color: var(--${getColorCategory(props.$to)}-token_100);
  `}
`;

const EndTransitionDiv = styled.div<privateSeparatorProps>`
  width: 150%;
  height: 150px;
  opacity: 1;
  position: absolute;
  top: 60px;
  left: -50px;

  ${(props) => `
    transform: rotate(${props.$inverse ? '3deg' : '-3deg'});
    top: ${props.$inverse ? '-110px' : '60px'};
    background-color: var(--${getColorCategory(props.$to)}-token_100);
  `}
`;

export type UiSeparatorProps = {
  from: ColorCategory;
  to: ColorCategory;
  inverse?: boolean;
} & UiReactElementProps;

export const UiDiagonalSeparator: React.FC<UiSeparatorProps> = ({
  from,
  to,
  className,
  testId,
  inverse,
}: UiSeparatorProps) => (
  <ContainerDiv className={className} data-testid={testId}>
    <InitialBgDiv $from={from} $to={to} $inverse={inverse}></InitialBgDiv>
    <TransitionDiv $from={from} $to={to} $inverse={inverse}></TransitionDiv>
    <EndTransitionDiv $from={from} $to={to} $inverse={inverse}></EndTransitionDiv>
  </ContainerDiv>
);

UiDiagonalSeparator.displayName = 'UiDiagonalSeparator';
