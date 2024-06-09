'use client';
import React, { FormEvent, useCallback, useRef, useState } from 'react';

import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiText, UiLabel } from '@uireact/text';

import { UiDigitsInputProps } from './types';
import styles from './ui-digits-input.scss';

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
  size = 'regular',
  required,
}: UiDigitsInputProps) => {
  const [digitsValues, setDigitsValues] = useState<string[]>([...Array(digits)]);
  const [digitsString, setDigitsString] = useState<string>('');
  const inputsRef = useRef(Array.from({length: digitsValues.length}, () => React.createRef<HTMLInputElement>()));

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

      if (digitNumber < digitsValues.length && value !== '' && inputsRef.current) {
        inputsRef.current[digitNumber + 1]?.current?.focus();
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
    <div className={styles.wrapper} data-testid={testId}>
      {label && (
        <UiLabel category={category} htmlFor={`internal-digit-0-input`}>
          {label}
        </UiLabel>
      )}
      <div>
        <input type="hidden" name={name} value={digitsString} />
        <div className={styles.inputWrapper}>
          {digitsValues.map((value, id) => (
            <input
              className={`${className} ${styles.uiDigitsInput} bg-primary-10 border-${category ? category : 'primary'}-100 focus-border-${category ? category : 'tertiary'}-100 size-${size} w-${size}`}
              name={`internal-digit-${id}-input`}
              value={value || ''}
              key={`internal-digit-${id}-input`}
              onChange={onDigitChange}
              required={required}
              ref={inputsRef.current[id]}
              disabled={disabled}
            />
          ))}
        </div>
        {error && (
          <UiSpacing padding={errorPadding}>
            <UiText category="error" size="small">
              {error}
            </UiText>
          </UiSpacing>
        )}
      </div>
    </div>
  );
};

UiDigitsInput.displayName = 'UiDigitsInput';
