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
import Badge from "../../../components/Badge";
import { useFeedbacks } from "../../../contexts/FeedbackContext";

interface Props {}

const FeedbackList = (props: Props) => {
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
            return (
              <Link to={`/view/${feedback.id}`} key={uuidv4()}>
                <FeedbackCard>
                  <FeedbackTitle>{feedback.title}</FeedbackTitle>
                  <FeedbackDescription style={{ marginTop: "0.25rem" }}>
                    {feedback.description}
                  </FeedbackDescription>
                  <Badge style={{ marginTop: "0.75rem" }}>
                    {feedback.category}
                  </Badge>
                </FeedbackCard>
              </Link>
            );
          })
        : feedbackList.map((feedback: IFeedback) => {
            return (
              <Link to={`/view/${feedback.id}`} key={uuidv4()}>
                <FeedbackCard>
                  <FeedbackTitle>{feedback.title}</FeedbackTitle>
                  <FeedbackDescription style={{ marginTop: "0.25rem" }}>
                    {feedback.description}
                  </FeedbackDescription>
                  <Badge style={{ marginTop: "0.75rem" }}>
                    {feedback.category}
                  </Badge>
                </FeedbackCard>
              </Link>
            );
          })}
    </ContentWrapper>
  );
};

export default FeedbackList;
