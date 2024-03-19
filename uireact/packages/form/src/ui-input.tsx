'use client';
import React from 'react';

import styled from 'styled-components';

import { SizesProp } from '@uireact/foundation';
import { UiText, UiLabel } from '@uireact/text';

import { UiInputProps, privateInputProps } from './types';
import { getPadding } from './__private';

const Input = styled.input<privateInputProps>`
  ${(props: privateInputProps) => `
    font-family: var(--font-family);
    font-size: var(--texts-regular);
    background-color: var(--primary-token_100);
    border: 2px solid var(--${props.$category ?? 'primary'}-token_200);
    color: var(--fonts-token_100);
    border-radius: 5px;

    &:focus {
      background-color: var(--primary-token_200);
      border-color: var(--${props.$category ?? 'tertiary'}-token_100);
      border-style: solid;
      border-width: 2px;
    }

    &:disabled {
      cursor: not-allowed;
    }

    padding-top: ${getPadding(props.$size || 'regular')};
    padding-bottom: ${getPadding(props.$size || 'regular')};
    padding-left: ${props.$withIcon ? '30px' : '5px'};
    outline: none;
    width: 100%;
    box-sizing: border-box;
  `}
`;

const WrapperDiv = styled.div`
  display: flex;
`;

const InputContentDiv = styled.div`
  position: relative;
`;

const InputDiv = styled.div`
  display: inline-block;
  flex-grow: 1;
  position: relative;
`;

const IconContainer = styled.span<{ $size?: SizesProp }>`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const UiInput: React.FC<UiInputProps> = ({
  className,
  testId,
  disabled,
  error,
  icon,
  label,
  labelOnTop,
  name = 'input-name',
  placeholder,
  ref,
  category,
  type,
  value,
  onChange,
  size,
  required,
}: UiInputProps) => (
  <div className={className} data-testid={testId}>
    {label && labelOnTop && (
      <div>
        <UiLabel htmlFor={name} category={category}>
          {label} &nbsp;
        </UiLabel>
      </div>
    )}
    <WrapperDiv>
      {label && !labelOnTop && (
        <div>
          <UiLabel htmlFor={name} category={category}>
            {label} &nbsp;
          </UiLabel>
        </div>
      )}
      <InputDiv>
        <InputContentDiv>
          {icon && <IconContainer>{icon}</IconContainer>}
          <Input
            disabled={disabled}
            id={name}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            $category={category}
            type={type}
            value={value}
            $size={size}
            required={required}
            $withIcon={icon !== undefined}
          />
        </InputContentDiv>
        {error && <UiText category={category}>{error}</UiText>}
      </InputDiv>
    </WrapperDiv>
  </div>
);

UiInput.displayName = 'UiInput';
