'use client';

import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },

  primaryColor: 'darkColor',

  colors: {
    // 'primaryColor': [ // The teal color
    //   "#e0fffd",
    //   "#cffaf6",
    //   "#a5f2ea",
    //   "#77eade",
    //   "#52e3d4",
    //   "#38dfce",
    //   "#24ddcb",
    //   "#06c4b3",
    //   "#00ae9f",
    //   "#009789"
    // ],
    // actionColor: ["#33B2A6", "#33B2A6", "#33B2A6", "#33B2A6", "#33B2A6", "#33B2A6", "#33B2A6", "#33B2A6", "#33B2A6", "#33B2A6", "#33B2A6"],
    darkColor: [
      "#4D4D4D",
      "#4D4D4D",
      "#4D4D4D",
      "#4D4D4D",
      "#4D4D4D",
      "#4D4D4D",
      "#4D4D4D",
      "#4D4D4D",
      "#4D4D4D",
      "#4D4D4D"
    ],
    lightColor: [
      "#E4E4E4", // light color
      "#E4E4E4",
      "#E4E4E4",
      "#E4E4E4",
      "#E4E4E4",
      "#E4E4E4",
      "#E4E4E4",
      "#E4E4E4",
      "#E4E4E4",
      "#E4E4E4"
    ],
    lightestColor: [
      "#F5F5F5", // lightest color
      "#F5F5F5",
      "#F5F5F5",
      "#F5F5F5",
      "#F5F5F5",
      "#F5F5F5",
      "#F5F5F5",
      "#F5F5F5",
      "#F5F5F5",
      "#F5F5F5",
      "#F5F5F5",
      "#F5F5F5"
    ],
    darkestColor: [
      "#1C1C1C",
      "#1C1C1C",
      "#1C1C1C",
      "#1C1C1C",
      "#1C1C1C",
      "#1C1C1C",
      "#1C1C1C",
      "#1C1C1C",
      "#1C1C1C",
      "#1C1C1C"
    ],
    backgroundColor: [
      "#F1F1F1", // medium color
      "#F1F1F1",
      "#F1F1F1",
      "#F1F1F1",
      "#F1F1F1",
      "#F1F1F1",
      "#F1F1F1",
      "#F1F1F1",
      "#F1F1F1",
      "#F1F1F1",
    ]

  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  fontSizes: {
    xs: "14px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "30px",
    xxl: "36px"
  },

  fontFamily: 'Open Sans, sans-serif',

  // headings: {
  //   fontFamily: 'Optimus Princeps, serif',
  //   sizes: {
  //     h1: { fontSize: rem(36) },
  //   },
  // },
});
