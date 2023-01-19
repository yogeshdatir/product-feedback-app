import { IThemes, ITypography } from "./types";

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
    typography: { ...Typography },
  },
};
