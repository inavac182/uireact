'use client';
import React from 'react';

import styled from 'styled-components';
import Image from 'next/image';
import { UiLink } from '@uireact/text';

import { getAnimation, getColorValue } from './animations';

import sunglassesIcon from '../../../public/sunglasses_cat.gif';

type LogoProps = {
  width?: number;
  iconOnTop?: Boolean;
}

const Div = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  &:hover {
    text-decoration: none;
  }
`;

const H1 = styled.h1`
  font-family: Sen;
  display: inline;

  &:hover {
    span:nth-child(1) {
      animation: ${getAnimation(1)} 1s linear infinite;
    }
    span:nth-child(2) {
      animation: ${getAnimation(2)} 1s linear infinite;
    }
    span:nth-child(3) {
      animation: ${getAnimation(3)} 1s linear infinite;
    }
    span:nth-child(4) {
      animation: ${getAnimation(4)} 1s linear infinite;
    }
    span:nth-child(5) {
      animation: ${getAnimation(5)} 1s linear infinite;
    }
    span:nth-child(6) {
      animation: ${getAnimation(6)} 1s linear infinite;
    }
    span:nth-child(7) {
      animation: ${getAnimation(7)} 1s linear infinite;
    }
    span:nth-child(8) {
      animation: ${getAnimation(8)} 1s linear infinite;
    }

    text-decoration: none;
  }
`;

const Span = styled.span<{ $index: number }>`
  ${(props) => `color: ${getColorValue(props.$index)};`}
`;

const LogoCentered = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;


export const LogoIcon = ({ width = 50 }: LogoProps) => <Image src={sunglassesIcon} width={width} alt="UiReact logo icon" unoptimized />

export const Logo = ({ iconOnTop }: LogoProps): React.ReactElement => (
  <UiLink>
    <a href="/">
      {iconOnTop && (
          <LogoCentered>
            <LogoIcon width={30} />
          </LogoCentered>
      )}
      <Div>
        <H1>
          <Span $index={1}>@</Span>
          <Span $index={2}>U</Span>
          <Span $index={3}>i</Span>
          <Span $index={4}>R</Span>
          <Span $index={5}>e</Span>
          <Span $index={6}>a</Span>
          <Span $index={7}>c</Span>
          <Span $index={8}>t</Span>
        </H1>
        {!iconOnTop && (<LogoIcon width={30} />)}
      </Div>
    </a>
  </UiLink>
);
