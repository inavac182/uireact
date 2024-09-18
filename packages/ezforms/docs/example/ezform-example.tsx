import React from 'react';

import { UiEzForm } from '@uireact/ezforms';
import { UiValidator } from '@uireact/validator';

const validator = new UiValidator();

const schema = {
  name: validator.field('string').label('First Name').icon('User').isRequired(),
  birthday: validator.field('date').label('When is your birthday?').icon('Party').isRequired(),
  age: validator.field('numeric').label('How old are you?').icon('Sun').isRequired(),
  email: validator.field('email').label('Enter your email').icon('Mail').isRequired()
};

export const EzFormExample = () => {
  
  return (
    <UiEzForm schema={schema} submitLabel='Save' cancelLabel='Reset' />
  )
}