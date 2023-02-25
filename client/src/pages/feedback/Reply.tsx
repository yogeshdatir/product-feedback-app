import React from "react";
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
import { IReply } from "../../utils/types";

interface Props {
  reply: IReply;
  isLastReply: boolean;
}

function Reply({ reply, isLastReply }: Props) {
  const url = `/src/${reply.authorImage}`;
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const image = require(url);

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
          <ReplyButton>Reply</ReplyButton>
        </ContentHeader>
        <Content>
          <ReplyingToUsername>{`@${reply.replyingToUsername}`}</ReplyingToUsername>
          {reply.content}
        </Content>
      </ContentGrid>
    </CommentWrapper>
  );
}

export default Reply;
