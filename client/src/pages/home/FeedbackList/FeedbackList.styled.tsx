import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FeedbackCard = styled.div`
  padding: 28px 32px;

  background: #ffffff;
  border-radius: 10px;
`;

export const FeedbackTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */

  letter-spacing: -0.25px;

  color: #3a4374;
`;

export const FeedbackDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  color: #647196;
`;
