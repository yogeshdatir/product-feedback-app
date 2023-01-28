import styled from "@emotion/styled";
import { mq, TypographyStyles } from "../utils/themes";
import { ITheme, IColors } from "../utils/types";
import Badge from "./Badge";

export const ActionHeader = styled.div(
  {
    display: "flex",
    justifyContent: "space-between",
  },
  mq({
    margin: ["1.5rem 1rem", "1.5rem 1rem", 0],
  })
);

interface IStatusDot {
  theme: ITheme;
  name: string;
}

export const StatusDot = styled.div(({ theme, name }: IStatusDot) => ({
  borderRadius: "50%",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: theme.colors[name as keyof IColors],
}));

// TODO: remove all typography elements and use shared css
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

interface IStyledButton {
  theme: ITheme;
  isLight: boolean;
}

export const StyledButton = styled.button(
  ({ theme: { colors, typography }, isLight }: IStyledButton) => ({
    fontWeight: typography.fontWeight.bold,
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
  }),
  TypographyStyles.h4
);
