import styled from "@emotion/styled";
import { TypographyStyles } from "../utils/themes";

// TODO: remove any type, colors property
export const Container = styled.span(
  ({ theme: { colors, typography }, isActive }: any) => ({
    fontWeight: typography.fontWeight.semiBold,
    color: isActive ? colors.white : colors.royalBlue,
    background: isActive ? colors.royalBlue : colors.aliceBlue,
    padding: "5px 1rem",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    width: "max-content",
    textTransform: "capitalize",
    cursor: "pointer",

    ":hover": {
      background: isActive ? colors.royalBlue : colors.lavenderBlue,
    },
  }),
  TypographyStyles.body3
);
