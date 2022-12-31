import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAllFeedbacks } from "../../../services/apis";
import { IFeedback } from "../../../types";
import EmptyState from "./EmptyState";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import {
  FeedbackCard,
  FeedbackDescription,
  FeedbackTitle,
  ContentWrapper,
} from "./FeedbackList.styled";
import Badge from "../../../components/Badge";

interface Props {}

const FeedbackList = (props: Props) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
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
    <ContentWrapper>
      {feedbackList.map((feedback: IFeedback) => {
        return (
          <Link to={`/${feedback.id}`} key={uuidv4()}>
            <FeedbackCard>
              <FeedbackTitle>{feedback.title}</FeedbackTitle>
              <FeedbackDescription style={{ marginTop: "0.25rem" }}>
                {feedback.description}
              </FeedbackDescription>
              <Badge style={{ marginTop: "0.75rem" }}>
                {feedback.category}
              </Badge>
            </FeedbackCard>
          </Link>
        );
      })}
    </ContentWrapper>
  );
};

export default FeedbackList;
