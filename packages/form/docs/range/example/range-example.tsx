'use client';
import React, { FormEvent, useCallback, useState } from 'react';

import { UiRangeInput } from '@uireact/form';

export const RangeExample = () => {
  const [value, setValue] = useState(50);

  const onChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    setValue(parseInt(event.currentTarget.value));
  }, []);

  return (
    <div>
      <p>Value: {value}</p>
      <UiRangeInput value={value} onChange={onChange} min={20} max={100} />
    </div>
  )
}

export const RangeNotSelectableExample = () => {
  const [value, setValue] = useState(80);

  const onChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    setValue(parseInt(event.currentTarget.value));
  }, []);

  return (
    <div>
      <p>Value: {value}</p>
      <UiRangeInput value={value} onChange={onChange} min={50} max={100} step={20} />
    </div>
  )
}