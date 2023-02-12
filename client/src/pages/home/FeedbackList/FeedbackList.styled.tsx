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
    margin: ["1.5rem 1rem", "1.5rem 1rem", "1.5rem 0"],
  })
);

export const FeedbackCard = styled.div(
  ({ theme: { pallette }, isForView }: any) => ({
    background: pallette.common.white,
    borderRadius: "10px",
    color: pallette.secondary.dark,

    ":hover": {
      FeedbackTitle: {
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
