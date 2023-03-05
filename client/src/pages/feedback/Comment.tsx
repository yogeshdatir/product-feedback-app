import React, { useState } from "react";
import { IComment, IReply, IFeedback } from "../../utils/types";
import {
  AuthorName,
  AuthorUsername,
  Avatar,
  AvatarGrid,
  CommentDivider,
  CommentWrapper,
  Content,
  ContentGrid,
  ContentHeader,
  ContentHeaderGrid,
  ReplyButton,
  ReplySectionContent,
  Timeline,
} from "./ViewFeedback.styled";
import Reply from "./Reply";
import ReplyForm from "./ReplyForm";

interface Props {
  comment: IComment;
  isLastComment: boolean;
  parentFeedbackId: IFeedback["id"];
  addReplyInComments: (reply: IReply) => void;
}

function Comment({
  comment,
  isLastComment,
  parentFeedbackId,
  addReplyInComments,
}: Props) {
  const url = `/src/${comment.authorImage}`;
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const image = require(url);
  const replyCount = comment.replies?.length;
  const [displayNewReplyForm, setDisplayNewReplyForm] = useState(false);

  const handleNewReply = () => {
    setDisplayNewReplyForm((prevState: boolean) => !prevState);
  };

  // TODO: Show loading for comment when comment/reply is being added.
  return (
    <>
      <CommentWrapper>
        <AvatarGrid>
          <Avatar src={image} alt={comment.authorName} />
          {replyCount && <Timeline />}
        </AvatarGrid>
        <ContentGrid>
          <ContentHeader>
            <ContentHeaderGrid>
              <AuthorName>{comment.authorName}</AuthorName>
              <AuthorUsername>{`@${comment.authorUsername}`}</AuthorUsername>
            </ContentHeaderGrid>
            <ReplyButton onClick={handleNewReply}>Reply</ReplyButton>
          </ContentHeader>
          <Content>{comment.content}</Content>
          {displayNewReplyForm && (
            <ReplyForm
              parentFeedbackId={parentFeedbackId}
              parentCommentId={comment.id}
              replyingToUserId={comment.authorUserId}
              addReplyInComments={addReplyInComments}
              setDisplayNewReplyForm={setDisplayNewReplyForm}
            />
          )}
          {comment.replies && (
            <ReplySectionContent>
              {comment.replies?.map((reply: IReply, index: number) => (
                <Reply
                  key={reply.id}
                  reply={reply}
                  isLastReply={replyCount === index + 1}
                  parentFeedbackId={parentFeedbackId}
                  addReplyInComments={addReplyInComments}
                />
              ))}
            </ReplySectionContent>
          )}
        </ContentGrid>
      </CommentWrapper>
      {!isLastComment && <CommentDivider />}
    </>
  );
}

export default Comment;
