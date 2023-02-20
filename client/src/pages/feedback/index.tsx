import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActionHeader } from "../../components/Common.styled";
import {
  getCommentsForFeedback,
  getFeedback,
} from "../../services/feedbackAPIs";
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

const CommentSectionContent = styled.div``;

const Comment = styled.div``;

function Feedback() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState<IFeedback | null>(null);
  const [comments, setComments] = useState<any>(null);
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
      } else {
        try {
          const result = await getFeedback(feedbackID);
          setFeedback(result.data[0]);
          setLoading(false);
        } catch (err: any) {
          console.error(err);
          setError(err);
          setLoading(false);
        }
      }
    },
    [feedback, feedbackList]
  );

  const fetchComments = useCallback(async (feedbackID: IFeedback["id"]) => {
    setLoading(true);
    try {
      const result = await getCommentsForFeedback(feedbackID);
      setComments(result.data);
      setLoading(false);
    } catch (err: any) {
      console.error(err);
      setError(err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id !== undefined) {
      fetchFeedback(id);
      fetchComments(id);
    }
  }, [id, fetchFeedback, fetchComments]);

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
          <StyledFeedbackCard style={{ flexDirection: "column" }}>
            <CommentSectionHeader>
              {+feedback.commentsCount + +feedback.repliesCount} comments
            </CommentSectionHeader>
            <CommentSectionContent>
              {comments?.map((comment: any) => (
                <Comment>
                  <img
                    src={`../.${comment.authorImage}`}
                    alt={comment.authorName}
                  />
                  {comment.content}
                </Comment>
              ))}
            </CommentSectionContent>
          </StyledFeedbackCard>
        </>
      )}
    </Container>
  );
}

export default Feedback;
