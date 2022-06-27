import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeContext } from '../../src/providers';
import { Themes } from '../../src/themes';
import { Theme } from '../../src';

const MockedComponent = () => {
  const themeContext = React.useContext(ThemeContext);

  return <p>{themeContext.theme.name}</p>;
};

interface MockedParentComponent {
  defaultTheme?: Theme;
}

const MockedParentComponent = ({ defaultTheme }: MockedParentComponent) => {
  const [theme, setTheme] = React.useState(defaultTheme || Themes.dark);
  const toogleTheme = () => {
    setTheme(theme.name === Themes.dark.name ? Themes.light : Themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <MockedComponent />
      <button onClick={toogleTheme}>Toogle</button>
    </ThemeContext.Provider>
  );
};

test('Should set dark theme by default', () => {
  render(<MockedParentComponent />);

  expect(screen.getByText(Themes.dark.name)).toBeVisible();
});

test('Should toogle theme to light', () => {
  render(<MockedParentComponent />);

  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByText(Themes.light.name)).toBeVisible();
});
