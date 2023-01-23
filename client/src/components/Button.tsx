import styled from "@emotion/styled";
import React, { CSSProperties, ReactNode } from "react";
import {
  IColorShades,
  ICommon,
  ITextColorShades,
  ITheme,
} from "../utils/types";

type TCustomHTMLButtonAttributes = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "color" | "backgroundColor"
>;

interface Props extends TCustomHTMLButtonAttributes, IButtonColors {
  style?: CSSProperties;
  children?: ReactNode;
}

// TODO: reuse Body1Typography
export const StyledButton = styled.button(
  ({ theme: { typography, pallette }, backgroundColor, color }: any) => ({
    padding: "0.75rem 1.5rem",
    borderRadius: "10px",
    backgroundColor: backgroundColor
      ? pallette[backgroundColor].main
      : "transparent",
    border: "none",
    cursor: "pointer",

    fontSize: typography.h4.fontSize,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.h4.lineHeight,
    color: color ? pallette.text[color] : "",

    ":hover": {
      backgroundColor: backgroundColor
        ? pallette[backgroundColor].light
        : "transparent",
    },
  })
);

export interface IButtonColors {
  backgroundColor?: "primary" | "secondary" | "error" | "info";
  color?: keyof ITextColorShades;
}

const Button = ({ style = {}, children, ...buttonAttributes }: Props) => {
  return (
    <StyledButton style={style} {...buttonAttributes}>
      {children}
    </StyledButton>
  );
};
export default Button;
