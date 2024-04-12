import type { Metadata } from "next";

import { ViewWrapper } from "@/lib/page-wrapper";
import { StyledComponentsRegistry } from "@/lib/styled-components-registry";
import {DocsThemeProvider  } from '@/app/providers';

import styles from './global.module.scss';

export const metadata: Metadata = {
  title: "@UiReact | Themed UI Library",
  description: "Themed UI React library of components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.globalStyles}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400;500;600;700;800&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <DocsThemeProvider>
            <ViewWrapper>
              {children}
            </ViewWrapper>
          </DocsThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
