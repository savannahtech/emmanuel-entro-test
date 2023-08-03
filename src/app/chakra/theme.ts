import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontFamily: "Inter, sans-serif",
      },
    },
  },
  colors: {
    laminar: {
      gray: {
        1000: "#101828",
        900: "#1D2939",
        700: "#475467",
        600: "#667085",
        500: "#98A2B3",
        200: "#DFE3EB",
        100: "#F0F2F7",
        50: "#F7F9FC",
      },
    },
    tag: {
      sapphire: {
        blue: {
          1000: "#0F52BA",
          400: "#99B4DD",
          100: "#DEE5F0",
        },
      },
    },
  },
  shadows: {
    card_row: "0px 4px 6px -2px #10182808",
    card_row2: "0px 12px 16px -4px #10182814",
    card_row3: "0px 24px 32px -8px #1018281A",
  },
  space: {
    sm: "8px",
    md: "50px",
    lg: "130px",
    xl: "120px",
    "2xl": "160px",
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  fontSizes: {
    14: "14px",
    16: "16px",
  },
  lineHeights: {
    18: "18px",
    20: "20px",
  },
});

export default theme;
