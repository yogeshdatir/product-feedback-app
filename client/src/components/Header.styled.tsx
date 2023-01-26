import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { H1, H3 } from "./Common.styled";
import { ITheme } from "../utils/types";
import { mq } from "../utils/themes";

export const Wrapper = styled.div(
  ({ theme: { colors }, isRoadmapPage }: any) => ({
    width: "100%",
    padding: isRoadmapPage ? "1.75rem 2rem" : "1rem",
    background: "#373f68",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
  })
);

export const HeaderTitle = styled(H3)(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    padding: "0 1rem",
    color: colors.white,
  })
);

export const RoadmapTitle = styled(H1)(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    color: colors.white,
    paddingTop: "0.25rem",
  })
);
