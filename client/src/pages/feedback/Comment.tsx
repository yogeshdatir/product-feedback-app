import React from "react";
import { IComment, IReply } from "../../utils/types";
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

interface Props {
  comment: IComment;
  isLastComment: boolean;
}

function Comment({ comment, isLastComment }: Props) {
  const url = `/src/${comment.authorImage}`;
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const image = require(url);
  const replyCount = comment.replies?.length;

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
            <ReplyButton>Reply</ReplyButton>
          </ContentHeader>
          <Content>{comment.content}</Content>
          {comment.replies && (
            <ReplySectionContent>
              {comment.replies?.map((reply: IReply, index: number) => (
                <Reply
                  key={reply.id}
                  reply={reply}
                  isLastReply={replyCount === index + 1}
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
