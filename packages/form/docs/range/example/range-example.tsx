'use client';
import React, { FormEvent, useCallback, useState } from 'react';

import { UiRangeInput } from '@uireact/form';

export const RangeExample = () => {
  const [value, setValue] = useState(50);

  const onChange = useCallback((name: string, value: number) => {
    setValue(value);
  }, []);

  return (
    <div>
      <p>Value: {value}</p>
      <UiRangeInput value={value} onChange={onChange} name="range-input-1" min={20} max={100} showTextInput />
    </div>
  )
}

export const RangeNotSelectableExample = () => {
  const [value, setValue] = useState(80);

  const onChange = useCallback((name: string, value: number) => {
    setValue(value);
  }, []);

  return (
    <div>
      <p>Value: {value}</p>
      <UiRangeInput value={value} onChange={onChange} name="range-input-2" min={50} max={100} step={20} />
    </div>
  )
}