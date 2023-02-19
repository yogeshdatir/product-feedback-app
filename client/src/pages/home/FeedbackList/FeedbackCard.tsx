import React, { MouseEvent } from "react";
import { ViewBadge } from "../../../components/Common.styled";
import {
  Upvotes,
  FeedbackContentWrapper,
  FeedbackTitle,
  FeedbackDescription,
  CommentCountWrapper,
  CommentCount,
  StyledFeedbackCard,
} from "./FeedbackList.styled";
import { IFeedback } from "../../../utils/types";
import { ReactComponent as UpArrow } from "../../../assets/shared/icon-arrow-up.svg";
import { ReactComponent as CommentsIcon } from "../../../assets/shared/icon-comments.svg";

interface Props {
  feedback: IFeedback;
  onClick?: () => void;
  isForView?: boolean;
}

function FeedbackCard({ feedback, onClick, isForView }: Props) {
  return (
    <StyledFeedbackCard onClick={onClick} isForView={isForView}>
      <Upvotes
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
        }}
      >
        <UpArrow />
        <span>{feedback.upvotes}</span>
      </Upvotes>
      <FeedbackContentWrapper>
        <FeedbackTitle className="feedback-title">
          {feedback.title}
        </FeedbackTitle>
        <FeedbackDescription style={{ marginTop: "0.25rem" }}>
          {feedback.description}
        </FeedbackDescription>
        <ViewBadge>{feedback.category}</ViewBadge>
      </FeedbackContentWrapper>
      <CommentCountWrapper>
        <CommentsIcon />
        <CommentCount>
          {+feedback.commentsCount + +feedback.repliesCount}
        </CommentCount>
      </CommentCountWrapper>
    </StyledFeedbackCard>
  );
}

export default FeedbackCard;
