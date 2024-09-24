import React, { FormEvent, useCallback, useState } from 'react';

import { UiPrimaryButton, UiTertiaryButton } from '@uireact/button';
import { UiFlexGrid } from '@uireact/flex';
import { UiValidator, UiValidatorData, UiValidatorErrors, UiValidatorField, UiValidatorSchema } from '@uireact/validator';

import { EzFormField, generateInitialData } from './private';

export type UiEzFormProps = {
  action?: string;
  schema: UiValidatorSchema;
  initialData?: UiValidatorData;
  submitLabel: string;
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
  const [loading, setLoading] = useState(false);

  const onTextInputChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setErrors({});
    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
  }, [data]);

  const onTextAreaChange = useCallback((e: FormEvent<HTMLTextAreaElement>) => {
    setErrors({});
    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
  }, [data]);

  const onDateInputChange = useCallback((date: string, name: string) => {
    setErrors({});
    setData({ ...data, [name]: date });
  }, [data]);

  const onBooleanToogle = useCallback((value: Boolean, name: string) => {
    setErrors({});
    setData({ ...data, [name]: value });
  },[data]);

  const onSubmitCB = useCallback((e: FormEvent<HTMLFormElement>) => {
    setErrors({});
    setLoading(true);
    const result = validator.validate(schema, data);

    if (result.passed) {
      onSubmit?.(e, data);
    } else {
      e.preventDefault();

      setErrors(result.errors);
      setLoading(false);
    }
  }, [data, onSubmit, schema]);

  return (
    <form onSubmit={onSubmitCB} action={action}>
      <UiFlexGrid gap='three' direction='column'>
        {Object.keys(schema).map((schemaField, index) => 
          <EzFormField
            key={`ezform-field-${index}`}
            field={schema[schemaField] as UiValidatorField}
            value={data[schemaField]}
            name={schemaField}
            error={errors?.[schemaField]?.[0]?.message}
            onTextInputChange={onTextInputChange}
            onTextAreaChange={onTextAreaChange}
            onDateInputChange={onDateInputChange}
            onBooleanToogle={onBooleanToogle}
            useBrowserValidation={useBrowserValidation}
          />
        )}
        <UiPrimaryButton type='submit'>
          {submitLabel}
        </UiPrimaryButton>
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
