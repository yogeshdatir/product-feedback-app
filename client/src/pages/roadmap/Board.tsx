import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import { type IFeedback, type IStatus } from "../../utils/types";
import BoardList from "./BoardList";
import { BoardContainer } from "./Roadmap.styled";
import { useStatus } from "../../contexts/StatusContext";

interface Props {
  activeTabIndex: number;
  isMobileDevice: boolean;
}

function Board({ activeTabIndex, isMobileDevice }: Props) {
  const { feedbackList } = useFeedbacks();
  const { status } = useStatus();

  const statusWiseFilteredFeedbackList = (
    statusToFilter: IFeedback["status"]
  ) => {
    const filteredList = feedbackList.filter(
      (feedback: IFeedback) => feedback.status === statusToFilter && feedback
    );
    return filteredList;
  };

  return (
    <BoardContainer>
      {status.map((statusObj: IStatus, index: number) => {
        if (statusObj.name === "suggestion" || (isMobileDevice && index !== activeTabIndex))
          return null;
        if (!isMobileDevice) {
          return (
            <BoardList
              key={uuidv4()}
              statusWiseFilteredFeedbackList={statusWiseFilteredFeedbackList(
                statusObj.name
              )}
              statusForList={statusObj}
            />
          );
        }
        return (
          <BoardList
            key={uuidv4()}
            statusWiseFilteredFeedbackList={statusWiseFilteredFeedbackList(
              statusObj.name
            )}
            statusForList={statusObj}
          />
        );
      })}
    </BoardContainer>
  );
}

export default Board;
