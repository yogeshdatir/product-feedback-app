import React from "react";
import { AddFeedbackButton, HeaderTitle, Wrapper } from "./Header.styled";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import SuggestionsIcon from "../../assets/suggestions/icon-suggestions.svg";

interface Props {}

const Header = (props: Props) => {
  const { filteredFeedbackList, feedbackList, categoryToFilter } =
    useFeedbacks();
  const suggestionCount = categoryToFilter
    ? filteredFeedbackList.length
    : feedbackList.length;
  return (
    <Wrapper>
      <img src={SuggestionsIcon} />
      <HeaderTitle>{`${suggestionCount} Suggestions`}</HeaderTitle>
      <AddFeedbackButton
        style={{
          marginLeft: "auto",
        }}
        to="/add"
      >
        + Add feedback
      </AddFeedbackButton>
    </Wrapper>
  );
};

export default Header;
