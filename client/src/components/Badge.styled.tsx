import styled from "@emotion/styled";

// TODO: reuse Body3Typography
export const Container = styled.span(
  ({ theme: { colors, typography }, isActive }: any) => ({
    fontWeight: typography.fontWeight.semiBold,
    fontSize: typography.body3.fontSize,
    lineHeight: typography.body3.lineHeight,
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
  })
);
