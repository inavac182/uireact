import React, { useState } from 'react';
import { Playground, PlaygroundProps } from 'docz';

import { ThemeContext, Themes } from '../packages/foundation/src/';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import themeIcon from './icons/sun-icon.png';

const CustomPlayground = (props: PlaygroundProps): React.ReactNode => {
  const [theme, setTheme] = useState(Themes.dark);
  const toogleTheme = () => {
    setTheme(theme.name === Themes.dark.name ? Themes.light : Themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div style={{ background: 'rebeccapurple', padding: 12 }}>
        <button onClick={toogleTheme}>
          <img src={themeIcon} width="20px" />
        </button>
        <Playground {...props} />
      </div>
    </ThemeContext.Provider>
  );
};

export default CustomPlayground;
