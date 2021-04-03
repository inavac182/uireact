import React from 'react';
import { Playground, PlaygroundProps } from 'docz';
import { ThemeProvider } from 'styled-components';

import themeIcon from './icons/sun-icon.png';

const CustomPlayground = (props: PlaygroundProps): React.ReactNode => {
  const [theme, setTheme] = React.useState('dark');

  const changeTheme = React.useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeProvider theme={{ main: theme }}>
      <div style={{ background: 'rebeccapurple', padding: 12 }}>
        <button onClick={changeTheme}>
          <img src={themeIcon} width="20px" />
        </button>
        <Playground {...props} />
      </div>
    </ThemeProvider>
  );
};

export default CustomPlayground;
