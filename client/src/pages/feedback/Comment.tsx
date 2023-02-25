import React from "react";
import { IComment } from "../../utils/types";
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
} from "./ViewFeedback.styled";

interface Props {
  comment: IComment;
  isLastComment: boolean;
}

function Comment({ comment, isLastComment }: Props) {
  const url = `/src/${comment.authorImage}`;
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const image = require(url);
  return (
    <>
      <CommentWrapper>
        <AvatarGrid>
          <Avatar src={image} alt={comment.authorName} />
        </AvatarGrid>
        <ContentGrid>
          <ContentHeader>
            <ContentHeaderGrid>
              <AuthorName>{comment.authorName}</AuthorName>
              <AuthorUsername>{`@${comment.authorUsername}`}</AuthorUsername>
            </ContentHeaderGrid>
            <ReplyButton>Reply</ReplyButton>
          </ContentHeader>
          <Content>{comment.content}</Content>
        </ContentGrid>
      </CommentWrapper>
      {!isLastComment && <CommentDivider />}
    </>
  );
}

export default Comment;
