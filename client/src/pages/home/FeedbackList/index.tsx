import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { type IFeedback } from "../../../utils/types";
import EmptyState from "./EmptyState";
import {
  FeedbackCard,
  FeedbackDescription,
  FeedbackTitle,
  ContentWrapper,
} from "./FeedbackList.styled";
import { useFeedbacks } from "../../../contexts/FeedbackContext";
import { ViewBadge } from "../../../components/Common.styled";

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
