import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ITheme } from "../../utils/types";

export const Wrapper = styled.div`
  width: 100%;
  height: 4.5rem;

  background: #373f68;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 4rem;
`;

export const HeaderTitle = styled.h3(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    padding: "0 1rem",
    color: colors.white,
    fontSize: typography.h3.fontSize,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.h3.lineHeight,
    letterSpacing: typography.h3.letterSpacing,
  })
);

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
