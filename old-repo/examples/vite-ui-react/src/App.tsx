import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';
import { UiButton } from '@uireact/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + uireact</h1>
        <div className="card">
          <UiButton theme="negative" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </UiButton>
        </div>
      </UiView>
    </>
  );
}

export default App;
