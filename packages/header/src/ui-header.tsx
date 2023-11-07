'use client';
import React from 'react';

import styled from 'styled-components';

import { UiViewport, getColorTokenValue, useViewport } from '@uireact/foundation';

import { UiHeaderProps, privateUiHeaderProps } from './types';
import { CenteredDiv } from './__private';

const Div = styled.div<privateUiHeaderProps>`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 3px;
  border-style: solid;
  top: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  z-index: 1;
  transition: background 0.2s, border-color 0.2s;
  color: var(--fonts-token_100);
  border-color: var(--primary-token_150);

  ${(props) => {
    const weight = props.$weight ? getColorTokenValue(props.$weight) : 'token_100';

    return `background-color: var(--primary-${weight});`;
  }}

  ${(props) => (props.$fixed ? 'position: sticky;' : '')}
`;

export const UiHeader: React.FC<UiHeaderProps> = ({
  centered,
  children,
  className,
  fixed,
  testId,
  weight,
}: UiHeaderProps) => {
  const { isLarge } = useViewport();

  return (
    <Div className={className} $fixed={fixed} data-testid={testId} $weight={weight}>
      {centered ? (
        <>
          <UiViewport criteria={'l|xl'}>
            <CenteredDiv size={isLarge ? 'l' : 'xl'}>{children}</CenteredDiv>
          </UiViewport>
          <UiViewport criteria={'s|m'}>{children}</UiViewport>
        </>
      ) : (
        <>{children}</>
      )}
    </Div>
  );
};

UiHeader.displayName = 'UiHeader';
