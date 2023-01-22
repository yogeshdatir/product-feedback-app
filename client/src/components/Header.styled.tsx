import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { H1, H3 } from "./Common.styled";
import { ITheme } from "../utils/types";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1.75rem 2rem;

  background: #373f68;
  border-radius: 10px;
  padding: 1rem;
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

// TODO: reuse Body1Typography
export const AddFeedbackButton = styled(Link)(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    padding: "0.75rem 1.5rem",
    borderRadius: "10px",
    background: colors["in-progress"],

    fontSize: typography.h4.fontSize,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.h4.lineHeight,
    color: colors.aliceBlue,

    ":hover": {
      background: colors.heliotrope,
    },
  })
);

export const RoadmapTitle = styled(H1)(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    color: colors.white,
    paddingTop: "0.25rem",
  })
);
