import React from "react";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import { IFeedback, IStatus } from "../../utils/types";
import BoardList from "./BoardList";
import { BoardContainer } from "./Roadmap.styled";
import { useStatus } from "../../contexts/StatusContext";

interface Props {}

const Board = (props: Props) => {
  const { feedbackList } = useFeedbacks();
  const { status } = useStatus();

  const statusWiseFilteredFeedbackList = (
    statusToFilter: IFeedback["status"]
  ) => {
    const filteredList = feedbackList.filter((feedback: IFeedback) => {
      if (feedback.status === statusToFilter) return feedback;
    });
    return filteredList;
  };

  return (
    <BoardContainer>
      {status.map((statusObj: IStatus, index: number) => {
        if (statusObj.name === "suggestion") return;
        return (
          <BoardList
            key={index}
            statusWiseFilteredFeedbackList={statusWiseFilteredFeedbackList(
              statusObj.name
            )}
            statusForList={statusObj}
          />
        );
      })}
    </BoardContainer>
  );
};

export default Board;
