'use client';
import React, { useCallback, useState } from 'react';
import { styled } from 'styled-components';

import { UiText } from '@uireact/text';

import { UiTooltipProps, privateTooltipProps } from './types';

const Div = styled.div`
  position: relative;
  display: inline-block;
`;

const ToolbarDiv = styled.div<privateTooltipProps>`
  position: absolute;
  border-radius: 4px;
  padding: 6px;
  white-space: nowrap;
  background-color: var(--primary-token_100);
  color: var(--fonts-token_100);
  z-index: 100;

  &::before {
    content: ' ';
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
  }

  ${(props): string => {
    if (props.$position === 'bottom') {
      return `
        bottom: calc(40px * -1);
        left: 50%;
        transform: translateX(-50%);

        &::before {
          bottom: 100%;
          border-bottom-color: var(--primary-token_100);
        }
      `;
    }

    if (props.$position === 'left') {
      return `
        left: auto;
        right: calc(100% + 20px);
        top: 50%;
        transform: translateX(0) translateY(-50%);

        &::before {
          left: auto;
          right: calc(6px * -2);
          top: 50%;
          transform: translateX(0) translateY(-50%);
          border-left-color: var(--primary-token_100);
        }
      `;
    }

    if (props.$position === 'right') {
      return `
        left: calc(100% + 20px);
        top: 50%;
        transform: translateX(0) translateY(-50%);

        &::before {
          left: calc(6px * -1);
          top: 50%;
          transform: translateX(0) translateY(-50%);
          border-right-color: var(--primary-token_100);
        }
      `;
    }

    return `
        top: calc(40px * -1);
        left: 50%;
        transform: translateX(-50%);

        &::before {
          top: 100%;
          border-top-color: var(--primary-token_100);
        }
      `;
  }}
`;

export const UiTooltip: React.FC<UiTooltipProps> = ({
  children,
  className,
  position,
  text,
  testId,
}: UiTooltipProps) => {
  const [toolbarVisible, setToolbarVisible] = useState(false);

  const onMouseEnter = useCallback(() => {
    setToolbarVisible(true);
  }, [setToolbarVisible]);

  const onMouseLeave = useCallback(() => {
    setToolbarVisible(false);
  }, [setToolbarVisible]);

  return (
    <Div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      {toolbarVisible && (
        <ToolbarDiv $position={position} className={className} data-testid={testId} role="tooltip">
          <UiText>{text}</UiText>
        </ToolbarDiv>
      )}
    </Div>
  );
};

UiTooltip.displayName = 'UiTooltip';
