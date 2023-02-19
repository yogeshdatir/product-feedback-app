import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActionHeader } from "../../components/Common.styled";
import { getFeedback } from "../../services/feedbackAPIs";
import { type IFeedback } from "../../utils/types";
import {
  ContentWrapper,
  StyledFeedbackCard,
} from "../home/FeedbackList/FeedbackList.styled";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import GoBackButton from "../../components/GoBackButton";
import EditButton from "./EditButton";
import { mq } from "../../utils/themes";
import FeedbackCard from "../home/FeedbackList/FeedbackCard";

const Container = styled.div(
  {
    margin: "auto",
  },
  mq({
    width: ["100%", "100%", "689px", "730px"],
  })
);

const CommentSectionHeader = styled.p``;

function Feedback() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState<IFeedback | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { feedbackList } = useFeedbacks();

  const fetchFeedback = useCallback(
    async (feedbackID: IFeedback["id"]) => {
      const feedbackFromContext = feedbackList.find((fb: IFeedback) => {
        if (fb.id === feedbackID) return feedback;
        return null;
      });

      if (feedbackFromContext != null) {
        setFeedback(feedbackFromContext);
        setLoading(false);
      } else if (id !== undefined) {
        try {
          const result = await getFeedback(id);
          setFeedback(result.data[0]);
          setLoading(false);
        } catch (err: any) {
          console.error(err);
          setError(error);
          setLoading(false);
        }
      }
    },
    [error, feedback, feedbackList, id]
  );

  useEffect(() => {
    if (id !== undefined) {
      fetchFeedback(id);
    }
  }, [id, fetchFeedback]);

  return (
    <Container>
      <ActionHeader>
        <GoBackButton />
        {feedback != null && <EditButton feedbackId={id} />}
      </ActionHeader>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>error</p>
      ) : feedback == null ? (
        <p>Not found</p>
      ) : (
        <>
          <ContentWrapper>
            <FeedbackCard feedback={feedback} isForView />
          </ContentWrapper>
          <StyledFeedbackCard>
            <CommentSectionHeader>
              {+feedback.commentcount + +feedback.repliescount} comments
            </CommentSectionHeader>
          </StyledFeedbackCard>
        </>
      )}
    </Container>
  );
}

export default Feedback;
