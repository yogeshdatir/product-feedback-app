import React from "react";
import TextareaField from "../feedbackForm/TextareaField";
import Button from "../../components/Button";
import { ReplyFormContainer } from "./ViewFeedback.styled";

// interface Props {}

function ReplyForm() {
  return (
    <ReplyFormContainer>
      <TextareaField
        label=""
        subLabel=""
        placeholder="Type your reply here"
        fieldContainerStyle={{ flex: 1 }}
      />
      <Button type="button" backgroundColor="primary" color="buttonPrimary">
        Post Reply
      </Button>
    </ReplyFormContainer>
  );
}

export default ReplyForm;
