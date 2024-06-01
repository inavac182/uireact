import type { Metadata } from "next";
import { Press_Start_2P, Sen } from 'next/font/google'

import { ViewWrapper } from "@/lib/page-wrapper";
import { StyledComponentsRegistry } from "@/lib/styled-components-registry";
import { DocsThemeProvider } from '@/app/providers';

import styles from './global.module.scss';

import './uireact-styles.css';

export const metadata: Metadata = {
  title: "@UiReact | Themed UI Library",
  description: "Themed UI React library of components",
  keywords: 'uireact, react, js, nodejs, react js, themed components, react components, react library, ui react library, dark theme react ui library, light theme react ui library '
};

const sen = Sen({ subsets: ['latin'], variable: '--font-family' });

const pressStart = Press_Start_2P({ variable: '--press-start-font-family', style: 'normal', weight: '400', subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.globalStyles}>
      <head />
      <body className={`${sen.variable} ${pressStart.variable}`}>
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
