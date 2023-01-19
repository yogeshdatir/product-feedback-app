import styled from "@emotion/styled";
import { ITheme } from "../../../utils/types";

export const ContentWrapper = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FeedbackCard = styled.div(
  ({ theme: { colors } }: { theme: ITheme }) => ({
    padding: "28px 32px",
    background: colors.white,
    borderRadius: "10px",
    color: colors.americanBlue,

    ":hover": {
      "${FeedbackTitle}": {
        color: colors.royalBlue,
      },
    },
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
