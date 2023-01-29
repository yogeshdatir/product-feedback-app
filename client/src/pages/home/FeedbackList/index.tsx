import { IFeedback } from "../../../utils/types";
import EmptyState from "./EmptyState";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import {
  FeedbackCard,
  FeedbackDescription,
  FeedbackTitle,
  ContentWrapper,
} from "./FeedbackList.styled";
import { useFeedbacks } from "../../../contexts/FeedbackContext";
import { ViewBadge } from "../../../components/Common.styled";

const FeedbackList = () => {
  const {
    feedbackList,
    loading,
    error,
    filteredFeedbackList,
    categoryToFilter,
  } = useFeedbacks();

  if (loading) {
    return <p>loading</p>;
  } else if (error) {
    return <p>error</p>;
  } else if (
    (categoryToFilter && filteredFeedbackList.length === 0) ||
    !feedbackList.length
  ) {
    return <EmptyState />;
  }

  return (
    <ContentWrapper>
      {categoryToFilter
        ? filteredFeedbackList.map((feedback: IFeedback) => {
            return <FeedbackCardWrapper key={uuidv4()} feedback={feedback} />;
          })
        : feedbackList.map((feedback: IFeedback) => {
            return <FeedbackCardWrapper key={uuidv4()} feedback={feedback} />;
          })}
    </ContentWrapper>
  );
};

function FeedbackCardWrapper({
  feedback: { id, title, description, category },
}: {
  feedback: IFeedback;
}) {
  return (
    <Link to={`/view/${id}`}>
      <FeedbackCard>
        <FeedbackTitle>{title}</FeedbackTitle>
        <FeedbackDescription style={{ marginTop: "0.25rem" }}>
          {description}
        </FeedbackDescription>
        <ViewBadge>{category}</ViewBadge>
      </FeedbackCard>
    </Link>
  );
}

export default FeedbackList;
