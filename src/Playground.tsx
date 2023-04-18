import React from 'react';
import { Playground, PlaygroundProps } from 'docz';

import { ThemeContext, DefaultTheme, ThemeColor } from '@uireact/foundation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import themeIcon from './icons/sun-icon.png';

type CustomPlaygroundProps = {
  hideThemeSelector: boolean;
} & PlaygroundProps;

const CustomPlayground = (props: CustomPlaygroundProps): React.ReactNode => {
  const [selectedTheme, setTheme] = React.useState<ThemeColor>(ThemeColor.light);
  const toogleTheme = () => {
    setTheme(selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light);
  };

  return (
    <ThemeContext.Provider value={{ theme: DefaultTheme, selectedTheme: selectedTheme }}>
      <div style={{ background: 'rebeccapurple', padding: 12 }}>
        {!props.hideThemeSelector && (
          <>
            <button onClick={toogleTheme} style={{ marginInlineEnd: '5px' }}>
              <img src={themeIcon} width="20px" />
            </button>
            <p style={{ margin: 0, display: 'inline-block' }}>Theme: {selectedTheme}</p>
          </>
        )}

        <Playground {...props} />
      </div>
    </ThemeContext.Provider>
  );
};

export default CustomPlayground;
