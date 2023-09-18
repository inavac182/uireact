import React from 'react';

import styled from 'styled-components';

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

const FirstTransitionDiv = styled.div<privateSeparatorProps>`
  width: 70%;
  height: 150px;
  border-radius: 50%;
  opacity: 0.5;
  position: absolute;
  left: 0;

  ${(props) => `
    top: ${props.$inverse ? '-80px' : '20px'};
    background-color: var(--${getColorCategory(props.$to)}-token_100);
  `}
`;

const SecondTransitionDiv = styled.div<privateSeparatorProps>`
  width: 70%;
  height: 200px;
  border-radius: 50%;
  opacity: 0.8;
  position: absolute;
  right: 0;

  ${(props) => `
    top: ${props.$inverse ? '-120px' : '25px'};
    background-color: var(--${getColorCategory(props.$to)}-token_100);
  `}
`;

const EndTransitionDiv = styled.div<privateSeparatorProps>`
  width: 50%;
  height: 80px;
  border-radius: 50%;
  opacity: 1;
  position: absolute;

  ${(props) => `
    top: ${props.$inverse ? '-40px' : '60px'};
    background-color: var(--${getColorCategory(props.$to)}-token_100);
  `}
`;

const EndTransitionDiv2 = styled.div<privateSeparatorProps>`
  width: 50%;
  height: 80px;
  border-radius: 50%;
  opacity: 1;
  position: absolute;
  right: 0;

  ${(props) => `
    top: ${props.$inverse ? '-40px' : '60px'};
    background-color: var(--${getColorCategory(props.$to)}-token_100);
  `}
`;

const EndTransitionDiv3 = styled.div<privateSeparatorProps>`
  width: 40%;
  height: 100px;
  border-radius: 50%;
  float: right;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 30%;

  ${(props) => `
    top: ${props.$inverse ? '-30px' : '30px'};
    background-color: var(--${getColorCategory(props.$to)}-token_100);
  `}
`;

export type UiBubblesSeparatorProps = {
  from: ColorCategory;
  to: ColorCategory;
  inverse?: boolean;
} & UiReactElementProps;

export const UiBubblesSeparator: React.FC<UiBubblesSeparatorProps> = ({
  from,
  to,
  className,
  testId,
  inverse,
}: UiBubblesSeparatorProps) => (
  <ContainerDiv data-testid={testId} className={className}>
    <InitialBgDiv $from={from} $to={to} $inverse={inverse}></InitialBgDiv>
    <FirstTransitionDiv $from={from} $to={to} $inverse={inverse}></FirstTransitionDiv>
    <SecondTransitionDiv $from={from} $to={to} $inverse={inverse}></SecondTransitionDiv>
    <EndTransitionDiv $from={from} $to={to} $inverse={inverse}></EndTransitionDiv>
    <EndTransitionDiv2 $from={from} $to={to} $inverse={inverse}></EndTransitionDiv2>
    <EndTransitionDiv3 $from={from} $to={to} $inverse={inverse}></EndTransitionDiv3>
  </ContainerDiv>
);

UiBubblesSeparator.displayName = 'UiBubblesSeparator';
