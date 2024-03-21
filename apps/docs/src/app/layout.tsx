import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { ViewWrapper } from "@/lib/page-wrapper";
import { StyledComponentsRegistry } from "@/lib/styled-components-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@UiReact",
  description: "Themed UI React library of components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ViewWrapper>
            {children}
          </ViewWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
