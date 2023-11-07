'use client';
import * as React from 'react';

import styled from 'styled-components';

import { getColorCategory, getSpacingStyle } from '@uireact/foundation';

import { privateButtonProps, UiButtonProps } from './types';

const StyledButton = styled.button<privateButtonProps>`
  ${(props) => (props.$fullWidth ? 'width: 100%;' : '')}
  ${(props) => (props.$fullHeight ? 'height: 100%;' : '')}
  ${(props) => (props.disabled ? 'cursor: not-allowed;' : 'cursor: pointer;')}
  ${(props) => (props.$rounded ? 'border-radius: 15px/50%;' : 'border-radius: 3px;')}
  ${(props) => (props.$padding ? `padding: ${getSpacingStyle(props.$padding)};` : '')}
  
  ${(props) => {
    if (props.$styling === 'clear') {
      return `
        color: var(--fonts-token_100);
        padding: 0px 10px 0px 10px;
        border-width: 0;
        background: transparent;
      `;
    } else if (props.$styling === 'outlined') {
      return `
        padding: 5px 10px 5px 10px;
        background-color: transparent;
        color: var(--${getColorCategory(props.$category)}-token_100) !important;
        fill: var(--${getColorCategory(props.$category)}-token_100) !important;
        border-color: var(--${getColorCategory(props.$category)}-token_50);
        border-width: 2px;

        p, span {
          color: var(--${getColorCategory(props.$category)}-token_100) !important;
          fill: var(--${getColorCategory(props.$category)}-token_100) !important;
        }

        &:hover {
          p, span {
            color: var(--fonts-token_100) !important;
            fill: var(--fonts-token_100) !important;
          }
        }
      `;
    } else if (props.$styling === 'icon') {
      return `
        background-color: var(--${getColorCategory(props.$category)}-token_100);
        color: var(--fonts-token_100);
        padding: 10px;
        border-radius: 50%;
        display: inline-flex;
        border-width: 0px;
      `;
    }

    return `
      background-color: var(--${getColorCategory(props.$category)}-token_100);
      border-color: var(--${getColorCategory(props.$category)}-token_50);
      color: var(--fonts-token_100);
      padding-left: 10px;
      padding-right: 10px;
      border-width: 1px;
    `;
  }}

  font-weight: bold;
  border-style: solid;

  &:hover {
    ${(props) => `
      background-color: var(--${getColorCategory(props.$category)}-token_150);
      border-color: var(--${getColorCategory(props.$category)}-token_100);
    `}
  }

  &:active {
    ${(props) => `
      background-color: var(--${getColorCategory(props.$category)}-token_200);
      border-color: var(--${getColorCategory(props.$category)}-token_150);
    `}
  }

  &:disabled {
    ${(props) => `
      background-color: var(--${getColorCategory(props.$category)}-token_50);
      border-color: var(--${getColorCategory(props.$category)}-token_10);
    `}
  }
`;

export const UiButton: React.FC<UiButtonProps> = ({
  onClick,
  className,
  disabled = false,
  children,
  id,
  category = 'primary',
  fullHeight = false,
  fullWidth = false,
  styling,
  padding,
  ref,
  rounded = false,
  type = 'button',
  testId,
}: UiButtonProps) => (
  <StyledButton
    $category={category}
    onClick={onClick}
    data-testid={testId}
    $styling={styling}
    id={id}
    className={className}
    disabled={disabled}
    $fullHeight={fullHeight}
    $fullWidth={fullWidth}
    $padding={padding}
    type={type}
    ref={ref}
    $rounded={rounded}
  >
    {children}
  </StyledButton>
);

UiButton.displayName = 'UiPrimaryButton';
