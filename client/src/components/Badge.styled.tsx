import styled from "@emotion/styled";
import { TypographyStyles } from "../utils/themes";
import { ITheme } from "../utils/types";

type IContainer = {
  theme?: ITheme;
  as?: React.ElementType<any> | undefined;
} & React.ClassAttributes<HTMLSpanElement> &
  React.HTMLAttributes<HTMLSpanElement> & {
    isActive: boolean;
  };

export const Container = styled.span(
  TypographyStyles.body3,
  ({ theme, isActive }: IContainer) => ({
    fontWeight: theme?.typography.fontWeight.semiBold,
    color: isActive ? theme?.pallette.common.white : theme?.pallette.info.main,
    background: isActive
      ? theme?.pallette.info.main
      : theme?.pallette.grey.main,
    padding: "5px 1rem",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    width: "max-content",
    textTransform: "capitalize",
    cursor: "pointer",

    ":hover": {
      background: isActive
        ? theme?.pallette.info.main
        : theme?.pallette.grey.dark,
    },
  })
);
