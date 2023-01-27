import styled from "@emotion/styled";
import React, { CSSProperties, ReactNode } from "react";
import { mq } from "../utils/themes";
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
  }),
  ({ theme: { typography } }: any) =>
    mq({
      padding: [
        "0.7rem 1rem",
        "0.7rem 1rem",
        "0.75rem 1.5rem",
        "0.75rem 1.5rem",
      ],
      fontSize: [typography.body3.fontSize, typography.h4.fontSize],
      lineHeight: [typography.body3.lineHeight, typography.h4.lineHeight],
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
