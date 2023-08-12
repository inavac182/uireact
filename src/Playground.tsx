import React from 'react';
import { Playground, PlaygroundProps } from 'docz';

type CustomPlaygroundProps = {
  hideThemeSelector: boolean;
  simplePlayground?: boolean;
} & PlaygroundProps;

const CustomPlayground = (props: CustomPlaygroundProps): React.ReactNode => {
  return <Playground {...props} />;
};

export default CustomPlayground;
