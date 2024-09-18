import React, { FormEvent, useCallback } from 'react';

import { UiEzForm } from '@uireact/ezforms';
import { UiValidator, UiValidatorData } from '@uireact/validator';

const validator = new UiValidator();

const schema = {
  name: validator.field('string').ezMetada({ label: 'First Name', icon: 'User' }).isRequired(),
  birthday: validator.field('date').ezMetada({ label: 'When is your birthday?', icon: 'Party', dateFormat: 'yyyy/mm/dd' }).isRequired(),
  age: validator.field('numeric').ezMetada({ label: 'How old are you?', icon: 'Sun' }).isRequired(),
  email: validator.field('email').ezMetada({ label: 'Enter your email', icon: 'Mail' }).isRequired()
};

export const EzFormExample = () => {  
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>, data: UiValidatorData) => {
    e.preventDefault();
    console.log(data);
  }, []);
  const onCancel = useCallback(() => {
    console.log('Cancel triggered');
  }, []);

  return (
    <UiEzForm schema={schema} submitLabel='Save' cancelLabel='Cancel' onSubmit={onSubmit} onCancel={onCancel} initialData={{ birthday: '1992/12/03' }} />
  )
}