import React, { FormEvent, useCallback, useState } from 'react';

import { UiEzForm } from '@uireact/ezforms';
import { UiValidator, UiValidatorData } from '@uireact/validator';
import { UiCard } from '@uireact/card';
import { UiFlexGrid } from '@uireact/flex';

const validator = new UiValidator();

const schema = {
  name: validator
    .field('text')
    .ezMetadata({ label: 'First Name', icon: 'User' })
    .present(),
  birthday: validator
    .field('date')
    .ezMetadata({ label: 'When is your birthday?', icon: 'Party', dateFormat: 'yyyy/mm/dd' })
    .present(),
  age: validator
    .field('numeric')
    .ezMetadata({ label: 'How old are you?', icon: 'Sun' })
    .present()
    .greaterThan(18, "You have to be older than 18 years old"),
  phone: validator
    .field('phone')
    .ezMetadata({ label: 'Your phone' })
    .optional(),
  email: validator
    .field('email')
    .ezMetadata({ label: 'Your email', icon: 'Mail' }).present()
    .when('phone', validator.is().present())
    .run(validator.is().optional())
    .else(validator.is().present("The email is required if you don't provide your phone number.")),
  type: validator
    .field('choice')
    .ezMetadata({ label: 'Account type' })
    .present("You have to select the type of account")
    .oneOf(['user', 'admin', 'editor']),
  description: validator
    .field('text')
    .ezMetadata({ label: 'Description', paragraph: true })
    .optional(),
  terms: validator
    .field('boolean')
    .ezMetadata({ label: 'Accept terms and conditions' })
    .present("You have to accept our terms and conditions"),
  code: validator
    .field('numeric')
    .ezMetadata({ label: 'Code sent to your phone', code: true })
    .present("The code is required")
    .length(6, 6, "The code need to be 6 characters long"),
  token: validator
    .field('text')
    .ezMetadata({ hidden: true })
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
  const onChange = useCallback((data: UiValidatorData) => {
    console.log('Change triggered');
    console.log(data);
  }, []);

  return (
    <UiFlexGrid direction='column' gap='four'>
      {isSubmited && <UiCard category='positive'>Form has submitted successfully</UiCard>}
      <UiEzForm schema={schema} submitLabel='Save' cancelLabel='Cancel' onSubmit={onSubmit} onCancel={onCancel} onChange={onChange} initialData={{ birthday: '1992/12/03' }} />
    </UiFlexGrid>
  )
}