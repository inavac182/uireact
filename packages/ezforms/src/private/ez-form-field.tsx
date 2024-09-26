import React, { FormEvent, useCallback } from 'react';

import { UiInputDatepicker } from '@uireact/datepicker';
import { UiInput, UiSelect, UiSwitch, UiTextArea } from '@uireact/form';
import { UiIcon, UiIconProps } from '@uireact/icons';
import type { UiValidatorField, UiValidatorWhen } from '@uireact/validator';
import { getFieldData } from './get-field-data';
import { getFieldRules } from './get-field-rules';

type EzFormFieldProps = {
  field: UiValidatorField | UiValidatorWhen;
  error?: string;
  name: string;
  value?: any;
  useBrowserValidation?: boolean;
  onTextInputChange: (e: FormEvent<HTMLInputElement>) => void;
  onTextAreaChange: (e: FormEvent<HTMLTextAreaElement>) => void;
  onSelectInputChange: (value: string, name: string) => void;
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
  onBooleanToogle,
  onSelectInputChange
}: EzFormFieldProps) => {
  const fieldData = getFieldData(field);
  const ezMetadata = fieldData.getEzMetadata() || {};
  const rules = getFieldRules(field);
  const icon = ezMetadata.icon ? <UiIcon icon={ezMetadata.icon as UiIconProps['icon']} /> : undefined;
  const onDateChangeWrapper = useCallback((date: string) => {
    onDateInputChange(date, name);
  }, [name, onDateInputChange]);

  const onSelectChangeWrapper = useCallback((value?: string) => {
    onSelectInputChange(value || "", name);
  }, [name, onSelectInputChange]);

  const onBooleanToogleWrapper = useCallback(() => {
    onBooleanToogle(!value, name);
  }, [name, value, onBooleanToogle]);

  // istanbul ignore next
  if (!rules || !rules.type) {
    console.error(`UiEzForm - There are missing rules on field ${name}`)
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

  if(rules.type.expected === 'choice' && rules.oneOf?.options) {
    return (
      <UiSelect name={name} value={value} onChange={onSelectChangeWrapper} error={error} category={error ? 'error' : undefined} label={ezMetadata.label} labelOnTop>
        <option value=""></option>
        {
          rules.oneOf.options.map((option, index) => <option key={`${name}-option-select-${index}`} value={option}>{option}</option>)
        }
      </UiSelect>
    );
  }

  return null;
};
