import styled from "@emotion/styled";
import { ITheme } from "../utils/types";
import Badge from "./Badge";

export const ActionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StatusDot = styled.div<any>`
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({ theme, name }) => theme.colors[name]};
`;

export const H1 = styled.h1(({ theme: { typography } }: { theme: ITheme }) => ({
  fontSize: typography.h1.fontSize,
  fontWeight: typography.fontWeight.bold,
  lineHeight: typography.h1.lineHeight,
  letterSpacing: typography.h1.letterSpacing,
}));

export const H2 = styled.h2(({ theme: { typography } }: { theme: ITheme }) => ({
  fontSize: typography.h2.fontSize,
  fontWeight: typography.fontWeight.bold,
  lineHeight: typography.h2.lineHeight,
  letterSpacing: typography.h2.letterSpacing,
}));

export const H3 = styled.h3(({ theme: { typography } }: { theme: ITheme }) => ({
  fontSize: typography.h3.fontSize,
  fontWeight: typography.fontWeight.bold,
  lineHeight: typography.h3.lineHeight,
  letterSpacing: typography.h3.letterSpacing,
}));

export const H4 = styled.h4(({ theme: { typography } }: { theme: ITheme }) => ({
  fontSize: typography.h4.fontSize,
  fontWeight: typography.fontWeight.bold,
  lineHeight: typography.h4.lineHeight,
  letterSpacing: typography.h4.letterSpacing,
}));

export const Body1Typography = styled.p(
  ({ theme: { typography } }: { theme: ITheme }) => ({
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.body1.fontSize,
    lineHeight: typography.body1.lineHeight,
  })
);

export const Body2Typography = styled.p(
  ({ theme: { typography } }: { theme: ITheme }) => ({
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.body2.fontSize,
    lineHeight: typography.body2.lineHeight,
  })
);

export const Body3Typography = styled.p(
  ({ theme: { typography } }: { theme: ITheme }) => ({
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.body3.fontSize,
    lineHeight: typography.body3.lineHeight,
  })
);

export const ViewBadge = styled(Badge)`
  margin-top: 0.75rem;
  pointer-events: none;
`;

export const StyledButton = styled.button(
  ({ theme: { colors, typography }, isLight }: any) => ({
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.h4.fontSize,
    lineHeight: typography.h4.lineHeight,
    color: isLight ? colors.white : colors.darkBlueGray,
    border: "none",
    background: "transparent",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    cursor: "pointer",
    svg: {
      path: {
        stroke: isLight ? colors.white : colors.royalBlue,
      },
    },

    ":hover": {
      textDecorationLine: "underline",
    },
  })
);
