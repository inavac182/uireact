import React, { FormEvent, useCallback, useState } from 'react';

import { UiEzForm } from '@uireact/ezforms';
import { UiValidator, UiValidatorData } from '@uireact/validator';
import { UiCard } from '@uireact/card';
import { UiFlexGrid } from '@uireact/flex';

const validator = new UiValidator();

const schema = {
  name: validator
    .field('text')
    .ezMetada({ label: 'First Name', icon: 'User' })
    .present(),
  birthday: validator
    .field('date')
    .ezMetada({ label: 'When is your birthday?', icon: 'Party', dateFormat: 'yyyy/mm/dd' })
    .present(),
  age: validator
    .field('numeric')
    .ezMetada({ label: 'How old are you?', icon: 'Sun' })
    .present()
    .greaterThan(18, "You have to be older than 18 years old"),
  phone: validator
    .field('phone')
    .ezMetada({ label: 'Your phone' })
    .optional(),
  email: validator
    .field('email')
    .ezMetada({ label: 'Your email', icon: 'Mail' }).present()
    .when('phone', validator.is().present())
    .run(validator.is().optional())
    .else(validator.is().present("The email is required if you don't provide your phone number.")),
  type: validator
    .field('choice')
    .ezMetada({ label: 'Account type' })
    .present("You have to select the type of account")
    .oneOf(['user', 'admin', 'editor']),
  description: validator
    .field('text')
    .ezMetada({ label: 'Description', paragraph: true })
    .optional(),
  terms: validator
    .field('boolean')
    .ezMetada({ label: 'Accept terms and conditions' })
    .present("You have to accept our terms and conditions")
};

export const EzFormExample = () => {  
  const [isSubmited, setIsSubmited] = useState(false);
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>, data: UiValidatorData) => {
    e.preventDefault();
    setIsSubmited(true);
    console.log(data);
  }, []);
  const onCancel = useCallback(() => {
    console.log('Cancel triggered');
  }, []);

  return (
    <UiFlexGrid direction='column' gap='four'>
      {isSubmited && <UiCard category='positive'>Form has submitted successfully</UiCard>}
      <UiEzForm schema={schema} submitLabel='Save' cancelLabel='Cancel' onSubmit={onSubmit} onCancel={onCancel} initialData={{ birthday: '1992/12/03' }} />
    </UiFlexGrid>
  )
}