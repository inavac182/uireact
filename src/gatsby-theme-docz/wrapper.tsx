import React from 'react';

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
  h2 {
    padding-top: 20px;
    padding-bottom: 15px;
  }
`;

const Wrapper = ({ children }: WrapperProps): React.ReactElement => {
  const [colorMode] = useColorMode();

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
        <link rel="icon" type="image/png" href="/public/favicon.ico" />
      </Helmet>
      <GlobalStyles />
      <UiView theme={DocsTheme} selectedTheme={colorMode === 'light' ? ThemeColor.light : ThemeColor.dark}>
        {children}
      </UiView>
    </React.Fragment>
  );
};

export default Wrapper;
