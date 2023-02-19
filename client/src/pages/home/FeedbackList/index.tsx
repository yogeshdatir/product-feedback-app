import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import { type IFeedback } from "../../../utils/types";
import EmptyState from "./EmptyState";
import { ContentWrapper } from "./FeedbackList.styled";
import { useFeedbacks } from "../../../contexts/FeedbackContext";
import FeedbackCard from "./FeedbackCard";

function FeedbackList() {
  const {
    feedbackList,
    loading,
    error,
    filteredFeedbackList,
    categoryToFilter,
  } = useFeedbacks();

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  if (
    (categoryToFilter && filteredFeedbackList.length === 0) ||
    feedbackList.length === 0
  ) {
    return <EmptyState />;
  }

  return (
    <ContentWrapper>
      {categoryToFilter
        ? filteredFeedbackList.map((feedback: IFeedback) => (
            <FeedbackCardWrapper key={uuidv4()} feedback={feedback} />
          ))
        : feedbackList.map((feedback: IFeedback) => (
            <FeedbackCardWrapper key={uuidv4()} feedback={feedback} />
          ))}
    </ContentWrapper>
  );
}

function FeedbackCardWrapper({ feedback }: { feedback: IFeedback }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/view/${feedback.id}`);
  };

  return <FeedbackCard feedback={feedback} onClick={handleClick} />;
}

export default FeedbackList;
