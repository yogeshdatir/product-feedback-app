import styled from "@emotion/styled";
import Button from "../../components/Button";
import { mq, TypographyStyles } from "../../utils/themes";
import { ITheme } from "../../utils/types";

export const FeedbackFormWrapper = styled.div`
  max-width: 540px;
  margin: auto;
`;

export const FormWrapper = styled.div(
  {
    background: "#ffffff",
    borderRadius: "10px",
  },
  mq({
    margin: ["0 1.5rem", "0 1.5rem", 0],
    marginTop: ["3rem", "3rem", "4.25rem"],
    padding: ["3rem 1.5rem", "3rem 1.5rem", "2.625rem 3.25rem"],
  })
);

export const Form = styled.form(
  {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    position: "relative",
  },
  mq({
    ".feedback-icon": [
      { position: "absolute", top: "-75px" },
      { position: "absolute", top: "-75px" },
      { position: "absolute", top: "-70px" },
    ],
  })
);

export const FormTitle = styled("h1")(
  TypographyStyles.h1,
  ({ theme: { pallette } }: { theme: ITheme }) => ({
    color: pallette.text.main,
  })
);

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormActionsWrapper = styled.div(
  {
    display: "flex",
    gap: "1rem",
  },
  mq({
    flexDirection: ["column", "column", "row"],
  })
);

export const CancelButton = styled(Button)(
  mq({
    marginLeft: ["none", "none", "auto"],
  })
);
