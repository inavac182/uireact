import React, { FormEvent, useCallback, useState } from 'react';

import { UiPrimaryButton, UiTertiaryButton } from '@uireact/button';
import { UiFlexGrid } from '@uireact/flex';
import { UiValidator, UiValidatorData, UiValidatorErrors, UiValidatorSchemaV2 } from '@uireact/validator';

import { EzFormField, generateInitialData } from './private';

export type UiEzFormProps = {
  action?: string;
  schema: UiValidatorSchemaV2;
  initialData?: UiValidatorData;
  submitLabel?: string;
  cancelLabel?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>, data: UiValidatorData) => void;
  onCancel?: () => void;
  useBrowserValidation?: boolean;
}

const validator = new UiValidator();

export const UiEzForm: React.FC<UiEzFormProps> = ({ 
  action,
  schema, 
  initialData,
  cancelLabel,
  submitLabel,
  useBrowserValidation,
  onSubmit, 
  onCancel
}) => {
  const [data, setData] = useState<UiValidatorData>(generateInitialData(schema, initialData));
  const [errors, setErrors] = useState<UiValidatorErrors>();
  const onTextInputChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
  }, [data]);

  const onDateInputChange = useCallback((date: string, name: string) => {
    setData({ ...data, [name]: date });
  }, [data]);

  const onSubmitCB = useCallback((e: FormEvent<HTMLFormElement>) => {
    const result = validator.validate(schema, data, true);
    if (result.passed) {
      onSubmit?.(e, data);
      return true;
    } else {
      e.preventDefault();
      setErrors(result.errors);
      return false;
    }
  }, [data, onSubmit, schema]);

  return (
    <form onSubmit={onSubmitCB} action={action}>
      <UiFlexGrid gap='three' direction='column'>
        {Object.keys(schema).map((schemaField, index) => 
          <EzFormField
            key={`ezform-field-${index}`}
            field={schema[schemaField]}
            name={schemaField}
            error={errors?.[schemaField]?.[0]?.message}
            onTextInputChange={onTextInputChange}
            onDateInputChange={onDateInputChange}
            useBrowserValidation={useBrowserValidation}
          />
        )}
        {submitLabel && (
          <UiPrimaryButton type='submit'>
            {submitLabel}
          </UiPrimaryButton>
        )}
        {cancelLabel && (
          <UiTertiaryButton onClick={onCancel}>
            {cancelLabel}
          </UiTertiaryButton>
        )}
      </UiFlexGrid>
    </form>
  );
};

UiEzForm.displayName = 'UiEzForm';
