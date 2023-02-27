import React, { useState } from "react";
import {
  AvatarGrid,
  Avatar,
  ContentGrid,
  ContentHeader,
  ContentHeaderGrid,
  AuthorName,
  AuthorUsername,
  ReplyButton,
  Content,
  CommentWrapper,
  ReplyingToUsername,
  HidePartialTimeline,
} from "./ViewFeedback.styled";
import { IFeedback, IReply } from "../../utils/types";
import ReplyForm from "./ReplyForm";

interface Props {
  reply: IReply;
  isLastReply: boolean;
  parentFeedbackId?: IFeedback["id"];
}

function Reply({ reply, isLastReply, parentFeedbackId }: Props) {
  const url = `/src/${reply.authorImage}`;
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const image = require(url);
  const [displayNewReplyForm, setDisplayNewReplyForm] = useState(false);

  const handleNewReply = () => {
    setDisplayNewReplyForm((prevState: boolean) => !prevState);
  };

  return (
    <CommentWrapper>
      <AvatarGrid>
        <Avatar src={image} alt={reply.authorName} />
      </AvatarGrid>
      {isLastReply && <HidePartialTimeline />}
      <ContentGrid>
        <ContentHeader>
          <ContentHeaderGrid>
            <AuthorName>{reply.authorName}</AuthorName>
            <AuthorUsername>{`@${reply.authorUsername}`}</AuthorUsername>
          </ContentHeaderGrid>
          <ReplyButton onClick={handleNewReply}>Reply</ReplyButton>
        </ContentHeader>
        <Content>
          <ReplyingToUsername>{`@${reply.replyingToUsername}`}</ReplyingToUsername>
          {reply.content}
        </Content>
        {displayNewReplyForm && (
          <ReplyForm parentFeedbackId={parentFeedbackId} />
        )}
      </ContentGrid>
    </CommentWrapper>
  );
}

export default Reply;
