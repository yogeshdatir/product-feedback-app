import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAllFeedbacks } from "../../../services/apis";
import { IFeedback } from "../../../types";
import EmptyState from "./EmptyState";
import { v4 as uuidv4 } from "uuid";

interface Props {}

const FeedbackList = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [feedbackList, setFeedbackList] = useState([]);
  const [error, setError] = useState(null);

  const fetchFeedbackList = async () => {
    try {
      const result = await getAllFeedbacks();
      setFeedbackList(result.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbackList();
  }, []);

  if (loading) {
    return <p>loading</p>;
  } else if (error) {
    return <p>error</p>;
  } else if (!feedbackList.length) {
    return <EmptyState />;
  }

  return (
    <div>
      {feedbackList.map((feedback: IFeedback) => {
        return (
          <div key={uuidv4()}>
            <p>{feedback.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackList;
