import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
  Container,
  AppShell,
  Box,
} from "@mantine/core";
import { theme } from "../theme";
import Header from "../components/Header";
import '../globals.css'
import { Footer, FOOTER_HEIGHT } from "../components/Footer";
import { ScreenSizeProvider } from "../components/ScreenSizeContext";

export const metadata = {
  title: "Brandon Jia",
  description: "Brandon Jia's personal website",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        {/* <link rel="shortcut icon" href="/favicon.svg" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{ backgroundColor: theme.colors?.backgroundColor ? theme.colors.backgroundColor[0] : '#F1F1F1' }}>
        <MantineProvider theme={theme}>
          <ScreenSizeProvider>
            <Header />

            {/* MAIN CONTENT – sits above footer and hides it */}
            <Box
              component="main"
              bg="backgroundColor"
              h="100%"
              mih="100vh"
              // must be positioned to use z-index
              style={{
                position: 'relative',
                zIndex: 10, // above footer
              }}>
              <Container size="xl" p="0rem 2rem">
                {children}
              </Container>
            </Box>
            {/* TRANSPARENT SPACER — reveals footer & passes clicks through */}
            <div
              aria-hidden
              style={{
                height: FOOTER_HEIGHT,   // creates scroll room to expose footer
                pointerEvents: 'none',   // lets clicks hit the footer
                zIndex: 0,
              }}
            />
            <Footer />
          </ScreenSizeProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
