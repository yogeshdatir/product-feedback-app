import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActionHeader } from "../../components/Common.styled";
import {
  getCommentsForFeedback,
  getFeedback,
} from "../../services/feedbackAPIs";
import { IComment, IFeedback, IReply } from "../../utils/types";
import { ContentWrapper } from "../home/FeedbackList/FeedbackList.styled";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import GoBackButton from "../../components/GoBackButton";
import EditButton from "./EditButton";
import FeedbackCard from "../home/FeedbackList/FeedbackCard";
import {
  Container,
  CommentSectionHeader,
  CommentSectionContent,
  CommentSectionCard,
} from "./ViewFeedback.styled";
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

function Feedback() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState<IFeedback | null>(null);
  const [comments, setComments] = useState<IComment[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { feedbackList } = useFeedbacks();

  const fetchFeedback = useCallback(
    async (feedbackID: IFeedback["id"]) => {
      const feedbackFromContext = feedbackList.filter(
        (fb: IFeedback) => fb.id === feedbackID
      )[0];

      try {
        if (feedbackFromContext != null) {
          setFeedback(feedbackFromContext);
          setLoading(false);
        } else {
          const result = await getFeedback(feedbackID);
          setFeedback(result.data[0]);
        }
        const result = await getCommentsForFeedback(feedbackID);
        setComments(result.data);
        setLoading(false);
      } catch (err: any) {
        console.error(err);
        setError(err);
        setLoading(false);
      }
    },
    [feedbackList]
  );

  const fetchData = useCallback(
    (feedbackId: IFeedback["id"]) => {
      fetchFeedback(feedbackId);
    },
    [fetchFeedback]
  );

  useEffect(() => {
    if (id !== undefined) {
      fetchData(id);
    }
  }, [fetchData, id]);

  // ? Add context for replies?
  const addReplyInComments = (reply: IReply) => {
    if (!comments) return;
    const updatedComments = comments?.map((comment: IComment) => {
      if (comment.id === reply.parentComment) {
        if (comment.replies)
          return { ...comment, replies: [reply, ...comment.replies] };
        return { ...comment, replies: [reply] };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const commentCount = comments?.length;

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
          <CommentSectionCard>
            <CommentSectionHeader>
              {+feedback.commentsCount + +feedback.repliesCount} comments
            </CommentSectionHeader>
            <CommentSectionContent>
              {comments?.map((comment: IComment, index: number) => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  isLastComment={commentCount === index + 1}
                  parentFeedbackId={feedback.id}
                  addReplyInComments={addReplyInComments}
                />
              ))}
            </CommentSectionContent>
          </CommentSectionCard>
          <NewCommentForm
            parentFeedbackId={feedback.id}
            setComments={setComments}
          />
        </>
      )}
    </Container>
  );
}

export default Feedback;
