import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ActionHeader, ViewBadge } from "../../components/Common.styled";
import { getFeedback } from "../../services/feedbackAPIs";
import { IFeedback } from "../../utils/types";
import {
  FeedbackCard,
  FeedbackTitle,
  FeedbackDescription,
  ContentWrapper,
} from "../home/FeedbackList/FeedbackList.styled";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import GoBackButton from "../../components/GoBackButton";
import EditButton from "./EditButton";

const Container = styled.div`
  width: 730px;
  margin: auto;
`;

interface Props {}

const Feedback = (props: Props) => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState<IFeedback | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { feedbackList } = useFeedbacks();

  const fetchFeedback = async (id: IFeedback["id"]) => {
    const feedbackFromContext = await feedbackList.find(
      (feedback: IFeedback) => {
        if (feedback.id === id) return feedback;
      }
    );

    if (feedbackFromContext) {
      setFeedback(feedbackFromContext);
      setLoading(false);
    } else {
      try {
        const result = await getFeedback(id);
        setFeedback(result.data[0]);
        setLoading(false);
      } catch (err: any) {
        console.log(err);
        setError(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (id) {
      fetchFeedback(id);
    }
  }, [id]);

  return (
    <Container>
      <ActionHeader>
        <GoBackButton />
        {feedback && <EditButton feedbackId={id} />}
      </ActionHeader>
      <ContentWrapper>
        {loading ? (
          <p>loading</p>
        ) : error ? (
          <p>error</p>
        ) : !feedback ? (
          <p>Not found</p>
        ) : (
          <FeedbackCard>
            <FeedbackTitle>{feedback.title}</FeedbackTitle>
            <FeedbackDescription style={{ marginTop: "0.25rem" }}>
              {feedback.description}
            </FeedbackDescription>
            <ViewBadge>{feedback.category}</ViewBadge>
          </FeedbackCard>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default Feedback;
