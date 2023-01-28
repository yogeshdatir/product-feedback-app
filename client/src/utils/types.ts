import { ReactNode } from "react";

export type IFeedback = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
};

export type IFeedbackFormState = Omit<IFeedback, "id">;

export type ICategory = {
  id: string;
  name: string;
};

export type IStatus = {
  id: string;
  name: string;
  description?: string;
};

export interface IContextProps {
  children: ReactNode;
}

export interface IThemes {
  light: ITheme;
}

export interface ITheme {
  colors: IColors;
  pallette: IPallette;
  typography: ITypography;
}

// TODO: Deprecate use of Colors property of theme
export interface IColors {
  "in-progress": string;
  heliotrope: string;
  royalBlue: string;
  royalBlueHovered: string;
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

export interface IPallette {
  common: ICommon;
  primary: IColorShades;
  secondary: IColorShades;
  error: IColorShades;
  info: IColorShades;
  grey: IColorShades;
  text: ITextColorShades;
  status: IStatusPallette;
}

export interface ICommon {
  black: string;
  white: string;
}

export interface IColorShades {
  main: string;
  light: string;
  dark?: string;
}

export interface ITextColorShades extends IColorShades {
  buttonPrimary: string;
  black: string;
  white: string;
}

export interface IStatusPallette {
  planned: string;
  "in-progress": string;
  live: string;
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
