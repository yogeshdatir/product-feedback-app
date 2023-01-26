import { IThemes, ITypography } from "./types";
import facepaint from "facepaint";

const breakpoints = [375, 768, 1200];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);

// TODO: Find way to share common css properties
const Typography: ITypography = {
  fontFamily: "Jost, Raleway, Arial",
  fontWeight: {
    bold: 700,
    semiBold: 600,
    regular: 500,
  },
  h1: {
    fontSize: "24px",
    lineHeight: "35px",
    letterSpacing: "-0.33px",
  },
  h2: {
    fontSize: "20px",
    lineHeight: "29px",
    letterSpacing: "-0.25px",
  },
  h3: {
    fontSize: "18px",
    lineHeight: "26px",
    letterSpacing: "-0.25px",
  },
  h4: {
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "-0.194444px",
  },
  body1: { fontSize: "16px", lineHeight: "23px" },
  body2: { fontSize: "15px", lineHeight: "22px" },
  body3: { fontSize: "13px", lineHeight: "19px" },
};

export const themes: IThemes = {
  light: {
    colors: {
      "in-progress": "#AD1FEA",
      heliotrope: "#C75AF6",
      royalBlue: "#4661E6",
      royalBlueHovered: "#7C91F9",
      americanBlue: "#373F68",
      white: "#FFFFFF",
      aliceBlue: "#F2F4FF",
      ghostWhite: "#F7F8FD",
      darkBlueGray: "#647196",
      planned: "#F49F85",
      live: "#62BCFA",
      lavenderBlue: "#CFD7FF",
      lightCobaltBlue: "#8397F8",
    },
    pallette: {
      common: {
        black: "#000",
        white: "#fff",
      },
      primary: { main: "#AD1FEA", light: "#C75AF6" },
      secondary: { main: "#3A4374", light: "#656EA3", dark: "#373F68" },
      error: { main: "#D73737", light: "#E98888" },
      info: { main: "#4661E6", light: "#7C91F9" },
      grey: { main: "#F2F4FF", light: "#F7F8FD", dark: "#CFD7FF" },
      text: {
        main: "#3A4374",
        light: "#647196",
        dark: "#AD1FEA",
        buttonPrimary: "#F2F4FE",
        black: "#000",
        white: "#fff",
      },
      status: {
        planned: "#F49F85",
        "in-progress": "#AD1FEA",
        live: "#62BCFA",
      },
    },
    typography: { ...Typography },
  },
};
