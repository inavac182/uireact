import React, { FormEvent, useCallback } from 'react';

import { UiInputDatepicker } from '@uireact/datepicker';
import { UiInput, UiSwitch, UiTextArea } from '@uireact/form';
import { UiIcon, UiIconProps } from '@uireact/icons';
import type { UiValidatorField } from '@uireact/validator';

type EzFormFieldProps = {
  field: UiValidatorField;
  error?: string;
  name: string;
  value?: any;
  useBrowserValidation?: boolean;
  onTextInputChange: (e: FormEvent<HTMLInputElement>) => void;
  onTextAreaChange: (e: FormEvent<HTMLTextAreaElement>) => void;
  onDateInputChange: (date: string, name: string) => void;
  onBooleanToogle: (value: boolean, name: string) => void;
}

export const EzFormField = ({ 
  field, 
  error,
  name, 
  value, 
  useBrowserValidation, 
  onTextInputChange,
  onTextAreaChange,
  onDateInputChange,
  onBooleanToogle
}: EzFormFieldProps) => {
  const ezMetadata = field.getEzMetadata() || {};
  const rules = field.getRules();
  const icon = ezMetadata.icon ? <UiIcon icon={ezMetadata.icon as UiIconProps['icon']} /> : undefined;
  const onDateChangeWrapper = useCallback((date: string) => {
    onDateInputChange(date, name);
  }, [name, onDateInputChange]);

  const onBooleanToogleWrapper = useCallback(() => {
    onBooleanToogle(!value, name);
  }, [name, value, onBooleanToogle]);

  if (!rules.type) {
    return null;
  }

  const isTextInput = rules.type.expected === 'text' || 
    rules.type.expected === 'numeric' ||
    rules.type.expected === 'email' ||
    rules.type.expected === 'phone';
  const inputType = 
    rules.type.expected === 'numeric' ? 'number' : 
    rules.type.expected === 'email' ? 'email' : 
    undefined

  if (isTextInput) {
    if (ezMetadata.paragraph) {
      return (
        <UiTextArea 
          label={ezMetadata.label}
          category={error ? 'error' : undefined}
          error={error}
          value={value}
          name={name}
          onChange={onTextAreaChange}
          labelOnTop
          required={useBrowserValidation && rules.required?.expected}
        />
      )
    }

    return (
      <UiInput 
        label={ezMetadata.label}
        type={inputType}
        category={error ? 'error' : undefined}
        error={error}
        icon={icon}
        value={value}
        name={name}
        onChange={onTextInputChange}
        labelOnTop
        required={useBrowserValidation && rules.required?.expected}
      />
    )
  }

  if (rules.type.expected === 'date') {
    const selectedDate = value ? new Date(`${value} 00:00:00`) : undefined;

    return (
      <UiInputDatepicker 
        label={ezMetadata.label}
        category={error ? 'error' : undefined}
        dateFormat={ezMetadata.dateFormat}
        error={error}
        icon={icon}
        date={selectedDate}
        name={name}
        onChange={onDateChangeWrapper}
        labelOnTop
        required={useBrowserValidation && rules.required?.expected}
      />      
    )
  }

  if(rules.type.expected === 'boolean') {
    return (
      <UiSwitch 
        label={ezMetadata.label}
        category={error ? 'error' : 'secondary'}
        error={error}
        checked={value}
        name={name}
        onChange={onBooleanToogleWrapper}
      />
    )
  }

  return null;
};
