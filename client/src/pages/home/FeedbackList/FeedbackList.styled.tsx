import styled from "@emotion/styled";
import { mq } from "../../../utils/themes";
import { ITheme } from "../../../utils/types";

export const ContentWrapper = styled.div(
  {
    margin: "1.5rem 0",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  mq({
    margin: ["1.5rem 1rem", "1.5rem 1rem", "1.5rem 0"],
  })
);

export const FeedbackCard = styled.div(
  ({ theme: { colors }, isForView }: any) => ({
    padding: "28px 32px",
    background: colors.white,
    borderRadius: "10px",
    color: colors.americanBlue,

    ":hover": {
      "${FeedbackTitle}": {
        color: isForView ? colors.americanBlue : colors.royalBlue,
      },
    },
  }),
  mq({
    padding: ["1.5rem", "1.5rem", "28px 32px"],
  })
);

export const FeedbackTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
`;

export const FeedbackDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  color: #647196;
`;
