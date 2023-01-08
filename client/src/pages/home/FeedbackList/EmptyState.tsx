import React from "react";
import { Link } from "react-router-dom";
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
      <AddFeedbackButton>
        <Link to="/add">Add feedback</Link>
      </AddFeedbackButton>
    </div>
  );
};

export default EmptyState;
