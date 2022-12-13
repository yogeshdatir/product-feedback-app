import React, { useState } from "react";
import EmptyState from "./EmptyState";

interface Props {}

const FeedbackList = (props: Props) => {
  const [feedbackList, setFeedbackList] = useState([]);

  if (!feedbackList.length) {
    return <EmptyState />;
  }

  return <div>FeedbackList</div>;
};

export default FeedbackList;
