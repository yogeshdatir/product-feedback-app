import { type ReactNode } from "react";

export interface IFeedback {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  upvotes: number;
  commentsCount: number;
  repliesCount: number;
}

export type IFeedbackFormState = Omit<IFeedback, "id">;

export interface ICategory {
  id: string;
  name: string;
}

export interface IStatus {
  id: string;
  name: string;
  description?: string;
}

export interface IContextProps {
  children: ReactNode;
}

export interface IThemes {
  light: ITheme;
}

export interface ITheme {
  pallette: IPallette;
  typography: ITypography;
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
  fontWeight: number;
}

export type IBodyFontStyle = Omit<IHeaderFontStyle, "letterSpacing">;

export type IComment = {
  id: string;
  content: string;
  authorName: string;
  authorUsername: string;
  authorImage: string;
  replies?: IReply[];
};

export type IReply = {
  id: string;
  content: string;
  parentComment: string;
  replyingTo: string;
  user: string;
  authorName: string;
  authorUsername: string;
  authorImage: string;
  replyingToName: string;
  replyingToUsername: string;
  replyingToImage: string;
};

export type ICommentFormState = {
  content: string;
  user: string;
  parentFeedback: IFeedback["id"];
};
