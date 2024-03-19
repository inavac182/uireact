import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { useColorMode } from 'theme-ui';
import { createGlobalStyle } from 'styled-components';

import { ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';

import { DocsTheme } from './custom-theme';

type WrapperProps = {
  children?: React.ReactElement;
};

const GlobalStyles = createGlobalStyle`
  h2, h3, h4 {
    padding-top: 20px;
    padding-bottom: 15px;
  }

  p {
    font-size: 20px;
  }
`;

export const MenuContext = React.createContext<{
  isMenuVisible: boolean;
  setMenuVisible: (value: boolean) => void;
} | null>(null);

const Wrapper = ({ children }: WrapperProps): React.ReactElement => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [colorMode] = useColorMode();
  const [selectedTheme, setSelectedTheme] = useState<ThemeColor>(ThemeColor.dark);

  useEffect(() => {
    setSelectedTheme(colorMode === 'light' ? ThemeColor.light : ThemeColor.dark);
  }, [colorMode]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>@UiReact JS library</title>
        <meta
          name="description"
          content="@UiReact, is a React JS library of components using CSS-in-JS that can use a custom theme to speed up web development."
        />
        <meta
          name="keywords"
          content="ReactJS, React, UiReact, ui react, react library, js library, React theme, themed react library, themes react, react library, react components"
        />
        <link rel="icon" type="image/png" href="/public/sunglasses_cat.gif" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <UiView theme={DocsTheme} selectedTheme={selectedTheme}>
        <MenuContext.Provider value={{ isMenuVisible: isMenuVisible, setMenuVisible }}>
          <div className={isMenuVisible ? 'menu-visible' : ''}>{children}</div>
        </MenuContext.Provider>
      </UiView>
    </React.Fragment>
  );
};

export default Wrapper;
