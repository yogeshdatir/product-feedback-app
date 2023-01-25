import styled from "@emotion/styled";
import { H1 } from "../../components/Common.styled";
import { ITheme } from "../../utils/types";

export const FeedbackFormWrapper = styled.div`
  width: 540px;
  margin: auto;
`;

export const FormWrapper = styled.div`
  margin-top: 4.25rem;
  padding: 2.625rem 3.25rem;
  background: #ffffff;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  .feedback-icon {
    position: absolute;
    top: -68px;
  }
`;

export const FormTitle = styled(H1)(
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.text.main,
  })
);

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormActionsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
