import { IThemes, ITypography } from "./types";
import facepaint from "facepaint";
import { css } from "@emotion/react";

const breakpoints = [375, 768, 1200];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);

// TODO: Get rid of Typography
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
    fontWeight: 700,
  },
  h2: {
    fontSize: "20px",
    lineHeight: "29px",
    letterSpacing: "-0.25px",
    fontWeight: 700,
  },
  h3: {
    fontSize: "18px",
    lineHeight: "26px",
    letterSpacing: "-0.25px",
    fontWeight: 700,
  },
  h4: {
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "-0.194444px",
    fontWeight: 700,
  },
  body1: { fontSize: "16px", lineHeight: "23px", fontWeight: 500 },
  body2: { fontSize: "15px", lineHeight: "22px", fontWeight: 500 },
  body3: { fontSize: "13px", lineHeight: "19px", fontWeight: 500 },
};

export const themes: IThemes = {
  light: {
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

export const TypographyStyles = {
  h1: css({
    fontSize: "24px",
    lineHeight: "35px",
    letterSpacing: "-0.33px",
    fontWeight: 700,
  }),
  h2: css({
    fontSize: "20px",
    lineHeight: "29px",
    letterSpacing: "-0.25px",
    fontWeight: 700,
  }),
  h3: css({
    fontSize: "18px",
    lineHeight: "26px",
    letterSpacing: "-0.25px",
    fontWeight: 700,
  }),
  h4: css({
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "-0.194444px",
    fontWeight: 700,
  }),
  body1: css({ fontSize: "16px", lineHeight: "23px", fontWeight: 500 }),
  body2: css({ fontSize: "15px", lineHeight: "22px", fontWeight: 500 }),
  body3: css({ fontSize: "13px", lineHeight: "19px", fontWeight: 500 }),
};
