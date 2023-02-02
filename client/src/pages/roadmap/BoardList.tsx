import React from 'react';
import { Link } from 'react-router-dom';
import { type IFeedback, type IStatus } from '../../utils/types';
import { StatusDot } from '../../components/Common.styled';
import {
  ListHeader,
  ListTitle,
  ListDescription,
  BoardFeedbackCardWrapper,
  BoardFeedbackCard,
  FeedbackCardHeader,
  ListWrapper,
  RoadmapFeedbackCardDescription,
  RoadmapViewBadge,
} from './Roadmap.styled';
import { FeedbackTitle } from '../home/FeedbackList/FeedbackList.styled';

interface Props {
  statusWiseFilteredFeedbackList: IFeedback[]
  statusForList: IStatus
}

function BoardList({
  statusWiseFilteredFeedbackList,
  statusForList,
}: Props) {
  return (
    <ListWrapper>
      <ListHeader>
        <ListTitle>
          {statusForList.name}
          {' '}
          {`(${statusWiseFilteredFeedbackList.length})`}
        </ListTitle>
        <ListDescription>{statusForList.description}</ListDescription>
      </ListHeader>
      {statusWiseFilteredFeedbackList.map(
        ({
          status, title, description, category, id,
        }: IFeedback) => (
          <BoardFeedbackCardWrapper key={id}>
            <Link to={`/view/${id}`}>
              <BoardFeedbackCard statusName={status}>
                <FeedbackCardHeader>
                  <StatusDot name={status} />
                  {status.replace('-', ' ')}
                </FeedbackCardHeader>
                <FeedbackTitle>{title}</FeedbackTitle>
                <RoadmapFeedbackCardDescription>
                  {description}
                </RoadmapFeedbackCardDescription>
                <RoadmapViewBadge>{category}</RoadmapViewBadge>
              </BoardFeedbackCard>
            </Link>
          </BoardFeedbackCardWrapper>
        ),
      )}
    </ListWrapper>
  );
}

export default BoardList;
