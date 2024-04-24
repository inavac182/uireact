'use client';
import React, { FormEvent, LegacyRef, useCallback, useRef, useState } from 'react';

import styled from 'styled-components';

import { ColorCategory, SizesProp, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiText, UiLabel } from '@uireact/text';

import { UiDigitsInputProps } from './types';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const DigitInput = styled.input<{ $category: ColorCategory; $size: SizesProp }>`
  padding: 10px;
  border: 0;
  background-color: var(--primary-token_10);
  font-family: var(--font-family);
  color: var(--fonts-token_100);
  text-align: center;
  outline: none;
  border-radius: 5px;

  ${(props) => `
    border: 2px solid var(--${props.$category}-token_200);
    font-size: var(--texts-${props.$size});
    width: var(--texts-${props.$size});

    &:focus {
      background-color: var(--primary-token_100);
      border-color: var(--tertiary-token_100);
      border-style: solid;
      border-width: 2px;
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;

const DigitInputsWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

const errorPadding: UiSpacingProps['padding'] = { top: 'two' };

export const UiDigitsInput: React.FC<UiDigitsInputProps> = ({
  className,
  digits,
  testId,
  disabled,
  error,
  label,
  name = 'input-name',
  category,
  onChange,
  onComplete,
  size,
  required,
}: UiDigitsInputProps) => {
  const [digitsValues, setDigitsValues] = useState<string[]>([...Array(digits)]);
  const [digitsString, setDigitsString] = useState<string>('');
  const inputsRef = useRef(Array.from({length: digitsValues.length}, a => React.createRef<HTMLInputElement>()));

  const onDigitChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;

      const nameBreakdown = name.split('-');
      const digitNumber = parseInt(nameBreakdown[2]);

      if (value.length === digits) {
        const valueInputArray = value.split('');

        valueInputArray.map((valueInput, index) => {
          digitsValues[index] = valueInput;
        });

        setDigitsString(value);
        onChange?.(value);
        onComplete?.(value);
        return;
      } else if (value.length > 1) {
        return;
      }

      digitsValues[digitNumber] = value;

      setDigitsValues(digitsValues);

      if (digitNumber < digitsValues.length && value !== '') {
        inputsRef.current[digitNumber + 1].current?.focus();
      }

      let digitString = '';

      digitsValues.map((digit) => {
        if (digit) {
          digitString = digitString + digit;
        }
      });

      setDigitsString(digitString);
      onChange?.(digitString);
      if (digitString.length === digits) {
        onComplete?.(digitString);
      }
    },
    [digitsValues, inputsRef]
  );

  return (
    <InputWrapper className={className} data-testid={testId}>
      {label && (
        <UiLabel category={category} htmlFor={`internal-digit-0-input`}>
          {label}
        </UiLabel>
      )}
      <div>
        <input type="hidden" name={name} value={digitsString} />
        <DigitInputsWrapper>
          {digitsValues.map((value, id) => (
            <DigitInput
              $category={category || 'primary'}
              $size={size || 'regular'}
              name={`internal-digit-${id}-input`}
              value={value || ''}
              key={`internal-digit-${id}-input`}
              onChange={onDigitChange}
              required={required}
              ref={inputsRef.current[id]}
              disabled={disabled}
            />
          ))}
        </DigitInputsWrapper>
        {error && (
          <UiSpacing padding={errorPadding}>
            <UiText category="error" size="small">
              {error}
            </UiText>
          </UiSpacing>
        )}
      </div>
    </InputWrapper>
  );
};

UiDigitsInput.displayName = 'UiDigitsInput';
