import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
  Container,
} from "@mantine/core";
import { theme } from "../theme";
import Header from "../components/Header";
import '../globals.css'

export const metadata = {
  title: "Brandon Jia",
  description: "Brandon Jia's personal website",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{ backgroundColor: theme.colors?.backgroundColor ? theme.colors.backgroundColor[0] : '#F1F1F1' }}>
        <MantineProvider theme={theme}>
          <Header />
          <Container size="lg" p="0rem 2rem">

            {children}
            {/* <Footer /> */}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
