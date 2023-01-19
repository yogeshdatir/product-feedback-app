import styled from "@emotion/styled";
import { ITheme } from "../../../utils/types";

export const Container = styled.div`
  padding: 7rem 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    padding-bottom: 3.25rem;
  }
`;

export const EmptyStateTitle = styled.h1(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    color: colors.americanBlue,
    fontSize: typography.h1.fontSize,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.h1.lineHeight,
    letterSpacing: typography.h1.letterSpacing,
    textAlign: "center",
  })
);

export const EmptyStateContent = styled.p(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    color: colors.darkBlueGray,
    fontSize: typography.body1.fontSize,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.body1.lineHeight,
    textAlign: "center",

    padding: "1rem 0 4rem 0",
  })
);
