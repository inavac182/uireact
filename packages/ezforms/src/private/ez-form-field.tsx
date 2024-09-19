import React, { FormEvent, useCallback } from 'react';

import { UiInputDatepicker } from '@uireact/datepicker';
import { UiInput, UiSwitch } from '@uireact/form';
import { UiIcon, UiIconProps } from '@uireact/icons';
import type { UiValidatorField } from '@uireact/validator';

type EzFormFieldProps = {
  field: UiValidatorField;
  error?: string;
  name: string;
  value?: any;
  useBrowserValidation?: boolean;
  onTextInputChange: (e: FormEvent<HTMLInputElement>) => void;
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
  onDateInputChange,
  onBooleanToogle
}: EzFormFieldProps) => {
  const rules = field.getRules();
  const icon = field.getIcon() ? <UiIcon icon={field.getIcon() as UiIconProps['icon']} /> : undefined;
  const isTextInput = rules.type.expected === 'text' || 
    rules.type.expected === 'numeric' ||
    rules.type.expected === 'email' ||
    rules.type.expected === 'phone';
  const inputType = 
    rules.type.expected === 'numeric' ? 'number' : 
    rules.type.expected === 'email' ? 'email' : 
    undefined

  const onDateChangeWrapper = useCallback((date: string) => {
    onDateInputChange(date, name);
  }, [name, onDateInputChange]);

  const onBooleanToogleWrapper = useCallback(() => {
    onBooleanToogle(!value, name);
  }, [name, value, onBooleanToogle]);

  if (isTextInput) {
    return (
      <UiInput 
        label={field.getLabel()}
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
        label={field.getLabel()}
        category={error ? 'error' : undefined}
        dateFormat={field.getDateFormat()}
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
        label={field.getLabel()}
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
