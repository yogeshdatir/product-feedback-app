import styled from "@emotion/styled";
import { Body1Typography, H3 } from "../../components/Common.styled";
import { ITheme } from "../../utils/types";
import { FeedbackCard } from "../home/FeedbackList/FeedbackList.styled";

export const Container = styled.div``;

export const BoardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
`;

export const ListHeader = styled.div`
  padding-bottom: 1rem;
`;

export const ListTitle = styled(H3)(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    color: colors.americanBlue,
    textTransform: "capitalize",
    paddingBottom: "0.25rem",
  })
);

export const ListDescription = styled(Body1Typography)(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    color: colors.darkBlueGray,
  })
);

export const BoardFeedbackCardWrapper = styled.div(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    padding: "1rem 0",
  })
);

export const BoardFeedbackCard = styled(FeedbackCard)(
  ({ theme: { colors, typography }, statusName }: any) => ({
    padding: "2rem",
    borderRadius: "5px",
    borderTop: `6px solid ${colors[statusName]}`,
  })
);

// TODO: reuse Body1Typography
export const FeedbackCardHeader = styled.div(
  ({ theme: { colors, typography } }: { theme: ITheme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    textTransform: "capitalize",
    paddingBottom: "0.5rem",

    fontWeight: typography.fontWeight.regular,
    fontSize: typography.body1.fontSize,
    lineHeight: typography.body1.lineHeight,
    color: colors.darkBlueGray,
  })
);

export const ListWrapper = styled.div`
  width: 100%;
`;
