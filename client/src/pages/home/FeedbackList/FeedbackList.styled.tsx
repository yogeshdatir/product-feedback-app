import styled from "@emotion/styled";
import { mq, TypographyStyles } from "../../../utils/themes";
import { type ITheme } from "../../../utils/types";

export const ContentWrapper = styled.div(
  {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  mq({
    margin: ["0 1rem", "0 1rem", "0"],
  })
);

export const StyledFeedbackCard = styled.div(
  ({ theme: { pallette }, isForView }: any) => ({
    display: "flex",
    gap: "2.5rem",
    background: pallette.common.white,
    borderRadius: "10px",
    color: pallette.secondary.dark,
    cursor: isForView ? "auto" : "pointer",

    ":hover": {
      ".feedback-title": {
        color: isForView ? pallette.secondary.dark : pallette.info.main,
      },
    },
  }),
  mq({
    padding: ["1.5rem", "1.5rem", "28px 32px"],
  })
);

export const FeedbackTitle = styled.p(
  TypographyStyles.h3,
  ({ theme: { typography } }: { theme: ITheme }) => ({
    fontWeight: typography.fontWeight.bold,
  })
);

export const FeedbackDescription = styled.p(
  TypographyStyles.body1,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.text.light,
  })
);

export const Upvotes = styled.button(
  TypographyStyles.body3,
  ({ theme: { pallette, typography }, isUpvoted }: any) => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    borderRadius: "10px",
    padding: "0.75rem",
    height: "max-content",
    cursor: "pointer",
    fontWeight: typography.fontWeight.bold,
    color: isUpvoted ? pallette.text.white : pallette.text.main,
    background: isUpvoted ? pallette.info.main : pallette.grey.main,

    svg: {
      path: {
        stroke: isUpvoted ? pallette.common.white : pallette.info.main,
      },
    },

    ":hover": {
      background: isUpvoted ? pallette.info.main : pallette.grey.dark,
    },
  })
);

export const FeedbackContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentCountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`;

export const CommentCount = styled.span``;
