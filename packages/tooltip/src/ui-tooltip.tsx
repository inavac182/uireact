'use client';
import React, { useCallback, useState } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { UiText } from '@uireact/text';

import { UiTooltipProps, privateTooltipProps } from './types';

const Div = styled.div`
  position: relative;
  display: inline-block;
`;

const ToolbarDiv = styled(motion.div)<privateTooltipProps>`
  position: absolute;
  border-radius: 4px;
  padding: 6px;
  white-space: nowrap;
  z-index: 100;

  ${(props) => `
    background-color: var(--${props.$inverse ? 'inverse-' : ''}${props.$category}-token_100);
    color: var(--${props.$inverse ? 'inverse-' : ''}fonts-token_100);
  `}

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
          border-bottom-color: var(--${props.$inverse ? 'inverse-' : ''}${props.$category}-token_100);
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
          border-left-color: var(--${props.$inverse ? 'inverse-' : ''}${props.$category}-token_100);
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
          border-right-color: var(--${props.$inverse ? 'inverse-' : ''}${props.$category}-token_100);
        }
      `;
    }

    return `
        top: calc(40px * -1);
        left: 50%;
        transform: translateX(-50%);

        &::before {
          top: 100%;
          border-top-color: var(--${props.$inverse ? 'inverse-' : ''}${props.$category}-token_100);
        }
      `;
  }}
`;

const getAnimation = (position?: 'top' | 'bottom' | 'left' | 'right') => {
  if (position === 'top') {
    return { initial: { x: "-50%", y: "10px"}, animate: { x: "-50%", y: "0px" } };
  } else if (position === 'bottom') {
    return { initial: { x: "-50%", y: "-10px"}, animate: { x: "-50%", y: "0px" } };
  } else if (position === 'left') {
    return { initial: { x: "10%", y: "-50%"}, animate: { x: "0%", y: "-50%" } };
  } else if (position === 'right') {
    return { initial: { x: "-10%", y: "-50%"}, animate: { x: "0%", y: "-50%" } };
  } else {
    return { initial: { x: "-50%", y: "10px"}, animate: { x: "-50%", y: "0px" } };
  }
};

export const UiTooltip: React.FC<UiTooltipProps> = ({
  category = 'primary',
  children,
  className,
  inverse = true,
  position,
  text,
  testId
}: UiTooltipProps) => {
  const [toolbarVisible, setToolbarVisible] = useState(false);
  const animation = getAnimation(position);
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
        <ToolbarDiv
          $position={position}
          className={className}
          data-testid={testId}
          role="tooltip"
          $category={category}
          $inverse={inverse}
          {...animation}
        >
          <UiText inverseColoration={inverse}>{text}</UiText>
        </ToolbarDiv>
      )}
    </Div>
  );
};

UiTooltip.displayName = 'UiTooltip';
