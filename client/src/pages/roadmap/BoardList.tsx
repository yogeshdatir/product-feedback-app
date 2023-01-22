import React, { FC } from "react";
import { IFeedback, IStatus } from "../../utils/types";
import { StatusDot, ViewBadge } from "../../components/Common.styled";
import {
  ListHeader,
  ListTitle,
  ListDescription,
  BoardFeedbackCardWrapper,
  BoardFeedbackCard,
  FeedbackCardHeader,
} from "./Roadmap.styled";
import { Link } from "react-router-dom";
import {
  FeedbackDescription,
  FeedbackTitle,
} from "../home/FeedbackList/FeedbackList.styled";
import Badge from "../../components/Badge";

interface Props {
  statusWiseFilteredFeedbackList: IFeedback[];
  statusForList: IStatus;
}

const BoardList = ({
  statusWiseFilteredFeedbackList,
  statusForList,
}: Props) => {
  return (
    <div>
      <ListHeader>
        <ListTitle>
          {statusForList.name} {`(${statusWiseFilteredFeedbackList.length})`}
        </ListTitle>
        <ListDescription>{statusForList.description}</ListDescription>
      </ListHeader>
      {statusWiseFilteredFeedbackList.map(
        ({ status, title, description, category, id }: IFeedback) => {
          return (
            <BoardFeedbackCardWrapper key={id}>
              <Link to={`/view/${id}`}>
                <BoardFeedbackCard statusName={status}>
                  <FeedbackCardHeader>
                    <StatusDot name={status} />
                    {status.replace("-", " ")}
                  </FeedbackCardHeader>
                  <FeedbackTitle>{title}</FeedbackTitle>
                  <FeedbackDescription style={{ marginTop: "0.25rem" }}>
                    {description}
                  </FeedbackDescription>
                  <ViewBadge>{category}</ViewBadge>
                </BoardFeedbackCard>
              </Link>
            </BoardFeedbackCardWrapper>
          );
        }
      )}
    </div>
  );
};

export default BoardList;
