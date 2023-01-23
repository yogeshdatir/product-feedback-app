import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { H1, H3 } from "./Common.styled";
import { ITheme } from "../utils/types";

export const Wrapper = styled.div<{ isRoadmapPage?: boolean }>`
  width: 100%;
  padding: ${({ isRoadmapPage }) => (isRoadmapPage ? "1.75rem 2rem" : "1rem")};

  background: #373f68;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 4rem;
`;

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
