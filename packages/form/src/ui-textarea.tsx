'use client';
import React from 'react';

import styled from 'styled-components';

import { UiText, UiLabel } from '@uireact/text';

import { UiTextAreaProps, privateTextAreaProps } from './types';

const Textarea = styled.textarea<privateTextAreaProps>`
  ${(props: privateTextAreaProps) => `
    font-family: var(--font-family);
    font-size: var(--texts-regular);
    background-color: var(--primary-token_100);
    border: 2px solid var(--${props.$category ?? 'primary'}-token_200);
    color: var(--fonts-token_100);

    &:focus {
      background-color: var(--primary-token_200);
      border-color: var(--${props.$category ?? 'tertiary'}-token_100);
    }

    ${props.$resize === false ? 'resize: none;' : ''}
    ${!props.cols ? 'width: 100%;' : ''}
  `}

  border-radius: 3px;
  box-sizing: border-box;

  &:disabled {
    cursor: not-allowed;
  }

  padding: 5px;
  outline: none;
`;

const WrapperDiv = styled.div`
  display: flex;
`;

const InputDiv = styled.div`
  display: inline-block;
  flex-grow: 1;
`;

export const UiTextArea: React.FC<UiTextAreaProps> = ({
  cols,
  disabled,
  error,
  label,
  labelOnTop,
  maxlength,
  className,
  testId,
  name = 'textarea-name',
  placeholder,
  resize,
  ref,
  rows,
  category,
  value,
  onChange,
  required,
}: UiTextAreaProps) => (
  <div className={className} data-testid={testId}>
    {label && labelOnTop && (
      <div>
        <UiLabel htmlFor={name} category={category}>
          {label}
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
        <Textarea
          cols={cols}
          disabled={disabled}
          id={name}
          $maxlength={maxlength}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          $resize={resize}
          rows={rows}
          $category={category}
          value={value}
          required={required}
        />
        {error && <UiText category={category}>{error}</UiText>}
      </InputDiv>
    </WrapperDiv>
  </div>
);

UiTextArea.displayName = 'UiTextArea';
