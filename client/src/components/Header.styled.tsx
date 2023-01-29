import styled from "@emotion/styled";
import { ITheme } from "../utils/types";
import { mq, TypographyStyles } from "../utils/themes";

interface IHeaderWrapper {
  isRoadmapPage?: boolean;
}

export const Wrapper = styled.div(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    width: "100%",
    background: colors.americanBlue,
    display: "flex",
    alignItems: "center",
  }),
  ({ isRoadmapPage }: IHeaderWrapper) =>
    mq({
      borderRadius: [0, 0, "10px"],
      padding: isRoadmapPage ? ["1.5rem", "1.75rem 2rem"] : ["1rem"],
      marginTop: isRoadmapPage ? [0] : ["83px", "83px", 0],
    })
);

export const HeaderTitle = styled("h3")(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    padding: "0 1rem",
    color: colors.white,
  }),
  TypographyStyles.h3
);

export const RoadmapTitle = styled("h1")(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    color: colors.white,
    paddingTop: "0.25rem",
  }),
  TypographyStyles.h1
);
