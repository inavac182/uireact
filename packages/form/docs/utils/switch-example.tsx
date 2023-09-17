import React from 'react';

import { UiSwitch } from '../../src';

export const SwitchExample: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  const onChangeCB = React.useCallback(() => {
    setChecked(!checked);
  }, [checked, setChecked]);

  return (
    <>
      <UiSwitch checked={checked} onChange={onChangeCB} name="switch-example" />
      <p>Checked: {`${checked}`}</p>
    </>
  );
};
