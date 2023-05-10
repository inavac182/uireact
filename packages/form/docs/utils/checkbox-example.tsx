import React from 'react';

import { UiCheckbox } from '../../src';

export const CheckboxExample: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  const onChangeCB = React.useCallback(() => {
    setChecked(!checked);
  }, [checked, setChecked]);

  return <UiCheckbox checked={checked} onChange={onChangeCB} name="checkbox" />;
};
