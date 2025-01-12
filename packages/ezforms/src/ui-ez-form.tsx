import React, { FormEvent, useCallback, useState } from 'react';

import { UiButtonProps, UiPrimaryButton, UiTertiaryButton } from '@uireact/button';
import { UiFlexGrid } from '@uireact/flex';
import { UiValidator, UiValidatorData, UiValidatorErrors, UiValidatorField, UiValidatorSchema } from '@uireact/validator';

import { EzFormField, generateInitialData } from './private';
import { UiIcon } from '@uireact/icons';

export type UiEzFormDecoratorsPositions = {
  aboveActions?: React.ReactNode;
  belowActions?: React.ReactNode;
}

export type UiEzFormProps = {
  action?: any;
  buttonsAlignment?: 'stacked' | 'inline';
  method?: string;
  schema: UiValidatorSchema;
  initialData?: UiValidatorData;
  submitLabel: string;
  cancelLabel?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>, data: UiValidatorData) => void;
  onCancel?: () => void;
  useBrowserValidation?: boolean;
  decorators?: UiEzFormDecoratorsPositions;
  loading?: boolean;
};

const validator = new UiValidator();

const inlineButtonSpacing: UiButtonProps['padding'] = { inline: 'four', block: 'two' };

export const UiEzForm: React.FC<UiEzFormProps> = ({ 
  action,
  buttonsAlignment = 'inline',
  schema, 
  method,
  initialData,
  cancelLabel,
  submitLabel,
  useBrowserValidation,
  decorators,
  loading,
  onSubmit, 
  onCancel
}) => {
  const [data, setData] = useState<UiValidatorData>(generateInitialData(schema, initialData));
  const [errors, setErrors] = useState<UiValidatorErrors>();

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

  const onSelectChange = useCallback((value: string, name: string) => {
    setErrors({});
    setData({ ...data, [name]: value });
  }, [data]);

  const onDigitsInputChange = useCallback((value: string, name: string) => {
    setErrors({});
    setData({ ...data, [name]: value });
  }, [data]);

  const onSubmitCB = useCallback((e: FormEvent<HTMLFormElement>) => {
    setErrors({});
    const result = validator.validate(schema, data);

    if (result.passed) {
      onSubmit?.(e, data);
    } else {
      e.preventDefault();

      setErrors(result.errors);
    }
  }, [data, onSubmit, schema]);

  return (
    <form onSubmit={onSubmitCB} action={action} method={method}>
      <UiFlexGrid gap='three' direction='column'>
        {Object.keys(schema).map((schemaField, index) => 
          <EzFormField
            key={`ezform-field-${index}`}
            field={schema[schemaField]}
            value={data[schemaField]}
            name={schemaField}
            error={errors?.[schemaField]?.[0]?.message}
            onTextInputChange={onTextInputChange}
            onTextAreaChange={onTextAreaChange}
            onDateInputChange={onDateInputChange}
            onBooleanToogle={onBooleanToogle}
            onSelectInputChange={onSelectChange}
            onDigitsInputChange={onDigitsInputChange}
            useBrowserValidation={useBrowserValidation}
          />
        )}
        {decorators?.aboveActions}
        {buttonsAlignment === 'stacked' ? (
          <>
            <UiPrimaryButton type='submit' disabled={loading}>
              {submitLabel} {loading && <UiIcon icon="LoadingSpinner" inverseColoration />}
            </UiPrimaryButton>
            {cancelLabel && (
              <UiTertiaryButton onClick={onCancel}>
                {cancelLabel}
              </UiTertiaryButton>
            )}
          </>
        ) : (
          <UiFlexGrid gap='four'>
            <UiPrimaryButton type='submit' padding={inlineButtonSpacing} disabled={loading}>
              {submitLabel} {loading && <UiIcon icon="LoadingSpinner" inverseColoration />}
            </UiPrimaryButton>
            {cancelLabel && (
              <UiTertiaryButton onClick={onCancel} padding={inlineButtonSpacing}>
                {cancelLabel}
              </UiTertiaryButton>
            )}
          </UiFlexGrid>
        )}
        {decorators?.belowActions}
      </UiFlexGrid>
    </form>
  );
};

UiEzForm.displayName = 'UiEzForm';
