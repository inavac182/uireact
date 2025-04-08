import React, { FormEvent, useCallback, useState } from 'react';

import { UiButtonProps, UiPrimaryButton, UiTertiaryButton } from '@uireact/button';
import { UiFlexGrid } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';
import { UiValidator, UiValidatorData, UiValidatorErrors, UiValidatorSchema } from '@uireact/validator';

import { EzFormField, generateInitialData } from './private';

export type UiEzFormDecoratorsPositions = {
  aboveActions?: React.ReactNode;
  belowActions?: React.ReactNode;
}

export type UiEzFormProps = {
  /** Action prop for the Form element */
  action?: any;
  /** Alignment of buttons */
  buttonsAlignment?: 'stacked' | 'inline';
  /** Method used to submit form when doing a browser submit */
  method?: string;
  /** The schema that will be used to create the EzForm */
  schema: UiValidatorSchema;
  /** Used to render an initial data inside the form fields */
  initialData?: UiValidatorData;
  /** Label to be rendered on the submit action */
  submitLabel: string;
  /** Label to be rendered on the cancel action */
  cancelLabel?: string;
  /** Triggered when the form is submitted by the user */
  onSubmit?: (e: FormEvent<HTMLFormElement>, data: UiValidatorData) => void;
  /** Triggered when there is a change in the form */
  onChange?: (data: UiValidatorData) => void;
  /** Triggered when user clicks on cancel action */
  onCancel?: () => void;
  /** Uses the default built-in browser validation */
  useBrowserValidation?: boolean;
  /** Used to render elements inside the form component */
  decorators?: UiEzFormDecoratorsPositions;
  /** Marks the form as loading, submit button is disabled */
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
  onCancel,
  onChange
}) => {
  const [data, setData] = useState<UiValidatorData>(generateInitialData(schema, initialData));
  const [errors, setErrors] = useState<UiValidatorErrors>();

  const onTextInputChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    const newData = { ...data, [e.currentTarget.name]: e.currentTarget.value };
    setErrors({});
    setData(newData);
    onChange?.(newData);
  }, [data, onChange]);

  const onTextAreaChange = useCallback((e: FormEvent<HTMLTextAreaElement>) => {
    const newData = { ...data, [e.currentTarget.name]: e.currentTarget.value };
    setErrors({});
    setData(newData);
    onChange?.(newData);
  }, [data, onChange]);

  const onDateInputChange = useCallback((date: string, name: string) => {
    const newData = { ...data, [name]: date };
    setErrors({});
    setData(newData);
    onChange?.(newData);
  }, [data, onChange]);

  const onBooleanToogle = useCallback((value: Boolean, name: string) => {
    const newData = { ...data, [name]: value };
    setErrors({});
    setData(newData);
    onChange?.(newData);
  },[data, onChange]);

  const onSelectChange = useCallback((value: string, name: string) => {
    const newData = { ...data, [name]: value };
    setErrors({});
    setData(newData);
    onChange?.(newData);
  }, [data, onChange]);

  const onDigitsInputChange = useCallback((value: string, name: string) => {
    const newData = { ...data, [name]: value };
    setErrors({});
    setData(newData);
    onChange?.(newData);
  }, [data, onChange]);

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
