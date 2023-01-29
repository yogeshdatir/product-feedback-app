import styled from "@emotion/styled";
import React, { CSSProperties, ReactNode } from "react";
import { mq, TypographyStyles } from "../utils/themes";
import { IPallette, ITextColorShades, ITheme } from "../utils/types";

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

// TODO: reuse body3, h4 Typography
interface IStyledButton {
  theme: ITheme;
  backgroundColor?: keyof Omit<IPallette, "common" | "status">;
  color?: keyof ITextColorShades;
}

// TODO: remove any type
export const StyledButton = styled.button(
  ({ theme: { typography, pallette }, backgroundColor, color }: any) => ({
    padding: "0.75rem 1.5rem",
    borderRadius: "10px",
    backgroundColor: backgroundColor
      ? pallette[backgroundColor].main
      : "transparent",
    border: "none",
    cursor: "pointer",

    fontWeight: typography.fontWeight.bold,
    color: color ? pallette.text[color] : "",

    ":hover": {
      backgroundColor: backgroundColor
        ? pallette[backgroundColor].light
        : "transparent",
    },
  }),
  TypographyStyles.h4,
  ({ theme: { typography } }: Pick<IStyledButton, "theme">) =>
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
