import styled from "@emotion/styled";
import { mq, TypographyStyles } from "../utils/themes";
import { ITheme, IPallette } from "../utils/types";
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

export const StatusDot = styled.div(({ theme, name }: any) => ({
  borderRadius: "50%",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: theme.pallette.status[name as keyof IPallette],
}));

export const ViewBadge = styled(Badge)`
  margin-top: 0.75rem;
  pointer-events: none;
`;

interface IStyledButton {
  theme: ITheme;
  isLight: boolean;
}

export const StyledButton = styled.button(
  ({ theme: { pallette, typography }, isLight }: IStyledButton) => ({
    fontWeight: typography.fontWeight.bold,
    color: isLight ? pallette.common.white : pallette.text.light,
    border: "none",
    background: "transparent",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    cursor: "pointer",
    svg: {
      path: {
        stroke: isLight ? pallette.common.white : pallette.info.main,
      },
    },

    ":hover": {
      textDecorationLine: "underline",
    },
  }),
  TypographyStyles.h4
);
