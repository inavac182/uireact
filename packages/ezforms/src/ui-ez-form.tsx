import React, { Fragment, useState } from 'react';

import { UiValidatorSchema } from '@uireact/validator';

import { UiEzFormValues } from './types';

export type UiEzFormProps = {
  schema: UiValidatorSchema;
  initialData?: Record<string, UiEzFormValues>
}

export const UiEzForm: React.FC<UiEzFormProps> = ({ schema, initialData }) => {
  const [data, setData] = useState<typeof initialData>(initialData);

  return (
    <>
      {Object.keys(schema).map((schemaField, index) => <Fragment key={`ezform-field-${index}`}></Fragment>)}
      <p>Content</p>
    </>
  )
};

UiEzForm.displayName = 'UiEzForm';
