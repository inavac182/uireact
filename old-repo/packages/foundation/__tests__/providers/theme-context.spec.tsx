import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeContext } from '../../src/providers';
import { DefaultTheme, ThemeColor } from '../../src';

const MockedComponent = () => {
  const themeContext = React.useContext(ThemeContext);

  return <p>{themeContext.selectedTheme}</p>;
};

const MockedParentComponent = () => {
  const [selectedTheme, setTheme] = React.useState(ThemeColor.light);
  const toogleTheme = () => {
    setTheme(selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light);
  };

  return (
    <ThemeContext.Provider value={{ theme: DefaultTheme, selectedTheme: selectedTheme }}>
      <MockedComponent />
      <button onClick={toogleTheme}>Toogle</button>
    </ThemeContext.Provider>
  );
};

test('Should set a selected theme', () => {
  render(<MockedParentComponent />);

  expect(screen.getByText('light')).toBeVisible();
});

test('Should trigger a theme change using the context provider', () => {
  render(<MockedParentComponent />);

  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByText('dark')).toBeVisible();
});
