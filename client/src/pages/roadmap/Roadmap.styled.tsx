import styled from "@emotion/styled";
import { ViewBadge } from "../../components/Common.styled";
import { mq, TypographyStyles } from "../../utils/themes";
import { type ITheme } from "../../utils/types";
import {
  StyledFeedbackCard,
  FeedbackDescription,
} from "../home/FeedbackList/FeedbackList.styled";

export const Container = styled.div``;

export const BoardContainer = styled.div(
  {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  mq({
    gap: ["10px", "10px", "10px", "2rem"],
    padding: ["1.5rem", "1.5rem", "2rem 0"],
  })
);

export const ListHeader = styled.div`
  padding-bottom: 1rem;
`;

export const ListTitle = styled("h3")(
  TypographyStyles.h3,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.secondary.dark,
    textTransform: "capitalize",
    paddingBottom: "0.25rem",
  })
);

export const ListDescription = styled("p")(
  TypographyStyles.body1,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.text.light,
  })
);

export const BoardFeedbackCardWrapper = styled.div(
  {
    padding: "1rem 0",
  },
  mq({
    padding: ["0.5rem 0", "0.5rem 0", "0.5rem 0", "1rem 0"],
  })
);

export const BoardFeedbackCard = styled(StyledFeedbackCard)(
  ({ theme: { pallette }, statusName }: any) => ({
    padding: "2rem",
    borderRadius: "5px",
    borderTop: `6px solid ${pallette[statusName]}`,
    flexDirection: "column",
    gap: 0,
  }),
  mq({
    padding: ["1.5rem 1.25rem", "1.5rem 1.25rem", "1.5rem 1.25rem", "2rem"],
  })
);

export const FeedbackCardHeader = styled.div(
  TypographyStyles.body1,
  ({ theme: { pallette, typography } }: { theme: ITheme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    textTransform: "capitalize",
    paddingBottom: "0.5rem",

    fontWeight: typography.fontWeight.regular,
    color: pallette.text.light,
  }),
  mq({
    paddingBottom: ["1rem", "1rem", "1rem", "0.5rem"],
  })
);

export const RoadmapFeedbackCardDescription = styled(FeedbackDescription)(
  mq({
    marginTop: ["0.75rem", "0.75rem", "0.75rem", "0.25rem"],
  })
);

export const RoadmapViewBadge = styled(ViewBadge)(
  mq({
    marginTop: ["1.5rem", "1.5rem", "1.5rem", "0.75rem"],
  })
);

export const ListWrapper = styled.div`
  width: 100%;
`;
