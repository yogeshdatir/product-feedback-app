import React from "react";

interface Props {
  edit?: boolean;
}

const FeedbackForm = ({ edit }: Props) => {
  return <div>FeedbackForm {edit ? "Edit" : "New"}</div>;
};

export default FeedbackForm;
