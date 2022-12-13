import React from "react";
import { AddFeedbackButton } from "../Header.styled";

interface Props {}

const EmptyState = (props: Props) => {
  return (
    <div>
      <p>There is no feedback yet.</p>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <AddFeedbackButton>Add Feedback</AddFeedbackButton>
    </div>
  );
};

export default EmptyState;
