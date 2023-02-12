import styled from "@emotion/styled";
import { type ITheme } from "../utils/types";
import { mq, TypographyStyles } from "../utils/themes";

interface IHeaderWrapper {
  isRoadmapPage?: boolean;
}

export const Wrapper = styled.div(
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    width: "100%",
    background: pallette.secondary.dark,
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
  TypographyStyles.h3,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    padding: "0 1rem",
    color: pallette.common.white,
  })
);

export const RoadmapTitle = styled("h1")(
  TypographyStyles.h1,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.common.white,
    paddingTop: "0.25rem",
  })
);
