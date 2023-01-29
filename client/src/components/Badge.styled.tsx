import styled from "@emotion/styled";
import { TypographyStyles } from "../utils/themes";

// TODO: remove any type
export const Container = styled.span(
  ({ theme: { pallette, typography }, isActive }: any) => ({
    fontWeight: typography.fontWeight.semiBold,
    color: isActive ? pallette.common.white : pallette.info.main,
    background: isActive ? pallette.info.main : pallette.grey.main,
    padding: "5px 1rem",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    width: "max-content",
    textTransform: "capitalize",
    cursor: "pointer",

    ":hover": {
      background: isActive ? pallette.info.main : pallette.grey.dark,
    },
  }),
  TypographyStyles.body3
);
