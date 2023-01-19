import { ReactNode } from "react";

export type IFeedback = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
};

export type INewFeedback = Omit<IFeedback, "id">;

export type ICategory = {
  id: string;
  name: string;
};

export type IStatus = {
  id: string;
  name: string;
};

export interface IContextProps {
  children: ReactNode;
}

export interface IThemes {
  light: ITheme;
}

export interface ITheme {
  colors: IColors;
  typography: ITypography;
}

export interface IColors {
  "in-progress": string;
  heliotrope: string;
  royalBlue: string;
  americanBlue: string;
  white: string;
  aliceBlue: string;
  ghostWhite: string;
  darkBlueGray: string;
  planned: string;
  live: string;
  lavenderBlue: string;
  lightCobaltBlue: string;
}

export interface ITypography {
  fontFamily: string;
  fontWeight: IFontWeight;
  h1: IHeaderFontStyle;
  h2: IHeaderFontStyle;
  h3: IHeaderFontStyle;
  h4: IHeaderFontStyle;
  body1: IBodyFontStyle;
  body2: IBodyFontStyle;
  body3: IBodyFontStyle;
}

export interface IFontWeight {
  bold: number;
  semiBold: number;
  regular: number;
}

export interface IHeaderFontStyle {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

export type IBodyFontStyle = Omit<IHeaderFontStyle, "letterSpacing">;
