'use client';
import React, { FormEvent, useCallback, useState } from 'react';

import { UiRangeInput } from '@uireact/form';

export const RangeExample = () => {
  const [value, setValue] = useState<string>("");

  const onChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }, []);

  return (
    <div>
      <p>Value: {value}</p>
      <UiRangeInput value={value} onChange={onChange} min={-100} max={300} />
    </div>
  )
}