'use client';
import React, { FormEvent, useCallback } from 'react';

import styled from 'styled-components';

import { UiText, UiLabel } from '@uireact/text';

import { UiSelectProps, privateSelectProps } from './types';

const Select = styled.select<privateSelectProps>`
  ${(props: privateSelectProps) => `
    font-family: var(--font-family);
    font-size: var(--texts-regular);
    background-color: var(--primary-token_100);
    border: 2px solid var(--${props.$category ?? 'primary'}-token_200);
    color: var(--fonts-token_100);

    &:focus {
      background-color: var(--primary-token_200);
      border-color: var(--${props.$category ?? 'tertiary'}-token_100);
    }
  `}

  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  outline: none;
  width: 100%;
  box-sizing: border-box;

  &:disabled {
    cursor: not-allowed;
  }
`;

const WrapperDiv = styled.div`
  display: flex;
`;

const SelectDiv = styled.div`
  display: inline-block;
  flex-grow: 1;
`;

export const UiSelect: React.FC<UiSelectProps> = ({
  children,
  className,
  testId,
  disabled,
  error,
  label,
  labelOnTop,
  name = 'select-name',
  ref,
  category,
  value,
  onChange,
  required,
}: UiSelectProps) => {
  const handleChange = useCallback(
    (e: FormEvent<HTMLSelectElement>) => {
      onChange?.(e.currentTarget.value);
    },
    [onChange]
  );

  return (
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
        <SelectDiv>
          <Select
            disabled={disabled}
            id={name}
            name={name}
            onChange={handleChange}
            ref={ref}
            $category={category}
            value={value}
            required={required}
          >
            {children}
          </Select>
          {error && <UiText category={category}>{error}</UiText>}
        </SelectDiv>
      </WrapperDiv>
    </div>
  );
};

UiSelect.displayName = 'UiSelect';
