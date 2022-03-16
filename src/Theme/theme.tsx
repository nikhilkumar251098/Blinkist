import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    textColors?: PaletteOptions["textColors"];
  }

  interface PaletteOptions {
    textColors?: {
      bookContent?: string;
      highEmphasis?: string;
      mediumEmphasis?: string;
      placeholder?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#2CE080",
      "100": "#E9FAF1",
      "300": "#2CE080",
      "500": "#22C870",
      "700": "#20BA68",
    },
    secondary: {
      main: "#DFE8F6",
      "100": "#DFE8F6",
      "500": "#0365F2",
    },
    grey: {
      "100": "#BAC9CF",
      "300": "#6C787F",
      "500": "#3A4649",
      "700": "#042330",
    },
    textColors: {
      bookContent: "#042330",
      highEmphasis: "#03314B",
      mediumEmphasis: "#6D787E",
      placeholder: "#747575",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F1F6F4",
    },
  },
  typography: {
    h1: {
      fontSize: "36px",
      lineHeight: "45px",
      fontWeight: "700",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "700",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "400",
    },
    h2: {
      fontSize: "22px",
      lineHeight: "20px",
      fontWeight: "400",
      letterSpacing: "0.5px",
    },
    subtitle1: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "500",
    },
    subtitle2: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "700",
    },
    h3: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "400",
    },
    caption: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: "400",
    },
    h4: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: "700",
    },
    fontFamily: "CeraPro",
  },
});

export default theme;
